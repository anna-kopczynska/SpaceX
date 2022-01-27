import { FormControl, FormGroup } from '@angular/forms';

const NAME_CONTROL = 'name';
const FROM_DATE_CONTROL = 'fromDate';
const TO_DATE_CONTROL = 'toDate';
const SUCCESS_CONTOL = 'success';

export class LaunchesFormModel {
  readonly form: FormGroup;

  constructor() {
    this.form = this.build();
  }

  private build(): FormGroup {
    const formGroup = new FormGroup({
      [NAME_CONTROL]: new FormControl(),
      [FROM_DATE_CONTROL]: new FormControl(''),
      [TO_DATE_CONTROL]: new FormControl(''),
      [SUCCESS_CONTOL]: new FormControl(''),
    });
    return formGroup;
  }
}
