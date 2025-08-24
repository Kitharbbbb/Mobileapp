import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cenyes',
  templateUrl: './cenyes.page.html',
  styleUrls: ['./cenyes.page.scss'],
})
export class CenyesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
  gotoBackHome(){
    this.navCtrl.navigateBack('tabs/tab1');
  }

}
