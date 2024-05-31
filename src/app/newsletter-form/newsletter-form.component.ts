import { Component, signal } from '@angular/core';
import { BtnPrimaryComponent } from '../components/btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsletterService } from '../services/newsletter.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent,ReactiveFormsModule],
  providers: [
    NewsletterService
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.css'
})
export class NewsletterFormComponent {
  newsletterForm!: FormGroup;
  loading = signal(false);

  constructor(private service: NewsletterService) {
    this.newsletterForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cidade: new FormControl('', [Validators.required]),
      descrição: new FormControl('', [Validators.required])
    });
}
onSubmit(){
  this.loading.set(true);
  if(this.newsletterForm.valid){
    this.service.sendData(this.newsletterForm.value.nome, this.newsletterForm.value.email,this.newsletterForm.value.cidade,this.newsletterForm.value.descrição)
    .subscribe({
      next: () => {
        this.newsletterForm.reset();
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    })
    {
      console.log("Formulário enviado", this.newsletterForm.value);;
      return;
    }
    
  }
  }
}
 