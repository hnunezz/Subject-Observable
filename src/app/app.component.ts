import { Component } from '@angular/core';
import { ObservableService } from 'src/service/observable.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public response: any = null;

  constructor(private ObservableService: ObservableService) {
    this.ObservableService.getObservable().subscribe(x => {
      this.response = x;
    });
  }

  public changeObservable() {
    this.ObservableService.setObservable('Change value for app.component.ts')
    //Set valeu for subject
  }
}
