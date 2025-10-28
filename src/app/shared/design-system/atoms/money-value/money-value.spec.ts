import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyValue } from './money-value';
import { provideZonelessChangeDetection } from '@angular/core';

describe('MoneyValue', () => {
  let component: MoneyValue;
  let fixture: ComponentFixture<MoneyValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoneyValue],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(MoneyValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
