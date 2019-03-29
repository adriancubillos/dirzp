import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { AppComponent } from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseFormComponent } from './course-form/course-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { NewCourseForm2Component } from './new-course-form2/new-course-form2.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { PostsComponent } from './posts/posts.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersComponent } from './followers/followers.component';
import { FollowersService } from './services/followers.service';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
library.add(fas);

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'followers', component: FollowersComponent },
  { path: 'followers/:id/:username', component: GithubProfileComponent },
  { path: 'posts', component: PostsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations:
    [
      AppComponent,
      SignUpFormComponent,
      ZippyComponent,
      ContactFormComponent,
      CourseFormComponent,
      NewCourseFormComponent,
      NewCourseForm2Component,
      ChangePasswordFormComponent,
      PostsComponent,
      FollowersComponent,
      NavbarComponent,
      HomeComponent,
      GithubProfileComponent,
      NotFoundComponent
    ],
  imports:
    [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      FontAwesomeModule,
      ReactiveFormsModule,
      RouterModule.forRoot(routes)
    ],
  providers: [ FollowersService, PostService, { provide: ErrorHandler, useClass: AppErrorHandler } ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
