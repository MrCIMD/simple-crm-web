import { Component, inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { HowContact, Lead, LeadState, OfficialMedia } from "@utils/types";
import { MatTooltip } from "@angular/material/tooltip";
import { LeadDialogHeaderComponent } from "../lead-dialog-header/lead-dialog-header.component";
import { FormToolsService } from "@services/form-tools.service";
import { FormArray, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatError, MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";

export type LeadFormData = {
  lead?: Lead;
  state: LeadState;
}

@Component({
  selector: 'app-lead-form-dialog',
  standalone: true,
  imports: [
    MatDialogClose,
    MatDialogContent,
    MatDivider,
    MatIcon,
    MatIconButton,
    MatDialogActions,
    MatButton,
    MatTooltip,
    LeadDialogHeaderComponent,
    ReactiveFormsModule,
    MatError,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './lead-form-dialog.component.html',
  styles: ``
})
export class LeadFormDialogComponent implements OnInit {
  public readonly formTools: FormToolsService = inject<FormToolsService>(FormToolsService);
  public readonly dialogData: LeadFormData = inject<LeadFormData>(MAT_DIALOG_DATA);

  public formGroup = this.formTools.builder.group({
    name: ['', [Validators.required]],
    comment: ['', [Validators.required]],
    numberStudents: [0, [Validators.required]],
    contacts: this.formTools.builder.array([]),
    officialSites: this.formTools.builder.array([]),
  });

  ngOnInit() {

  }

  public submit(): void {
    if (this.formGroup.invalid) return;

    const values = this.formGroup.getRawValue();

    console.log(values);
  }

  public addOfficialSiteForm() {
    const officialSiteFormGroup = this.buildOfficialSiteForm();

    this.formOfficialSites().push(officialSiteFormGroup);
  }

  public addContactForm() {
    const contactFormGroup = this.buildContactForm();

    this.formContacts().push(contactFormGroup);
  }

  public formContacts(): FormArray {
    return this.formGroup.get('contacts') as FormArray;
  }

  public formMethods(index: number): FormArray {
    return this.formContacts().controls[index].get('methods') as FormArray;
  }

  public formOfficialSites(): FormArray {
    return this.formGroup.get('officialSites') as FormArray;
  }

  /*
  * Crea un grupo de formulario de contacto
  * */
  private buildOfficialSiteForm(): FormGroup {
    return this.formTools.builder.group({
      type: [OfficialMedia.WEBSITE, [Validators.required]],
      value: ['', [Validators.required]],
      note: [''],
    });
  }

  /*
  * Crea un grupo de formulario de contacto
  * */
  private buildContactForm(): FormGroup {
    const methodFormGroup = this.buildMethodForm();

    return this.formTools.builder.group({
      name: ['', Validators.required],
      methods: this.formTools.builder.array([methodFormGroup])
    });
  }

  /*
  * Crea un grupo de formulario del método de contacto
  * */
  private buildMethodForm(): FormGroup {
    return this.formTools.builder.group({
      type: [HowContact.WHATSAPP, Validators.required],
      value: ['', Validators.required],
      note: [''],
    });
  }
}
