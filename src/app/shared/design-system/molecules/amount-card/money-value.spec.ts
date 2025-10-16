import { ComponentFixture, TestBed } from '@angular/core/testing';

import {AmountCard } from './amount-card';

describe('AmountCard', () => {
  let component: AmountCard;
  let fixture: ComponentFixture<AmountCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmountCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmountCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
