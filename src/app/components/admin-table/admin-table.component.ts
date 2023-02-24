import { Component } from '@angular/core';
import { Establishment, Package } from 'src/app/models';
import { EstablishmentService, PackageService } from 'src/app/services';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { AddDialogComponent } from '../add-dialog/add-dialog.component';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.scss'],
})
export class AdminTableComponent {
  displayedColumns: string[] = ['name', 'establishment', 'edit'];
  _packages: Package[] = [];
  _establishments: Establishment[] = [];

  constructor(
    private packageService: PackageService,
    private establishmentService: EstablishmentService,
    public dialog: MatDialog,
    public addDialog: MatDialog
  ) {}

  ngOnInit() {
    this.getPackages();
    this.getEstablishments();
  }

  getPackages() {
    this.packageService.getPackages().subscribe((result) => {
      this._packages = result;
    });
  }

  deletePackage(id: string) {
    this.packageService.deletePackage(id).subscribe(() => {
      this.getPackages();
    });
  }

  getEstablishments() {
    this.establishmentService.getEstablishments().subscribe((result) => {
      this._establishments = result;
    });
  }

  openDialog(_package: Package) {
    if (this._establishments.length > 0) {
      const ref = this.dialog.open(EditDialogComponent, {
        data: {
          _package: _package,
          _establishments: this._establishments,
        },
      });
      ref.componentInstance.pack.subscribe((pack) => {
        this._packages = this._packages.map((_package) => {
          if (_package._id === pack._id) {
            return pack;
          }
          return _package;
        });
      });
    }
  }

  openAddDialog() {
    if (this._establishments.length > 0) {
      const ref = this.dialog.open(AddDialogComponent, {
        data: {
          _establishments: this._establishments,
        },
      });
      ref.componentInstance.pack.subscribe((pack) => {
        this.getPackages();
      });
    }
  }

  getEstablishmentByPackage(_package: Package): Establishment | null {
    const establishments = this._establishments.filter(
      (establishment) => establishment._id === _package.establishment_id
    );

    if (establishments.length === 0) return null;

    return establishments[0];
  }

  handleOnDelete(id: string) {
    this.deletePackage(id);
  }
}
