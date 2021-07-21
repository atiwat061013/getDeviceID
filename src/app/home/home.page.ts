import { Component } from '@angular/core';

import { Device } from '@ionic-native/device/ngx';
import { Platform } from '@ionic/angular';
import { NetworkInterface } from '@ionic-native/network-interface/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  deviceID: any;


  constructor(
    private device: Device,
    private platform: Platform,
    private networkInterface: NetworkInterface,
  ) {

    this.networkInterface.getWiFiIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));

  this.networkInterface.getCarrierIPAddress()
    .then(address => console.info(`IP: ${address.ip}, Subnet: ${address.subnet}`))
    .catch(error => console.error(`Unable to get IP: ${error}`));

  const url = 'www.github.com';
  this.networkInterface.getHttpProxyInformation(url)
    .then(proxy => console.info(`Type: ${proxy.type}, Host: ${proxy.host}, Port: ${proxy.port}`))
    .catch(error => console.error(`Unable to get proxy info: ${error}`));


    if (this.platform.is('android')) {
      console.log('Android');
      this.deviceID = this.device.uuid;
      console.log('Device UUID is: ' + this.device.uuid);
    } else if (this.platform.is('electron')) {
      this.deviceID = 'GET-MAC';
    } else if (this.platform.is('desktop')) {
      this.deviceID = 'GET-Desktop';

    }

    

  }



  
    



}
