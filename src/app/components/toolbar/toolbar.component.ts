import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    imports: [MatToolbarModule, MatButtonModule, MatIconModule],
    standalone: true,
})
export class ToolbarComponent {}
