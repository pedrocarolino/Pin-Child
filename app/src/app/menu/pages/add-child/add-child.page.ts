import { Component, OnInit } from '@angular/core';
import { ChildService } from '../../services/child.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.page.html',
  styleUrls: ['./add-child.page.scss'],
})
export class AddChildPage implements OnInit {

  public addChildForm = new FormGroup({
    name: new FormControl('', Validators.required),
    nickname: new FormControl('', Validators.required),
    birthDate: new FormControl('', Validators.required),
    code: new FormControl('', Validators.required)
  });

  constructor(private childService: ChildService, private alertCtrl: AlertController,
    private loadingController: LoadingController,private _location: Location) {}

  async presentAlert(title: string, message: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: message,
      buttons: ['Ok!']
    })

    alert.present();
  }

  goback() {
    this._location.back();
  }

  async onSubmit() {
    console.log('submitting form');
  }

  ngOnInit() {
  }

}
