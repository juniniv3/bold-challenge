import { ComponentFixture, TestBed } from '@angular/core/testing';

import {  BoldFilterBox} from './bold-filter-box';

describe('BoldFilterBox', () => {
  let component: BoldFilterBox;
  let fixture: ComponentFixture<BoldFilterBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoldFilterBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoldFilterBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
