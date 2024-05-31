import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { IntroducaoComponent } from '../../components/introducao/introducao.component';
import { BtnPrimaryComponent } from '../../components/btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../../newsletter-form/newsletter-form.component';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,IntroducaoComponent,BtnPrimaryComponent,NewsletterFormComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
