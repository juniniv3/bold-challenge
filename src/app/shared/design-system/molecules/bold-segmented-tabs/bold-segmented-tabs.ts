import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Tab } from './bold-segmented-tabs.model';

@Component({
  selector: 'bold-segmented-tabs',
  imports: [],
  templateUrl: './bold-segmented-tabs.html',
  styleUrl: './bold-segmented-tabs.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoldSegmentedTabs {
  @Input() tabs: Tab[] = [];
  @Input() selectedTab: string = '';
  @Output() changeTab = new EventEmitter<string>();

  selectTab(tabValue: string) {
    this.selectedTab = tabValue;
    this.changeTab.emit(tabValue);
  }
}
