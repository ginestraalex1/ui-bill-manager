import { Component, HostListener, inject } from '@angular/core';
import {
    MatSnackBarRef,
    MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { SnackbarConfig } from 'app/models/snackbar/snackbar-config.model';
import { interval, takeUntil, tap } from 'rxjs';

@Component({
    selector: 'snackbar',
    templateUrl: './snackbar.component.html',
    styleUrl: './snackbar.component.scss',
    standalone: true,
    imports: [MatButtonModule, MatProgressBarModule, MatIconModule],
})
export class SnackbarComponent {
    public snackBarRef = inject(MatSnackBarRef);
    public data: SnackbarConfig = inject(MAT_SNACK_BAR_DATA);

    public progressValue = 100;
    private interval = 50;
    private timeInit = this.data.duration || 5000;
    private timeLeft = this.timeInit;

    private progressObservable$ = interval(this.interval).pipe(
        takeUntil(this.snackBarRef.afterDismissed()),
        tap(() => {
            this.timeLeft -= this.interval;
            if (this.timeLeft <= -250) {
                this.snackBarRef.dismiss();
            }

            this.progressValue = (this.timeLeft / this.timeInit) * 100;
        })
    );

    private progressSubscription = this.progressObservable$.subscribe();

    @HostListener('mouseenter')
    public mouseover() {
        this.progressSubscription.unsubscribe();
        this.progressValue = 100;
        this.timeLeft = this.timeInit;
    }

    @HostListener('mouseleave')
    public mouseleave() {
        this.progressSubscription = this.progressObservable$.subscribe();
    }
}
