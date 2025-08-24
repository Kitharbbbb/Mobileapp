import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-setup',
  templateUrl: './setup.page.html',
  styleUrls: ['./setup.page.scss'],
})
export class SetupPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController) { }

  ngOnInit() {
    const title = this.activatedRoute.snapshot.paramMap.get('title');
    const decodedTitle = decodeURIComponent(title)
  }
  gotoMyadd() {
    this.navCtrl.navigateForward('myadd');
  }
  gotoSecurity() {
    this.navCtrl.navigateForward('security');
  }
  gotoLogout() {
    this.navCtrl.navigateForward('logout');
  }
}
