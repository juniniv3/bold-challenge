import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filter } from './bold-filter-box.model';
import { FormGroup } from '@angular/forms';
import { BoldButton } from "../../atoms/bold-button/bold-button";
import { BoldIcon } from "../../atoms/bold-icon/bold-icon";

@Component({
  selector: 'bold-filter-box',
  imports: [BoldButton, BoldIcon],
  templateUrl: './bold-filter-box.html',
  styleUrl: './bold-filter-box.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoldFilterBox  {
  @Input() title: string = '';
  @Input() filters: Filter[] = [];
  @Output() changeSomeFilter = new EventEmitter<Filter[]>();

  showFilters: boolean = false;

  form!: FormGroup;


  changeFiltersVisibility(show: boolean) {
    this.showFilters = show;
  }

  onFilterChange(filterId: string) {
    const filter = this.filters.find(f => f.id === filterId);
    if (filter) {
      filter.checked = !filter.checked;
      this.changeSomeFilter.emit(this.filters);
    }
  }

}
