import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  loading = false;

  doSearch(): void {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }
}
