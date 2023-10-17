import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(private loginService: LoginService, private router: Router){}

    mensagemok = "Deu certo!"
    mensagemERRO = " "

  userModel = new User()

  onSubmit() {
    this.loginService.login(this.userModel).subscribe((response) => {
      console.log(this.mensagemok)
      this.router.navigateByUrl("/")
    },(respErro) => {
      this.mensagemERRO = respErro.error
      if(this.mensagemERRO == 'Password is too short'){
        this.mensagemERRO = "A senha está muito pequena!"
        this.dicas = "Utilize mais de três caractéres"
      } else {
        this.dicas = " "
      }
      
    })    
  }
  


}
