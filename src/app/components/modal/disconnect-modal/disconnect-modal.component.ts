import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';

@Component({
    selector: 'disconnect-modal',
    templateUrl: './disconnect-modal.component.html',
    styleUrl: './disconnect-modal.component.scss',
    standalone: true,
    imports: [
        MatDialogTitle,
        MatDialogContent,
        MatDialogActions,
        MatDialogClose,
        MatButtonModule,
    ],
})
export class DisconnectModalComponent {
    constructor(public dialogRef: MatDialogRef<DisconnectModalComponent>) {}

    public disconnect(): void {
        console.log('TODO: disconnect');
        this.dialogRef.close();
    }
}
