//
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from '../common/app.error';
import { BadInputError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';

const httpOptions = {
  headers:
    new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token':
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzk3MmI3NGM0MmM2MjAwMTZmYmQzMGEiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE1NTM0MTA5NDV9.' +
        'ePHMIkEinYHqecJn4BY1tGGpmytFTQCTD-bOeskzcmc'
    })
};

export class DataService {
  constructor(private url: string, private http: HttpClient) {}

  getAll() {
    return this.http.get(this.url).pipe(map((response) => response), catchError(this.handleError));
  }

  create(resource) {
    return this.http.post(this.url, JSON.stringify(resource), httpOptions).pipe(catchError(this.handleError));
  }

  update(resource) {
    const id = resource._id;
    delete resource._id;
    delete resource.__v;
    return this.http.put(this.url + '/' + id, JSON.stringify(resource), httpOptions).pipe(catchError(this.handleError));
  }

  delete(id) {
    return this.http.delete(this.url + '/' + id, httpOptions).pipe(catchError(this.handleError));
  }

  private handleError(error: Response) {
    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    if (error.status === 400) {
      return throwError(new BadInputError(error));
    }

    return throwError(new AppError(error));
  }
}
