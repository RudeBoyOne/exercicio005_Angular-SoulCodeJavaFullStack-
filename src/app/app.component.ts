import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';
import { FormTemplateComponent } from './components/form-template/form-template.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';


  cor: string ='black'

  @ViewChild(FormTemplateComponent) formTamplate!: FormTemplateComponent

  @ViewChild(FormReactiveComponent) formReactive!: FormReactiveComponent



  constructor(
    public dialog: MatDialog
  ){}

  confereSenhaDrive(evento: any): any{
    if(this.formTamplate.senha !== this.formTamplate.comfirmaSenha){
      evento.preventDefault()
    }
  }

  enviaFormDrive(){


     const dialogRef = this.dialog.open(DialogComponent, {
          width: '30vw',

          data: {
            nome: this.formTamplate.nome,
            sobreNome: this.formTamplate.sobreNome,
            userName: this.formTamplate.userName,
            cpf: this.formTamplate.cpf,
            telefone: this.formTamplate.telefone,
            endereco: this.formTamplate.endereco,
            complemento: this.formTamplate.complemento,          
          }

        });
        
         dialogRef.afterClosed().subscribe(() => {
        

          this.formTamplate.formDrive.nativeElement.reset()

          // window.location.reload();
        
        })
        
  }


  confereSenhaReactive(evento: any): any{
    if(this.formReactive.cadastroForm.controls['senha'].value !== this.formReactive.cadastroForm.controls['comfirmaSenha'].value){
      this.formReactive.controle = !
      evento.preventDefault()
    }
  }

  enviaFormReactive(){
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '30vw',

      data: {
        nome: this.formReactive.cadastroForm.controls['nome'].value,
        sobreNome: this.formReactive.cadastroForm.controls['sobreNome'].value,
        userName: this.formReactive.cadastroForm.controls['userName'].value,
        cpf: this.formReactive.cadastroForm.controls['cpf'].value,
        telefone: this.formReactive.cadastroForm.controls['telefone'].value,
        endereco: this.formReactive.cadastroForm.controls['endereco'].value,
        complemento: this.formReactive.cadastroForm.controls['complemento'].value,       
      }
      
    });
    dialogRef.afterClosed().subscribe(() => {
   
      this.formReactive.formReactive2.nativeElement.reset()
   
      // this.formReactive.controle = !this.formReactive.controle
   })
    
  }
      

  
}
