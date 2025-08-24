import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buysucces',
  templateUrl: './buysucces.page.html',
  styleUrls: ['./buysucces.page.scss'],
})
export class BuysuccesPage implements OnInit {

  constructor(private navCtrl: NavController,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  
  }
  gotoTab1() {
    this.navCtrl.navigateForward('tabs/tab1');
  }
  gotoTab3() {
    this.navCtrl.navigateForward('tabs/tab3');
  }
}
