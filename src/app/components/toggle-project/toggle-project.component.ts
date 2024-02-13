import { Component } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { MatInputModule } from "@angular/material/input";
import { AvatarComponent } from '@components/common/avatar/avatar.component';
import { Project } from "@/utils/types";
import { DEFAULT_PROJECT } from "@/utils/contains";
import { MatRippleModule } from "@angular/material/core";


@Component({
  selector: 'app-toggle-project',
  standalone: true,
  imports: [MatAutocompleteModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, AvatarComponent, CommonModule, MatRippleModule],
  templateUrl: './toggle-project.component.html',
  styles: ``
})
export class ToggleProjectComponent {
  public value: Project = DEFAULT_PROJECT;

  constructor() {
  }
}
