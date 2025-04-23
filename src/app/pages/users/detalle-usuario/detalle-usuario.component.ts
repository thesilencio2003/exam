import { Component, inject, input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../interfaces/User';

@Component({
  selector: 'app-detalle-usuario',
  imports: [],
  templateUrl: './detalle-usuario.component.html',
  styleUrl: './detalle-usuario.component.css'
})
export default class DetalleUsuarioComponent {

  userService = inject(UserService);
  id = input.required<string>()
  user!: User;
  
  
  
    ngOnInit(){
      this.getUser();
    }
  
    getUser(){
      this.userService.getUser(this.id()).subscribe((resp) => {
        this.user = resp;
        console.log(this.user);
      });
    }

  

}
