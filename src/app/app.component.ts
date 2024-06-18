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
