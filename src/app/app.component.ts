import { Component } from '@angular/core';
import { Data } from '../app/data';

interface DataDetails {
  title: string,
  buttonTitle: string,
  price: string,
  isBuyAllow: boolean,
  subTitle: string,
  lbs: string,
  subText: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mockup-demo';

  private dataDetails: DataDetails[] = Data.details;

  ngOnInit() {
    console.log(this.dataDetails);
  }

}
