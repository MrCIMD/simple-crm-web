import { AfterViewInit, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent } from "@angular/material/dialog";
import { Lead, LeadComment, RoleEnum } from "@utils/types";
import { AvatarComponent } from "@components/avatar/avatar.component";
import { MatIcon } from "@angular/material/icon";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatTooltip } from "@angular/material/tooltip";
import { LeadPreviewComponent } from "../lead-preview/lead-preview.component";
import { RelativeTimePipe } from "../../../../../pipe/relative-time.pipe";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { factoryUser } from "@utils/factories";

@Component({
  selector: 'app-lead-tracker-dialog',
  standalone: true,
  imports: [
    AvatarComponent,
    MatDialogClose,
    MatIcon,
    MatIconButton,
    MatTooltip,
    MatDialogContent,
    LeadPreviewComponent,
    MatButton,
    RelativeTimePipe,
    MatLabel,
    MatFormField,
    MatInput,
    ReactiveFormsModule
  ],
  templateUrl: './lead-tracker-dialog.component.html',
  styles: ``
})
export class LeadTrackerDialogComponent implements OnInit, AfterViewInit {
  @ViewChild('messagesContainer') public messagesContainer!: ElementRef<HTMLDivElement>;

  public readonly dialogData: Lead = inject<Lead>(MAT_DIALOG_DATA);

  public messageControl: FormControl = new FormControl('');
  public messages: LeadComment[] = [];

  ngOnInit() {
    this.messages = this.dialogData?.comments || [];
  }

  ngAfterViewInit() {
    this.scrollToBottom();
  }

  public sendMessage() {
    const payload: LeadComment = {
      comment: this.messageControl.value,
      timestamp: new Date(),
      owner: factoryUser(RoleEnum.CONTRIBUTOR)
    };

    this.messages.push(payload);

    this.messageControl.setValue('');
  }

  public scrollToBottom(): void {
    try {
      this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
