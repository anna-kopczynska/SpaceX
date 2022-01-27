import {
  Component,
  ElementRef,
  Input,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import {
  NgbDate,
  NgbDateParserFormatter,
  NgbDateStruct,
  NgbInputDatepicker,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DatepickerComponent {
  @Input() fromControlName!: string;
  @Input() toControlName!: string;
  @Input() label!: string;
  faCalendarAlt = faCalendarAlt;

  hoveredDate!: NgbDateStruct | null;
  fromDate: any;
  toDate: any;
  model: any;

  @ViewChild('datepicker') datepicker!: NgbInputDatepicker;
  @ViewChild('rangeInput') rangeInput!: ElementRef;

  constructor(
    private renderer: Renderer2,
    private _parserFormatter: NgbDateParserFormatter,
    private parentForm: FormGroupDirective
  ) {}

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }
  isFrom(date: NgbDate) {
    return date.equals(this.fromDate);
  }
  isTo(date: NgbDate) {
    return date.equals(this.toDate);
  }

  onDateSelection(date: NgbDate) {
    let parsed = '';
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
      this.patchCtrlValue(this.fromControlName, date);
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
      this.patchCtrlValue(this.toControlName, date);
      this.datepicker.close();
    } else {
      this.toDate = null;
      this.fromDate = date;
      this.patchCtrlValue(this.fromControlName, date);
    }
    if (this.fromDate) {
      parsed += this._parserFormatter.format(this.fromDate);
    }
    if (this.toDate) {
      parsed += ' - ' + this._parserFormatter.format(this.toDate);
    }
    this.renderer.setProperty(this.rangeInput.nativeElement, 'value', parsed);
  }

  patchCtrlValue(controlName: string, date: NgbDate) {
    this.parentForm.form
      .get(controlName)
      ?.setValue(new Date(date.year, date.month - 1, date.day));
  }
}
