import { Component } from '@angular/core';
import { NumberFieldComponent } from '../../components/number-field/number-field.component';
import { TextFieldComponent } from '../../components/text-field/text-field.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NumberFieldComponent, TextFieldComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
