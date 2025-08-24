import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab4Page implements OnInit {

  constructor(private navCtrl: NavController){}
  ngOnInit() {
  }
  gotoCart() {
    this.navCtrl.navigateForward('cart');
  }
  gotoChat() {
    this.navCtrl.navigateForward('chat');
  }
  gotoSetup() {
    this.navCtrl.navigateForward('setup');
  }
  gotoH() {
    this.navCtrl.navigateForward('h');
  }
}
