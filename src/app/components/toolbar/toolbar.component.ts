import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
    imports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
    standalone: true,
})
export class ToolbarComponent {
    public username = 'Cloé Tydek';
}
