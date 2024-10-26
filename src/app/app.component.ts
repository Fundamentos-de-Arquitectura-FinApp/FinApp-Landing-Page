import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './shared/components/header/header.component';
import {FooterComponent} from './shared/components/footer/footer.component';
import {HomeSectionComponent} from './finapp/pages/home-section/home-section.component';
import {
  CharacteristicsSectionComponent
} from './finapp/pages/characteristics-section/characteristics-section.component';
import {BenefitsSectionComponent} from './finapp/pages/benefits-section/benefits-section.component';
import {ReviewsSectionComponent} from './finapp/pages/reviews-section/reviews-section.component';
import {ContactSectionComponent} from './finapp/pages/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HomeSectionComponent,
    CharacteristicsSectionComponent,
    BenefitsSectionComponent,
    ReviewsSectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'finapp-landing';
}
