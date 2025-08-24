import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  constructor(private navCtrl: NavController){}
  ngOnInit()
   {

  }
  gotoCart() {
    this.navCtrl.navigateForward('cart');
  }
  gotoChat() {
    this.navCtrl.navigateForward('chat');
  }
  gotokreangyon() {
    this.navCtrl.navigateForward('kreangyon');
  }
  gotolomax() {
    this.navCtrl.navigateForward('lomax');
  }
  gotopuanmalai() {
    this.navCtrl.navigateForward('puanmalai');
  }
  gototoaisia() {
    this.navCtrl.navigateForward('toaisia');
  }
  gotoyang() {
    this.navCtrl.navigateForward('yang');
  }
}
