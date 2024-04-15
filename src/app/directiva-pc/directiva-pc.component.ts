import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directiva-pc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directiva-pc.component.html',
  styleUrl: './directiva-pc.component.css'
})
export class DirectivaPCComponent {
  ramSizes = [
    { id: 1, size: 'RAM8' }
    , { id: 2, size: 'RAM16' }, { id: 3, size: 'RAM32' }];
  selectedRamSize: string = '';

  procesador = [
    { id: 1, proc: 'Corei9' }, { id: 2, proc: 'Corei5' }, { id: 3, proc: 'Corei7' }, { id: 4, proc: 'Corei5' }, { id: 5, proc: 'Corei4' }
  ];
  selectedProcesador: string = '';

  selectedGrafica: string = '';

  dD = [
    { id: 1, disco: 'HDD' }
    , { id: 2, disco: 'SSD' }];
  selectedDD: string = '';
  alimentacion = [
    { id: 1, al: '500' }, { id: 2, al: '600' }, { id: 3, al: '400' }
  ];
  selectedAlimentacion: string = '';



  mostrarSeleccion() {
    alert('Selección actual: RAM: ' + this.selectedRamSize + ', Procesador: ' + this.selectedProcesador + ', ¿Tarjeta gráfica?: ' + this.selectedGrafica + ', Disco Duro: ' + this.selectedDD + ', Fuente de Alimentación: ' + this.selectedAlimentacion);

  }
}
