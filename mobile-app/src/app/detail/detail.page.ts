import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { SharedataService } from './../services/sharedata.service';
import { Info } from '../detail/info';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  name = Info.name1;
  pic = Info.pic;
  detail = Info.detail;
  price = Info.price;

  constructor(private navCtrl: NavController,
              private shareDataServ: SharedataService) { }

  ngOnInit() {
  }
  gotodetail() {
    const detailpuanmalai = { name: 'MS', price: '40,000 B', };
    this.shareDataServ.setShareData('detailpuanmalai');
    this.navCtrl.navigateForward('detailpuanmalai');
  }
  gotoCart() {
    this.navCtrl.navigateForward('cart');
  }

}
