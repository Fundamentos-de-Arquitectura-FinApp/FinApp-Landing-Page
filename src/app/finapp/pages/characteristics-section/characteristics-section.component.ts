import {Component, OnInit} from '@angular/core';
import {AvatarModule} from 'primeng/avatar';
import {CardModule} from 'primeng/card';
import {RouterModule} from '@angular/router';
import {
  CarouselHorizontalBenefitsComponent
} from '../../components/carousel-horizontal-benefits/carousel-horizontal-benefits.component';

@Component({
  selector: 'app-characteristics-section',
  standalone: true,
  imports: [
    AvatarModule,
    CardModule,
    CarouselHorizontalBenefitsComponent,
    RouterModule
  ],
  templateUrl: './characteristics-section.component.html',
  styleUrl: './characteristics-section.component.css'

})
export class CharacteristicsSectionComponent implements OnInit {

  imagesBenefits1:any[]=[];
  imagesBenefits2:any[]=[];
  imagesBenefits3:any[]=[];
  imagesBenefits4:any[]=[];
  imagesBenefits5:any[]=[];
  imagesBenefits6:any[]=[];

  ngOnInit() {
    this.imagesBenefits1 = [
      {
        image: "https://i.postimg.cc/T1R7j33t/image.png"
      },
      {
        image: "https://i.postimg.cc/1RHYmwv2/image.png"
      },
    ];

    this.imagesBenefits2 = [
      {
        image: "https://i.postimg.cc/Jn7ZPDjH/image.png"
      },
      {
        image: "https://i.postimg.cc/rmpRS6LS/image.png"
      },
    ];

    this.imagesBenefits3 = [
      {
        image: "https://i.postimg.cc/RVpsf95T/image.png"
      },
      {
        image: "https://i.postimg.cc/yY2hsNC2/image.png"
      },
    ];

    this.imagesBenefits4 = [
      {
        image: "https://i.postimg.cc/sXK9r93J/image.png"
      },
      {
        image: "https://i.postimg.cc/HkQMm427/image.png"
      },
    ];

    this.imagesBenefits5 = [
      {
        image: "https://i.postimg.cc/3wXFLQ6V/image.png"
      },
      {
        image: "https://i.postimg.cc/HxT4RP1x/image.png"
      },
    ];
    this.imagesBenefits6 = [
      {
        image: "https://i.postimg.cc/QdL7vnp3/image.png"
      },
      {
        image: "https://i.postimg.cc/fLQgLKnn/image.png"
      },
    ];
  }
}
