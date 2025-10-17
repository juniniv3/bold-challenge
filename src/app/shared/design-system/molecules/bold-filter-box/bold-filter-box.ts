import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from './bold-filter-box.model';
import { FormGroup } from '@angular/forms';
import { BoldButton } from "../../atoms/bold-button/bold-button";

@Component({
  selector: 'bold-filter-box',
  imports: [BoldButton],
  templateUrl: './bold-filter-box.html',
  styleUrl: './bold-filter-box.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoldFilterBox implements OnInit {
  @Input() title: string = '';
  @Input() filters: Filter[] = [];
  @Output() changeSomeFilter = new EventEmitter<string>();

  showFilters: boolean = false;

  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({});
  }

  showFilter(filterValue: string) {
    this.changeSomeFilter.emit(filterValue);
  }

  changeFiltersVisibility(show: boolean) {
    this.showFilters = show;
  }
  
}
