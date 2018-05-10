import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AppComponent} from './app.component';
import {AuthService} from './auth.service';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ProfileComponent} from './profile/profile.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
// Copy the firebaseConfig from your created project on the firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAWEdrQOJ8hp1H-_IUyfrXlas32aUo065I",
  authDomain: "drink-up-1524767130276.firebaseapp.com",
  databaseURL: "https://drink-up-1524767130276.firebaseio.com",
  projectId: "drink-up-1524767130276",
  storageBucket: "drink-up-1524767130276.appspot.com",
  messagingSenderId: "861899942727"
};
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    FavouritesComponent,
    AboutComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}