import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cen',
  templateUrl: './cen.page.html',
  styleUrls: ['./cen.page.scss'],
})
export class CenPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoCenyes() {
    this.navCtrl.navigateBack('cenyes');
  }


}
