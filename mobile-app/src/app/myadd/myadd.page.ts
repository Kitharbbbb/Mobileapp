import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-myadd',
  templateUrl: './myadd.page.html',
  styleUrls: ['./myadd.page.scss'],
})
export class MyaddPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoPlian() {
    this.navCtrl.navigateForward('plian');
  }

}
