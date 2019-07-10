import { Component, OnInit } from '@angular/core';
import { Usuario, RespuestaUsuarios } from '../../interfaces/interface';
import { ApiService } from '../../services/api.service';
import { Routes } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  articles: RespuestaUsuarios;
  Nombre: string;

  constructor(private servicioUsuarios: ApiService, private alertCtrl: AlertController) {}

  ngOnInit() {
    this.servicioUsuarios.getUsuarios()
    .subscribe(noticias => {
      console.log(noticias);
      this.articles = noticias;
    });
  }

  Agregar() {
    this.servicioUsuarios.aUsuario(this.Nombre).subscribe();
  }

  Eliminar(id: number) {
    console.log(id);
    this.servicioUsuarios.aEliminar(id).subscribe();
  }

  async Editar(editValor: number) {
    const alertInput = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Ejemplo con Input',
      message: 'Este es un mensaje de alerta',
      inputs: [{
        name: 'txtTitulo',
        type: 'text',
        placeholder: 'Escribe un titulo'
      }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'Cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Se cancelo la accion');
          }
        }, {
          text: 'Aceptar',
          handler: (datos) => {
            this.servicioUsuarios.editUsuario(editValor, datos.txtTitulo)
              .subscribe();

            console.log('Se acepto la accion');
          }
        }
      ]
    });
    await alertInput.present();
  }
}
