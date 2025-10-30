import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  BoldSegmentedTabs} from './bold-segmented-tabs';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BoldSegmentedTabs', () => {
  let component: BoldSegmentedTabs;
  let fixture: ComponentFixture<BoldSegmentedTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldSegmentedTabs],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoldSegmentedTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
