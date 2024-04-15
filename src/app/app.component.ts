import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ej1Component } from './ej1/ej1.component';
import { DirectivaPCComponent } from './directiva-pc/directiva-pc.component';
import { DirectivaVueloComponent } from './directiva-vuelo/directiva-vuelo.component';
import { DirectivasComponent } from './directivas/directivas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Ej1Component,DirectivaPCComponent,DirectivaVueloComponent, DirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril15';
}
