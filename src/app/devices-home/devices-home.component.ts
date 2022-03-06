import {Component, OnInit} from '@angular/core';
import {DatePipe} from "@angular/common";
import {DevicesService} from "../services/devices.service";

@Component({
  selector: 'app-devices-home',
  templateUrl: './devices-home.component.html',
  styleUrls: ['./devices-home.component.css']
})
export class DevicesHomeComponent implements OnInit {

  currentDateTime: any
  devicesList: any
  devices: any
  device: any
  searchText = '';
  isLoaded: boolean = false;

  constructor(public datepipe: DatePipe, public deviceService: DevicesService) {
    this.currentDateTime = this.datepipe.transform((new Date), 'dd MMMM yyyy');
  }

  ngOnInit(): void {
    this.getDevices()
  }


  openModal(device: any) {
    this.device = device

  }

  //Getting the devices list from the API
  getDevices() {
    this.isLoaded = false
    this.deviceService.getDevicesList().subscribe(res => {
      this.devicesList = res
      this.isLoaded = true
    })
  }

  search() {
    if (this.searchText == null || this.searchText === '') {
      this.getDevices()
    } else {
      this.devicesList = this.devicesList.filter((b: any) => b.name.includes(this.searchText)
        || b.name.toLowerCase().includes(this.searchText))
    }
  }

}
