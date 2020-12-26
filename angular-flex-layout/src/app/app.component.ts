import { Component } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';

  constructor(
    private readonly mediaObserver: MediaObserver
  ) {}

  ngOnInit() {
    this.title = `You are ${this.mediaObserver.isActive('xs') ? '' : 'not'} in Mobile View`;

    this.mediaObserver.asObservable().subscribe((media) => {
      this.title = `You are ${media[0].mqAlias === 'xs' ? '' : 'not'} in Mobile View`;
    });
  }
}
