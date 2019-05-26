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

  ngOnInit() {}

}
