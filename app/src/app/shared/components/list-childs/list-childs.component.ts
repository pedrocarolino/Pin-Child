import { RouterModule } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/menu/models/child';

@Component({
  selector: 'app-list-childs',
  templateUrl: './list-childs.component.html',
  styleUrls: ['./list-childs.component.scss'],
})

export class ListChildsComponent implements OnInit {
  @Input() childs: Child[];

  constructor() { }

  ngOnInit() {}

}
