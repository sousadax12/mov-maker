import {Component, OnInit} from '@angular/core';
import {finalize} from 'rxjs/operators';
import {GearbestAPIService} from '@app/home/gearbestAPI.service';
import {ProductURLGB} from '@app/home/productURLGB.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  quote: string;
  isLoading: boolean;
  linkToGenerate: string;
  generatedURL: ProductURLGB;

  constructor(private gearbestAPIService: GearbestAPIService) {
  }

  ngOnInit() {

  }

  public async submit(url: string) {
    const [urlProduct] = await this.gearbestAPIService.getGenerateURL([url], '').toPromise();
    this.generatedURL = urlProduct;
    console.log(this.generatedURL);
  }

}
