import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-introducao',
  standalone: true,
  imports: [BtnPrimaryComponent],
  templateUrl: './introducao.component.html',
  styleUrl: './introducao.component.css'
})
export class IntroducaoComponent {

}
