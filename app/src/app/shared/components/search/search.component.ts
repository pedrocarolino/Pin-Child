import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnChanges {
  @Input() focusOnSearchbar: boolean;
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();
  @ViewChild('searchbar') searchbar: any;

  constructor() { }

  public triggerSearch(ev): void {
    this.onSearch.emit(ev.target.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.focusOnSearchbar && this.focusOnSearchbar) {
      setTimeout(() => this.searchbar.setFocus(), 300);
    }
  }
 
  ngOnInit() {
  }

}
