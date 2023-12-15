import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-field',
  standalone: true,
  imports: [],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.css'
})
export class TextFieldComponent implements OnInit {

    inputType: string = 'text';
    @Input() value: any;
    @Input() isReadOnly: boolean = false;
    @Input() isDisable: boolean = false;

    constructor() {}

    ngOnInit() {
    }
}
