import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SharedataService } from './../services/sharedata.service';
import { Info } from '../detail/info';
@Component({
  selector: 'app-yang',
  templateUrl: './yang.page.html',
  styleUrls: ['./yang.page.scss'],
})
export class YangPage implements OnInit {

  constructor(private navCtrl: NavController,
    private shareDataServ: SharedataService) { }

  ngOnInit() {
  }
  gotodetail(name, pic, detail, price) {
    Info.name1 = name;
    Info.pic = pic;
    Info.detail = detail;
    Info.price = price;
    this.navCtrl.navigateForward('detail');
  }
}
