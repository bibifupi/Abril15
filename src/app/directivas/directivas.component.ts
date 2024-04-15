import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './directivas.component.html',
  styleUrl: './directivas.component.css'
})
export class DirectivasComponent {
  genero = [
    { id: 1, gen: 'Mujer' }
    , { id: 2, gen: 'Hombre' }, { id: 3, gen: 'Otros' }];
  selectedGenero: string = '';

  nacionalidad = [
    { id: 1, nac: 'Española' }
    , { id: 2, nac: 'Portuguesa' }, { id: 3, nac: 'Italiana' }, { id: 4, nac: 'Mexicana' }
    , { id: 5, nac: 'China' }];
  selectedNacionalidad: string = '';

  selectedC: boolean = false;
  selectedJava: boolean = false;
  selectedJS: boolean = false;
  selectedP: boolean = false;

  lenguajesSeleccionados(): string {
    let texto: string = '';
    if (this.selectedC) {
      texto += "C++ ";
    }
    if (this.selectedJava) {
      texto += "Java ";
    }
    if (this.selectedJS) {
      texto += "JS ";
    }
    if (this.selectedP) {
      texto += "Python ";
    }
    return texto;
  }

  mostrarSeleccion() {

    alert('Selección actual: Género: ' + this.selectedGenero + ', Nacionalidad: ' + this.selectedNacionalidad + ', Lenguajes de programación: ' + this.lenguajesSeleccionados());

  }
}
