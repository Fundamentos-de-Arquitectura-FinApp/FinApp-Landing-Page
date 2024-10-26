import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselHorizontalBenefitsComponent } from './carousel-horizontal-benefits.component';

describe('CarouselHorizontalBenefitsComponent', () => {
  let component: CarouselHorizontalBenefitsComponent;
  let fixture: ComponentFixture<CarouselHorizontalBenefitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarouselHorizontalBenefitsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselHorizontalBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
