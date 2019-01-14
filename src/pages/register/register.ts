import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { User } from '../../model/User';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireAuth) {
    this.user  = {
      email : '',
      password: ''
    }
  }

  async register(user: User) {
    try {
      const result = await this.db.auth.createUserAndRetrieveDataWithEmailAndPassword(user.email, user.password);
      console.log(result);
    }
    catch (e) {
      console.log(e);
    }
  }




}
