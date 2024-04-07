import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  constructor(public authService: AuthenticationService) {}

  logout() {
    this.authService.logout();
    // is it necessary to include this if I'm already handling this in the authService ?????
    // this.userService.setCurrentUser(null);
  }

}
