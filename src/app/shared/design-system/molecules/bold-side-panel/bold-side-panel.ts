import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BoldIcon } from '../../atoms/bold-icon/bold-icon';

@Component({
  selector: 'bold-side-panel',
  imports: [BoldIcon],
  templateUrl: './bold-side-panel.html',
  styleUrl: './bold-side-panel.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidePanel {
  @Input() showPanel: boolean = false;
  @Output() closePanel = new EventEmitter<string>();

  hidePanel(){
    this.showPanel = false;
    this.closePanel.emit('closed');
  }
}
