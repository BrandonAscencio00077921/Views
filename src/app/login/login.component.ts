import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  verificarUsuario() {
  
    if (this.email === 'admin' && this.password === 'admin123') {
      this.router.navigate(['/admin']);
    } else if (this.email === 'user' && this.password === 'user123') {
      this.router.navigate(['/user']);
    }else if (this.email === 'guard' && this.password === 'guard123') {
      this.router.navigate(['/guard']);
    }else if (this.email === 'charge' && this.password === 'charge123') {
      this.router.navigate(['/incharge']);
    }else if (this.email === 'guest' && this.password === 'guest123') {
      this.router.navigate(['/guest']);
    }else {
      alert('Credenciales incorrectas');
    }
  }
}
