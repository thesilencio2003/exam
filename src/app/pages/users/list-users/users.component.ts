import { Component, inject } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/User';
import UsuarioCardComponent from "../../../components/usuario-card/usuario-card.component";
import { ListadoUsuariosComponent } from "../../../components/Listado-usuarios/listado-usuarios.component";

@Component({
  selector: 'app-users',
  imports: [ ListadoUsuariosComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export default class UsersComponent {

  usersService = inject(UserService);
  users: User[] = [];

  ngOnInit(){
    this.getUsers();
  }

  getUsers(){
    this.usersService.getUsers().subscribe({
      next: (resp) => {
        console.log('Respuesta recibida:', resp);
        this.users = resp;
        console.log('Usuarios en el componente:', this.users);
      },
      error: (err) => {
        console.error('Error al obtener usuarios:', err);
      }
    });
  }
}
