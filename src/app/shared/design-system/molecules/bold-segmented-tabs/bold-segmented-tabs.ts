import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from './bold-segmented-tabs.model';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'bold-segmented-tabs',
  imports: [TitleCasePipe],
  providers: [],
  templateUrl: './bold-segmented-tabs.html',
  styleUrl: './bold-segmented-tabs.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoldSegmentedTabs {
  @Input() tabs: Tab[] = [];
  @Input() selectedTab: string = '';
  @Output() changeTab = new EventEmitter<Tab[]>();

  selectTab(idSelected: string) {
    this.selectedTab = idSelected;
    this.tabs.forEach(tab => tab.selected = tab.id === idSelected);
    this.changeTab.emit(this.tabs);
  }
}
