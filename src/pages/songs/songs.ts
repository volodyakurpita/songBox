import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { SongDetailsPage } from '../song-details/song-details';

@IonicPage()
@Component({
  selector: 'page-songs',
  templateUrl: 'songs.html',
})
export class SongsPage {

  songs = [
    {
      id: 1,
      name: 'Ми всі сімя',
      acords: '#C Am D',
      author: 'Hillsong'
    },
    {
      id: 2,
      name: 'Молитва',
      acords: '#C Am D',
      author: 'Hillsong'
    },
    {
      id: 3,
      name: 'Скоро скоро вже',
      acords: '#C Am D',
      author: 'Hillsong'
    },
    {
      id: 4,
      name: 'Наш Бог',
      acords: '#C Am D',
      author: 'Hillsong'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalController: ModalController) {
  }

  openDetail(song: any) {
    let openDetail = this.modalController.create(SongDetailsPage, song);
    openDetail.present();
  }

  songSelected(song) {
    console.log(song.id);
  }

  logout() {
    localStorage.clear();
    this.navCtrl.setRoot("LoginPage");
  }
}