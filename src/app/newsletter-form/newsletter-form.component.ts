import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BtnPrimaryComponent } from '../components/btn-primary/btn-primary.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-newsletter-form',
  standalone: true,
  imports: [BtnPrimaryComponent, ReactiveFormsModule, CommonModule],
  templateUrl: './newsletter-form.component.html',
  styleUrls: ['./newsletter-form.component.css']
})
export class NewsletterFormComponent {
  newsletterForm: FormGroup;
  loading = signal(false);
  submitted = signal(false);

  constructor() {
    this.newsletterForm = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      cidade: new FormControl('', [Validators.required]),
      descrição: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.newsletterForm.markAllAsTouched();
    
    if (this.newsletterForm.valid) {
      this.loading.set(true);
      
      setTimeout(() => {
        console.log('Dados enviados:', this.newsletterForm.value);
        
        this.submitted.set(true);
        
        this.newsletterForm.reset();
        this.loading.set(false);
        
        setTimeout(() => this.submitted.set(false), 3000);
      }, 1500);
    }
  }
}