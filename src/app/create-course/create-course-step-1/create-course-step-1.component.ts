import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { MyErrorStateMatcher } from './errors/default.error-matcher';
const SIMPLE_Text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio reprehenderit voluptatum dolorem minus nostrum, cupiditate est voluptatibus officia hic nisi repellat totam veritatis cumque tempora dicta, obcaecati enim odit? Omnis?";
@Component({
  selector: 'create-course-step-1',
  templateUrl: './create-course-step-1.component.html',
  styleUrls: ['./create-course-step-1.component.css']
})
export class CreateCourseStep1Component  {
  matcher = new MyErrorStateMatcher();
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]],
    releasedAt: [new Date(1990,0,1), Validators.required],
    category: ['BEGINNER', Validators.required],
    courseType: ['premium', Validators.required],
    downloadsAllowed: [false, Validators.requiredTrue],
    longDescription: [SIMPLE_Text, [Validators.required, Validators.minLength(3)]]
  });

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {

      const date = cellDate.getDate();

      if (view == 'month') {
          return (date == 1) ? 'highlight-date' : "";
      }

      return "";
  }

  constructor(private fb: FormBuilder) {

  }

  get courseTitle() {
    return this.form.get('title');
  }


}