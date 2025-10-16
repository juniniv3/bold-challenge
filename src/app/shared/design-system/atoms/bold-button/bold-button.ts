import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bold-button',
  imports: [],
  templateUrl: './bold-button.html',
  styleUrl: './bold-button.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoldButton {
  @Input() label: string = 'Button';
  @Input() type: 'primary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  get sizeClass() {
    switch (this.size) {
      case 'sm': return 'bold-button--sm';
      case 'md': return 'bold-button--md';
      case 'lg': return 'bold-button--lg';
      default: return 'bold-button--md';
    }
  }

  get typeClass() {
    switch (this.type) {
      case 'primary': return 'bold-button--primary';
      default: return 'bold-button--primary';
    }
  }
}
