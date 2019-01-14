import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-song-details',
  templateUrl: 'song-details.html',
})
export class SongDetailsPage {
  song: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.song = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SongDetailsPage');
  }

  close() {
    this.navCtrl.pop();
  }

}
