import { Component, OnInit, inject } from '@angular/core';
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { SnackbarConfig } from '../modal/disconnect-modal/disconnect-modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'snackbar',
    templateUrl: './snackbar.component.html',
    standalone: true,
    imports: [MatButtonModule, MatIconModule],
})
export class SnackbarComponent implements OnInit {
    snackBarRef = inject(MatSnackBarRef);
    data: SnackbarConfig = inject(MAT_SNACK_BAR_DATA);

    public ngOnInit(): void {
        console.log('snackBarRef : ', this.snackBarRef);
        console.log('data : ', this.data);
    }
}
