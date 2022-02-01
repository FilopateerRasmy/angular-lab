import { Component } from '@angular/core';
// contains the meta data that defines html , css files and the selector that we used to call a class
@Component({
  selector: 'myfirstapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';

}
