import {Component, OnInit} from '@angular/core';
import {AvatarModule} from 'primeng/avatar';
import {CarouselModule} from 'primeng/carousel';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [
    AvatarModule,
    CarouselModule
  ],
  templateUrl: './reviews-section.component.html',
  styleUrl: './reviews-section.component.css'
})
export class ReviewsSectionComponent implements OnInit {

  reviews: any[] = [];
  responsiveOptions: any[] | undefined;

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.reviews = [
      {
        title: "¡Que excelente aplicación!",
        description: "Desde que comencé a usar esta aplicación, la gestión de mi negocio se ha vuelto mucho más sencilla.",
        image: "https://i.postimg.cc/wvxT483B/image.png",
        name: "Juan Pérez",
        date: "Octubre 15, 2024"
      },
      {
        title: "¡Gran soporte al cliente!",
        description: "El equipo de soporte es increíble. Siempre han respondido a todas mis preguntas de manera rápida y eficiente.",
        image: "https://i.postimg.cc/J0GprvD7/image.png",
        name: "María González",
        date: "Octubre 22, 2024"
      },
      {
        title: "¡Funcionalidad excepcional!",
        description: "La aplicación ofrece una amplia gama de funciones que realmente mejoran la productividad de mi negocio.",
        image: "https://i.postimg.cc/wvWxSfsQ/image.png",
        name: "Carlos Torres",
        date: "Octubre 18, 2024"
      },
      {
        title: "¡Interfaz super amigable!",
        description: "La interfaz de la aplicación es muy amigable. Nunca he tenido problemas para encontrar lo que busco.",
        image: "https://i.postimg.cc/wMZqB12t/image.png",
        name: "Lucía Fernández",
        date: "Octubre 20, 2024"
      },
      {
        title: "¡Todo en un solo lugar!",
        description: "Me encanta que puedo gestionar todas mis cuentas y transacciones desde un solo lugar.",
        image: "https://i.postimg.cc/8cjkDRRQ/image.png",
        name: "Diego Ramírez",
        date: "Octubre 25, 2024"
      },
      {
        title: "¡Recomendado para todos!",
        description: "Esta aplicación es perfecta para cualquier persona que necesite una solución eficiente para administrar su negocio.",
        image: "https://i.postimg.cc/KcHvfWbZ/image.png",
        name: "Sofía López",
        date: "Octubre 24, 2024"
      },
    ];
  }
}
