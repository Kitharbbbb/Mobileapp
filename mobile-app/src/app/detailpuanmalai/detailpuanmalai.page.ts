import { SharedataService } from './../services/sharedata.service';
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Info } from '../detailpuanmalai/info';

@Component({
  selector: 'app-detailpuanmalai',
  templateUrl: './detailpuanmalai.page.html',
  styleUrls: ['./detailpuanmalai.page.scss'],
})
export class DetailpuanmalaiPage implements OnInit {

  name = Info.name1;
  pic = Info.pic;
  detail = Info.detail;
  price = Info.price;
  constructor(private navCtrl: NavController,
              private sharedataService: SharedataService) { }

  ngOnInit() {
  }
}
