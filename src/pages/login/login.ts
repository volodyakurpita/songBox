import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../app/model/User';
import { SongsPage } from '../songs/songs';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styles: ['login.scss'],
})
export class LoginPage {

  user = {} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireAuth, public alertCtrl: AlertController) {}

  async login(user: User) {
    try {
      this.db.auth.signInWithEmailAndPassword(user.email, user.password).then(response => {
        if (response) {
          localStorage.setItem('token',response.user.uid);
          this.navCtrl.push(SongsPage);
        }
      }).catch(e => {
        if (e.message) {
          this.showAlert(e.message);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  registerUser(e) {
    // this.navCtrl.push(RegisterPage);
  }

  showAlert(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: message,
      buttons: ['Try again']
    });
    alert.present();
  }
}
