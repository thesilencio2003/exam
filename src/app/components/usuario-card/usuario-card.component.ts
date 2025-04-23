import { Component, input } from '@angular/core';
import { User } from '../../interfaces/User';

@Component({
  selector: 'app-usuario-card',
  imports: [],
  templateUrl: './usuario-card.component.html',
  styleUrl: './usuario-card.component.css'
})
export default class UsuarioCardComponent {
  user = input.required<User>();
}
