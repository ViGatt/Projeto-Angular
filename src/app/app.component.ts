import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
import { IntroducaoComponent } from './components/introducao/introducao.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterFormComponent } from './newsletter-form/newsletter-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MenuBarComponent,HomeComponent,CardComponent,CardLabelComponent,CardPricingComponent,IntroducaoComponent,FooterComponent,NewsletterFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'store';
}
