import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ResponseModel } from '../../models/response.model';

@Component({
  selector: 'app-launches-list',
  templateUrl: './launches-list.component.html',
  styleUrls: ['./launches-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LaunchesListComponent {
  @Input() launches: ResponseModel | null = null;
  @Output() pageChange = new EventEmitter<number>();
  pageSize = 20;

  onPageChange(pageNumber: number) {
    this.pageChange.emit(pageNumber);
  }
}
