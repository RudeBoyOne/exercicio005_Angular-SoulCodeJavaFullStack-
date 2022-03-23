import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.css']
})
export class FormTemplateComponent {
  
  nome: string = ''
  sobreNome: string = ''
  userName: string = ''
  cpf!: number
  telefone!: number
  endereco: string = ''
  complemento: string = ''
  senha!: any
  comfirmaSenha!: any
  camposIguais: boolean = false


  @Output() eventoSubmitDrive: EventEmitter<any> = new EventEmitter<any>()

  @Output() eventoFormSubmitDrive: EventEmitter<any> = new EventEmitter<any>()

  @ViewChild('templateDrive') formDrive!: ElementRef
  
  constructor(){}


  enviaEventoForm(){
    this.eventoFormSubmitDrive.emit()
  }

  enviaEvento(evento: any){
    this.eventoSubmitDrive.emit(evento)
  }
  
}
