import { Component } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {Ripple} from 'primeng/ripple';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [
    InputTextModule,
    InputTextareaModule,
    Ripple,
    ButtonDirective
  ],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.css'
})
export class ContactSectionComponent {

}
