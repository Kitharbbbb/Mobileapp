import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { SharedataService } from './../services/sharedata.service';
import { Info } from '../detail/info';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  name = Info.name1;
  pic = Info.pic;
  detail = Info.detail;
  price = Info.price;
  constructor(private activatedRoute: ActivatedRoute,
              private navCtrl: NavController){ }
  ngOnInit() {
  }
    gotodetail() {
      const detailpuanmalai = { name: 'MS', price: '40,000 B', };
      this.navCtrl.navigateForward('detailpuanmalai');
    }

  gotoConfirmbuy() {
    this.navCtrl.navigateForward('confirmbuy');
  }
  gotoChat() {
    this.navCtrl.navigateForward('chat');
  }
  gotoPlian() {
    this.navCtrl.navigateForward('plian');
  }

}
