import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountCarouselComponent } from './discount-carousel.component';

describe('DiscountCarouselComponent', () => {
  let component: DiscountCarouselComponent;
  let fixture: ComponentFixture<DiscountCarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountCarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
