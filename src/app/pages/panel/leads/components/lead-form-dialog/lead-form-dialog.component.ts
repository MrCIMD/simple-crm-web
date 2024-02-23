import { Component, inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef
} from "@angular/material/dialog";
import { MatDivider } from "@angular/material/divider";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { HowContact, Lead, LeadState, OfficialMedia } from "@utils/types";
import { MatTooltip } from "@angular/material/tooltip";
import { LeadDialogHeaderComponent } from "../lead-dialog-header/lead-dialog-header.component";
import { FormToolsService } from "@services/form-tools.service";
import { FormArray, FormGroup, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatError, MatFormField, MatLabel, MatPrefix } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatOption, MatSelect } from "@angular/material/select";
import { MatMenuItem } from "@angular/material/menu";
import { MatTab, MatTabGroup, MatTabLabel } from "@angular/material/tabs";
import { ProspectsPanelService } from "@services/prospects-panel.service";

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
    MatLabel,
    MatSelect,
    MatOption,
    MatPrefix,
    MatMenuItem,
    MatTabGroup,
    MatTab,
    MatTabLabel
  ],
  templateUrl: './lead-form-dialog.component.html',
  styles: ``
})
export class LeadFormDialogComponent implements OnInit {
  private readonly _panelService: ProspectsPanelService = inject<ProspectsPanelService>(ProspectsPanelService);
  private readonly _dialogRef: MatDialogRef<LeadFormDialogComponent> = inject<MatDialogRef<LeadFormDialogComponent>>(MatDialogRef<LeadFormDialogComponent>)

  public readonly formTools: FormToolsService = inject<FormToolsService>(FormToolsService);
  public readonly dialogData: LeadFormData = inject<LeadFormData>(MAT_DIALOG_DATA);

  public formGroup = this.formTools.builder.group({
    name: ['', [Validators.required]],
    numberStudents: [0, [Validators.required]],
    contacts: this.formTools.builder.array([]),
    officialSites: this.formTools.builder.array([]),
  });

  ngOnInit() {
    const {lead} = this.dialogData
    if (lead?.id) {
      this.formGroup.patchValue({
        name: lead.name,
        numberStudents: lead.numberStudents,
      });

      lead.contacts.forEach((contact, index) => {
        const methodFormGroups: FormGroup[] = [];

        contact.methods.forEach(method => {
          const methodFormGroup = this.buildMethodForm();
          methodFormGroup.patchValue({
            type: method.type,
            value: method.value,
          });
          methodFormGroups.push(methodFormGroup);
        })

        const contactFormGroup = this.formTools.builder.group({
          name: contact.name,
          methods: this.formTools.builder.array(methodFormGroups)
        });
        this.formContacts().push(contactFormGroup);
      });

      lead.officialSites.forEach(officialSite => {
        const officialSiteFormGroup = this.buildOfficialSiteForm();
        officialSiteFormGroup.patchValue({
          type: officialSite.type,
          value: officialSite.value,
        });
        this.formOfficialSites().push(officialSiteFormGroup);
      });

    }
  }

  public submit(): void {
    if (this.formGroup.invalid) return;
    const {lead, state} = this.dialogData;

    const values: any = this.formGroup.getRawValue();

    if (lead?.id) {
      this._panelService.updateLead(lead?.id, values);

      this._dialogRef.close(values)
    } else {
      this._panelService.createLead(state?.id, values);

      this._dialogRef.close(values)
    }

  }

  public addOfficialSiteForm() {
    const officialSiteFormGroup = this.buildOfficialSiteForm();

    this.formOfficialSites().push(officialSiteFormGroup);
  }

  public addMethodContactForm(indexContact: number) {
    const methodFormGroup = this.buildMethodForm();

    this.formMethods(indexContact).push(methodFormGroup);
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
    });
  }

  public removeOfficialSiteFormGroup(i: number) {
    this.formOfficialSites().removeAt(i);
  }


  public removeContactFormGroup(i: number) {
    this.formContacts().removeAt(i);
  }

  public removeMethodFormGroup(i: number, j: number) {
    this.formMethods(i).removeAt(j)
  }
}
