import { Component, OnInit } from '@angular/core';
import { ObservableService } from 'src/service/observable.service';

@Component({
  selector: 'app-app-two',
  templateUrl: './app-two.component.html',
  styleUrls: ['./app-two.component.scss']
})
export class AppTwoComponent implements OnInit {

  public response: any = null;

  constructor(private observableService: ObservableService) {
    this.observableService.getObservable().subscribe(x => {
      this.response = x;
    });
  }

  ngOnInit(): void {
  }

  public changeObservable(): void {
    this.observableService.setObservable('Change value for appTwo.component.ts')
  }

}
