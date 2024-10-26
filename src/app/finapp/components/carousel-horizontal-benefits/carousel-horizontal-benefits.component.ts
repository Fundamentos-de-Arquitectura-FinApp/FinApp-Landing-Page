import {Component, Input, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";
import {PrimeTemplate} from "primeng/api";

@Component({
  selector: 'app-carousel-horizontal-benefits',
  standalone: true,
    imports: [
        CarouselModule,
        PrimeTemplate
    ],
  templateUrl: './carousel-horizontal-benefits.component.html',
  styleUrl: './carousel-horizontal-benefits.component.css'
})
export class CarouselHorizontalBenefitsComponent implements OnInit {
  responsiveOptions: any[] | undefined;
  @Input() products: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }
}
