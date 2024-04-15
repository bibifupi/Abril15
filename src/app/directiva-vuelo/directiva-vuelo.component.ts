import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-vuelo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directiva-vuelo.component.html',
  styleUrl: './directiva-vuelo.component.css'
})
export class DirectivaVueloComponent {
  origen = [
    { id: 1, og: 'Madrid' }
    , { id: 2, og: 'Bilbao' }, { id: 3, og: 'Verona' }, { id: 4, og: 'Dublín' }
    , { id: 5, og: 'Berlín' }];
  selectedOrigen!: string;

  destino = [
    { id: 1, des: 'Madrid' }
    , { id: 2, des: 'Bilbao' }, { id: 3, des: 'Verona' }, { id: 4, des: 'Dublín' }
    , { id: 5, des: 'Berlín' }];
  selectedDestino!: string;

  fechaSalida!: String;

  fechaVuelta!: String;

  selectedPasajeros!: String;

  mostrarSeleccion() {
    alert('Selección actual: Origen: ' + this.selectedOrigen + ', Destino: ' + this.selectedDestino + ', Fecha de salida: ' + this.fechaSalida + ', Fecha de vuelta: ' + this.fechaVuelta + ', nº de pasajeros: ' + this.selectedPasajeros);

  }
}


