import { ComponentFixture, TestBed } from '@angular/core/testing';

import {SidePanel } from './bold-side-panel';
import { provideZonelessChangeDetection } from '@angular/core';

describe('SidePanel', () => {
  let component: SidePanel;
  let fixture: ComponentFixture<SidePanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidePanel],
      providers: [provideZonelessChangeDetection()],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidePanel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
