import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'dossiers',
    templateUrl: './dossiers.component.html',
    standalone: true,
    imports: [MatButtonModule, RouterModule],
})
export class DossiersComponent {
    private readonly router = inject(Router);

    public goTo(name: string): void {
        this.router.navigate([name]);
    }
}
