import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldIcon } from './bold-icon';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BoldIcon', () => {
  let component: BoldIcon;
  let fixture: ComponentFixture<BoldIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldIcon],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(BoldIcon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
