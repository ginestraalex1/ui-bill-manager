import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NavBarComponent } from '../../nav-bar/nav-bar.component';
import { MatGridListModule } from '@angular/material/grid-list';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavBarComponent, MatSlideToggleModule, MatGridListModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
