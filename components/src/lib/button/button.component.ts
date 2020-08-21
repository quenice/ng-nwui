import {Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'button[nw-button], a[nw-button], div[nw-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit, OnChanges {

  @Input() icon;
  @Input() loading = false;
  loadingCss: string;
  @HostBinding('disabled') disabled = false;

  constructor() {
  }

  ngOnInit(): void {
  }


  ngOnChanges(changes: SimpleChanges): void {
    const processChange = changes.loading;
    if (processChange.currentValue as boolean) {
      this.loadingCss = 'loading';
      this.disabled = true;
    } else {
      this.loadingCss = null;
      this.disabled = false;
    }
  }
}
