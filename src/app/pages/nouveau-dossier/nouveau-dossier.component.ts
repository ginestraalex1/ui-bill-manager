import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'app/components/snackbar/snackbar.component';
import { SnackbarConfig } from 'app/models/snackbar/snackbar-config.model';

@Component({
    selector: 'nouveau-dossier',
    templateUrl: './nouveau-dossier.component.html',
    styleUrl: './nouveau-dossier.component.scss',
    standalone: true,
    imports: [MatButtonModule],
})
export class NouveauDossierComponent {
    constructor(private readonly snackBar: MatSnackBar) {}
    public snackbar(): void {
        this.snackBar.openFromComponent<SnackbarComponent, SnackbarConfig>(
            SnackbarComponent,
            {
                data: {
                    title: 'Déconnection effectué avec succès',
                },
                panelClass: 'success-snackbar',
            }
        );
    }
}
