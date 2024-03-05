import {Component} from '@angular/core';
import mixpanel from 'mixpanel-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'devon.dev-web';

  constructor() {
    mixpanel.init(
      '2be2b1e4c28af9c62688ec0a481ac9db',
      {
        debug: true,
      }
    );
  }
}
