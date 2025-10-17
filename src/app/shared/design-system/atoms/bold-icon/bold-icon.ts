import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bold-icon',
  imports: [],
  templateUrl: './bold-icon.html',
  styleUrl: './bold-icon.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoldIcon {
  @Input() name: string = 'help';
  @Input() size: 'sm' | 'md' | 'lg' = 'sm';

  get iconSrc(): string {
    return `/assets/shared/design-system/icons/${this.name}.svg`;
  }
}
