import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-number-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './number-field.component.html',
  styleUrl: './number-field.component.css'
})
export class NumberFieldComponent {

    @Input() value: any;
    @Input() isReadOnly: boolean = false;
    @Input() isDisable: boolean = false;

    valueChange(event: any): void {
        this.value = +event?.data;
    }

}
