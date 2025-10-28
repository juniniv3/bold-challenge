import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldButton } from './bold-button';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BoldButton', () => {
  let component: BoldButton;
  let fixture: ComponentFixture<BoldButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldButton],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoldButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
