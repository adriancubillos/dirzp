import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found-error';
import { BadInputError } from '../common/bad-input-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: [ './posts.component.css' ]
})
export class PostsComponent implements OnInit {
  genres: any[];

  constructor(private postSvc: PostService) {}

  ngOnInit() {
    this.postSvc.getAll().subscribe((genres: any) => (this.genres = genres));
  }

  createGenre(input: HTMLInputElement) {
    const genre: any = { genre: input.value };
    this.genres.splice(0, 0, genre);

    input.value = '';

    this.postSvc.create(genre).subscribe(
      (newGenre: any) => {
        genre._id = newGenre._id;
      },
      (error: AppError) => {
        this.genres.splice(0, 1);

        if (error instanceof BadInputError) {
          // FIXME: if we had a form here
          // this.form.setErrors(error.originalError);
        } else {
          throw error;
        }
      }
    );
  }

  updateGenre(item, input: HTMLInputElement) {
    const index = this.genres.indexOf(item);
    const updateObj = Object.assign({}, item);
    input.value ? (updateObj.genre = input.value) : (updateObj.genre = 'changed');
    input.value = '';
    this.postSvc.update(updateObj).subscribe(
      (updatedGenre: any) => {
        this.genres.splice(index, 1, updatedGenre);
      },
      (error: AppError) => {
        if (error instanceof BadInputError) {
          alert(error.originalError.error);
        } else {
          throw error;
        }
      }
    );
  }

  deleteGenre(genre) {
    console.log('genre to delete', genre);

    const index = this.genres.indexOf(genre);
    this.genres.splice(index, 1);

    this.postSvc.delete(genre._id).subscribe(
      (deletedGenre: any) => {
        console.log('res genre deleted', deletedGenre);
      },
      (error: AppError) => {
        this.genres.splice(index, 0, genre);

        if (error instanceof NotFoundError) {
          // alert('This post has already been deleted.');
        } else {
          throw error;
        }
      }
    );
  }
}
