import { RouterModule } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/menu/models/child';

@Component({
  selector: 'app-shared-childs',
  templateUrl: './shared-childs.component.html',
  styleUrls: ['./shared-childs.component.scss'],
})
export class SharedChildsComponent implements OnInit {
  @Input() childs: Child[];
  constructor() { }

  shared() {
    console.log("Compartilhando Pulseira")
  }

  public getLinkWhastapp() {
    let latitude = "-19.8700292";
    let longitude = "-43.9632002";
  
    return console.log('https://api.whatsapp.com/send?latitude=' + latitude + '&longitude=' + longitude)
  }


  

  ngOnInit() {}

}
