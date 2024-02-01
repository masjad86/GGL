import { Component } from '@angular/core';
import { 
    MatInput, MatLabel
} from '@angular/material/input';

@Component({
  selector: 'ggl-login',
  standalone: true,
  imports: [
    MatInput,
    MatLabel
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
