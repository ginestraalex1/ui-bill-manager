import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
    MatDialogRef,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
} from '@angular/material/dialog';
import { SnackbarComponent } from 'app/components/snackbar/snackbar.component';
import { SnackbarConfig } from 'app/models/snackbar/snackbar-config.model';

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
    constructor(
        public readonly dialogRef: MatDialogRef<DisconnectModalComponent>,
        private readonly snackBar: MatSnackBar
    ) {}

    public disconnect(): void {
        console.log('TODO: disconnect');

        //if disconnect is success
        this.snackBar.openFromComponent<SnackbarComponent, SnackbarConfig>(
            SnackbarComponent,
            {
                data: {
                    title: 'Déconnection effectué avec succès',
                },
                panelClass: 'success-snackbar',
            }
        );
        this.dialogRef.close();
    }
}
