import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    const role = this.authService.login(this.username, this.password);
    if (role === 'admin') {
      // Redirigir al panel de administración si las credenciales son correctas para un administrador
      this.router.navigate(['/admin']);
    } else if (role === 'user') {
      // Redirigir a la lista de alimentos si las credenciales son correctas para un usuario normal
      this.router.navigate(['/foods']);
    } else {
      this.errorMessage =
        'Credenciales incorrectas. Por favor, inténtelo de nuevo.';
    }
  }
}
