import { Component, OnInit} from '@angular/core';
import { ChildService } from '../../services/child.service';
import { Child } from '../../models/child';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Location } from '@angular/common';

@Component({
  selector: 'app-share-child',
  templateUrl: './share-child.page.html',
  styleUrls: ['./share-child.page.scss'],
})
export class ShareChildPage implements OnInit {

  public term: string;
  protected child: Child[];
  protected focusOnSearchbar: boolean = false;

  constructor(
    private childService: ChildService,
    public loadingCtrl: LoadingController,
    public toastController: ToastController,
    private _location: Location
    ) { }

  async getChild(): Promise<any> {
    this.child = await this.childService.getChild();
  }

  async getChildWithTerm(term: string): Promise<any> {
    this.child = await this.childService.getChildWithTerm(term);
  }

  async presentToastForEmptyArray(term: string): Promise<void> {
    const toast = await this.toastController.create({
      message: `Nenhum resultado para o termo '${term}'`,
      duration: 3000,
      showCloseButton: true,
      position: 'bottom',
      cssClass: 'toast',
      closeButtonText: 'Ok'
    });
    toast.present();
  }

  checkSearchResult(resultArray: Array<any>): void {
    if (resultArray.length === 0)
      this.presentToastForEmptyArray(this.term);
  }

  public async search(term: string): Promise<void> {
    this.term = term;
    this.focusOnSearchbar = false;
    this.child = [];
    const loading = await this.loadingCtrl.create({});
    loading.present();
    await this.getChildWithTerm(term);
    loading.dismiss();
    this.focusOnSearchbar = true;
    this.checkSearchResult(this.child);
  }

  goback() {
    this._location.back();
  }

  ngOnInit() {
    this.getChild()
      .then(() => console.log('childs successfully retrieved from database'))
      .catch((err) => console.log(err));
  }

}
