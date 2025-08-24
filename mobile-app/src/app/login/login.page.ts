import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController){ }
ngOnInit() {
}
gotoTab1() {
this.navCtrl.navigateForward('tabs/tab1');
}
gotoSignup() {
  this.navCtrl.navigateForward('signup');
}
gotoForgot() {
  this.navCtrl.navigateForward('forgot');
  }
}
