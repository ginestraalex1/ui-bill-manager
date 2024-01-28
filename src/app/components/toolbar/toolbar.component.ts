import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialog } from '@angular/material/dialog';
import { DisconnectModalComponent } from '../modal/disconnect-modal/disconnect-modal.component';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.component.html',
    styleUrl: './toolbar.component.scss',
    imports: [MatToolbarModule, MatMenuModule, MatButtonModule, MatIconModule],
    standalone: true,
})
export class ToolbarComponent {
    public username = 'Cloé Tydek';

    constructor(public dialog: MatDialog) {}

    openDisconnectModal(): void {
        const dialogRef = this.dialog.open(DisconnectModalComponent);

        dialogRef.afterClosed().subscribe((result) => {
            console.log('The dialog was closed : ', result);
        });
    }
}
