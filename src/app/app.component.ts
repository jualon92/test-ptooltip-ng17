import {
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CheckboxModule } from 'primeng/checkbox';
import { NgxTippyModule } from 'ngx-tippy-wrapper';
import { SelectButtonModule } from 'primeng/selectbutton';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    RouterOutlet,
    ButtonModule,
    TooltipModule,
    InputNumberModule,
    CheckboxModule ,
    NgxTippyModule,
    SelectButtonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewChecked {
  changeDetectionCount = 0;
  QTY_ELEMENTS = 400;
  value!: number;
  title = 'primeng-ptooltip';
  previousChangeDetectionCount = 0;
  cyclesAfterKeyPress = 0;
  checked:boolean = true;
  selectedState  = 0;
  stateOptions: any[] = [
    { label: 'no tooltip', value: 0 },
    { label: 'use primeng tooltip', value: 1 },
    { label: 'use ngxTippy tooltip', value: 2 }
];

  constructor(private cdRef: ChangeDetectorRef) {}

  ngAfterViewChecked() {
    this.changeDetectionCount++;
    this.cyclesAfterKeyPress =
      this.changeDetectionCount - this.previousChangeDetectionCount;
  }

  submit() {
    this.QTY_ELEMENTS = this.value;
  }

  @HostListener('document:keydown.escape')
  onKeydownHandler() {
    this.previousChangeDetectionCount = this.changeDetectionCount;
  }

  tooltipOptions = {
    disabled: true,
  };
}
