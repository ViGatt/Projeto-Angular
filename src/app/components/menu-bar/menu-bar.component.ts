import { Component } from '@angular/core';
import { IntroducaoComponent } from '../introducao/introducao.component';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MenuBarComponent],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.css'
})
export class MenuBarComponent {

}
