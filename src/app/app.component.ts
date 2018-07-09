import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  searchTextCount = 0;
  searchText = '';

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

  countSearchText(searchText: string) {
    this.searchTextCount = searchText.length;
    this.searchText = searchText;
  }

  clearSearchText(key: string) {
    if (key === 'Escape') {
      this.searchText = '';
      this.searchTextCount = 0;
      console.log('success.');
    }
  }
}
