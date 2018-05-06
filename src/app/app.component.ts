import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) { }

  title = 'Drinkup.pl';

  ngOnInit() {
    document.getElementById('sign-in').addEventListener('click', () => {
      var signIn = document.getElementById('sign-in');
      if (signIn.classList.contains('sign-in')) {
        signIn.classList.remove('sign-in');
        location.reload();
      } else {
        signIn.classList.add('sign-in');
        this.authService.logout();
        console.log('Signed out');
      }
    });
  }
}