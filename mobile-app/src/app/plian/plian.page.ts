import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-plian',
  templateUrl: './plian.page.html',
  styleUrls: ['./plian.page.scss'],
})
export class PlianPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
gototab4(){
  this.navCtrl.navigateForward('tabs/tab4');
}
}
