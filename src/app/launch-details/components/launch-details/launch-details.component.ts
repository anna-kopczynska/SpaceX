import { Component, Input, OnInit } from '@angular/core';
import { LaunchModel } from 'src/app/shared/models/launch.model';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
})
export class LaunchDetailsComponent implements OnInit {
  @Input() launch!: LaunchModel | null | undefined;
  constructor() {}

  ngOnInit(): void {}
}
