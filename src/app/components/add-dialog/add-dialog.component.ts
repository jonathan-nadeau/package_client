import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Establishment, Package } from 'src/app/models';
import { PackageService } from 'src/app/services';

interface FormData {
  _establishments: Establishment[];
}

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss'],
})
export class AddDialogComponent {
  @Output() pack = new EventEmitter<Package>();
  packageEmitted: Package | null = null;

  packageForm = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(25)]],
    description: ['', Validators.required],
    establishment: [this.data._establishments[0], Validators.required],
    start_date: [new Date(), Validators.required],
    end_date: [new Date(), Validators.required],
    price: [0, Validators.required],
    discount: [0, [Validators.max(100), Validators.min(0)]],
    premium: [false, [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: FormData,
    public dialogRef: MatDialogRef<any>,
    private packageService: PackageService
  ) {}

  ngOnInit() {
    this.dialogRef.updateSize('50%');
  }

  displayEstablishment(establishment: Establishment): string {
    return establishment && establishment.name ? establishment.name : '';
  }

  handleOnSubmit(event: FormDataEvent) {
    event.preventDefault();
    const data = this.packageForm.value;
    this.packageService
      .addPackage({
        name: data.name!,
        description: data.description!,
        discount: data.discount!,
        end_date: data.end_date!,
        premium: data.premium!,
        establishment_id: data.establishment!._id,
        price: data.price!,
        start_date: data.start_date!,
        categories: ['categorie 1'],
        code: data.name!.slice(0, 7),
        reviews: [],
      })
      .subscribe((_package) => {
        this.packageEmitted = _package as Package;
        this.pack.emit(this.packageEmitted);
      });
  }
}
