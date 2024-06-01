import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './adminViews/designate-ruser/designate-ruser.component.html',
  styleUrl: './adminViews/designate-ruser/designate-ruser.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
