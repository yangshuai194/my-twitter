import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { Routes,RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { SignupComponent } from './signup/signup.component';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', canActivate: [AuthGuard], component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
