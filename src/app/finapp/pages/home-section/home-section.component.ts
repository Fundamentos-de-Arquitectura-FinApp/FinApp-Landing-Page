import { Component } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {Ripple} from 'primeng/ripple';
import {ButtonDirective} from 'primeng/button';

@Component({
  selector: 'app-home-section',
  standalone: true,
  imports: [
    InputTextModule,
    InputTextareaModule,
    Ripple,
    ButtonDirective
  ],
  templateUrl: './home-section.component.html',
  styleUrl: './home-section.component.css'
})
export class HomeSectionComponent {

}
