import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      nome: string
      sobreNome: string
      userName: string
      cpf: number
      telefone: number
      endereco: string
      complemento: string
    }
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  
}
