import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-devices-list-loading',
  templateUrl: './devices-list-loading.component.html',
  styleUrls: ['./devices-list-loading.component.scss']
})
export class DevicesListLoadingComponent implements OnInit {
  @Input() isOrderList: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
