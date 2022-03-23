import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent {

  
  controle: boolean = false

  @ViewChild('formReactive2') formReactive2!: ElementRef

  cadastroForm: FormGroup = new FormGroup({
      nome: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      sobreNome: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.minLength(11)
      ]),
      telefone: new FormControl('',[
        Validators.required,
        Validators.minLength(9)
      ]),
      endereco: new FormControl('', [
        Validators.required,
        Validators.maxLength(50)
      ]),
      complemento: new FormControl('',[
        Validators.required,
        Validators.maxLength(50)
      ]),
      senha: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ]),
      comfirmaSenha: new FormControl('',[
        Validators.required,
        Validators.minLength(6)
      ])
    
  })

  @Output() eventoSubmitReactive: EventEmitter<any> = new EventEmitter<any>()

  @Output() eventoFormSubmitReactive: EventEmitter<any> = new EventEmitter<any>()

  constructor() { }


  enviaEventoForm(){
    this.eventoFormSubmitReactive.emit()
  }

  enviaEvento(evento: any){
    this.eventoSubmitReactive.emit(evento)
  }

  

}
