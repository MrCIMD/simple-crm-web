import { Component } from '@angular/core';
import { TitleComponent } from "@app/components/title/title.component";
import { Project } from "@app/utils/types";
import { projects } from "@app/pages/projects/projects.data";
import { MatRipple } from "@angular/material/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TitleComponent, MatRipple],
  templateUrl: './projects.component.html',
  styles: ``
})
export default class ProjectsComponent {
  public projects: Project[] = projects;
}
