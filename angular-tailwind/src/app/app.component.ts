import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-tailwind';

  // MediaObserver from '@angular/flex-layout' can easily be replaced by
  // BreakpointObserver from '@angular/cdk/layout'
}
