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

  public copy(val: string) {
    let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  public async submit() {
    console.log(this.linkToGenerate);
    const [urlProduct] = await this.gearbestAPIService.getGenerateURL([this.linkToGenerate], '').toPromise();
    this.generatedURL = urlProduct;
    const importantStuff = window.open(this.generatedURL.promotion_link, '_blank');
  }

}
