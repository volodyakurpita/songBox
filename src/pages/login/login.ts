import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../model/User';
import { RegisterPage } from '../register/register';
import { SongsPage } from '../songs/songs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireAuth) {}

  async login(user: User) {
    try {
      this.db.auth.signInWithEmailAndPassword(user.email, user.password).then(response => {
        if (response) {
          localStorage.setItem('token',response.user.uid);
          this.navCtrl.push(SongsPage);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  registerUser(e) {
    this.navCtrl.push(RegisterPage);
  }
}
