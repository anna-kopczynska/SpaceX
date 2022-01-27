import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { faReply } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-launch-header',
  templateUrl: './launch-header.component.html',
  styleUrls: ['./launch-header.component.scss'],
})
export class LaunchHeaderComponent {
  @Input() launchNumber!: number;
  faReply = faReply;

  constructor(private readonly router: Router) {}

  goToMainPage() {
    this.router.navigate(['/launches']);
  }
}
