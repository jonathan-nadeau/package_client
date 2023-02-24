import { Component, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Establishment, Package } from 'src/app/models';
import { FormBuilder, Validators } from '@angular/forms';
import { PackageService } from 'src/app/services';
interface FormData {
  _package: Package;
  _establishments: Establishment[];
}

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  @Output() pack = new EventEmitter<Package>();
  packageEmitted: Package | null = null;

  packageForm = this.fb.group({
    name: [
      this.data._package.name,
      [Validators.required, Validators.maxLength(25)],
    ],
    description: [this.data._package.description, Validators.required],
    establishment: [
      this.data._establishments.find(
        (establishment) =>
          establishment._id === this.data._package.establishment_id
      ),
      Validators.required,
    ],
    start_date: [this.data._package.start_date, Validators.required],
    end_date: [this.data._package.end_date, Validators.required],
    price: [this.data._package.price, Validators.required],
    discount: [
      this.data._package.discount,
      [Validators.max(100), Validators.min(0)],
    ],
    premium: [this.data._package.premium, [Validators.required]],
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
      .updatePackage(
        {
          name: data.name!,
          description: data.description!,
          discount: data.discount!,
          end_date: data.end_date!,
          premium: data.premium!,
          establishment_id: data.establishment!._id,
          price: data.price!,
          start_date: data.start_date!,
        },
        this.data._package._id!
      )
      .subscribe((_package) => {
        this.packageEmitted = _package as Package;
        this.pack.emit(this.packageEmitted);
      });
  }
}
