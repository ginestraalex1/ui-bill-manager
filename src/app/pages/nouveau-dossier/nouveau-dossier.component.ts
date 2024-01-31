import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { SnackbarComponent } from 'app/components/snackbar/snackbar.component';
import { ToolbarComponent } from 'app/components/toolbar/toolbar.component';
import { SnackbarConfig } from 'app/models/snackbar/snackbar-config.model';

@Component({
    selector: 'nouveau-dossier',
    templateUrl: './nouveau-dossier.component.html',
    styleUrl: './nouveau-dossier.component.scss',
    standalone: true,
    imports: [
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        ToolbarComponent,
        MatFormFieldModule,
        MatSelectModule,
    ],
})
export class NouveauDossierComponent {
    private readonly snackBar = inject(MatSnackBar);
    private readonly router = inject(Router);

    public foods: Food[] = [
        { value: 'steak-0', viewValue: 'Steak' },
        { value: 'pizza-1', viewValue: 'Pizza' },
        { value: 'tacos-2', viewValue: 'Tacos' },
    ];

    public snackbar(): void {
        this.snackBar.openFromComponent<SnackbarComponent, SnackbarConfig>(
            SnackbarComponent,
            {
                data: {
                    title: 'Snackbar basic avec loader',
                },
                panelClass: 'success-snackbar',
            }
        );
    }

    public goHome(): void {
        this.router.navigate(['home']);
    }
}

interface Food {
    value: string;
    viewValue: string;
}
