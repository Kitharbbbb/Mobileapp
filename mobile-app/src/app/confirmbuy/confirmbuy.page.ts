import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { SharedataService } from './../services/sharedata.service';

@Component({
  selector: 'app-confirmbuy',
  templateUrl: './confirmbuy.page.html',
  styleUrls: ['./confirmbuy.page.scss'],
})
export class ConfirmbuyPage implements OnInit {
  inbucket = [];
  num = 0;
  sum = 0;

  constructor(private activatedRoute: ActivatedRoute,
    private navCtrl: NavController, private shareDataServ: SharedataService) {
    console.log(this.shareDataServ.getSharedData());
    this.sum = this.shareDataServ.sum;

    this.num = this.inbucket.length;
    for (const i of this.inbucket) {
      if (i.price !== null) { this.sum += Number(i.price); }
    }
    this.shareDataServ.setsum(this.sum);
    console.log(this.sum);
    console.log(this.num);
    console.log(this.inbucket);
  }

  ngOnInit() {
  }
  gotoBuysucces() {
    this.navCtrl.navigateForward('buysucces');
  }
}
