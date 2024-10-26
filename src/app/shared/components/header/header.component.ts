import {Component} from '@angular/core';
import {StyleClassModule} from 'primeng/styleclass';
import {Ripple} from 'primeng/ripple';
import {ButtonDirective} from 'primeng/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    StyleClassModule,
    Ripple,
    ButtonDirective,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    }
  }
}
