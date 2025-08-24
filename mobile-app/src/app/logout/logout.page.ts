import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
    constructor(private activatedRoute: ActivatedRoute,
                private navCtrl: NavController){ }
    ngOnInit() {
      const title = this.activatedRoute.snapshot.paramMap.get('title');
      const decodedTitle = decodeURIComponent(title);
    }
    gotoTab1() {
      this.navCtrl.navigateForward('tabs/tab1');
    }
    gotoLogin() {
      this.navCtrl.navigateForward('login');
    }
  
  }
  