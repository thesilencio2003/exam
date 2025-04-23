import { Component, input } from '@angular/core';
import { User } from '../../interfaces/User';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listado-usuarios',
  imports: [RouterModule],
  templateUrl: './listado-usuarios.component.html',
  styleUrl: './listado-usuarios.component.css'
})
export class ListadoUsuariosComponent {
  user = input.required<User>();
}
