import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [SearchComponent],
  exports: [SearchComponent],
  imports: [ReactiveFormsModule],
})
export class SearchModule {}
