import { Component } from '@angular/core';
import { HomeNewsComponent } from '../home-news/home-news.component';
import { CategoryComponent } from '../category/category.component';
import { HomeFlashSaleComponent } from '../home-flash-sale/home-flash-sale.component';
import { AdvertiseComponent } from '../advertise/advertise.component';
import { HomeSuggestComponent } from '../home-suggest/home-suggest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeNewsComponent, CategoryComponent, HomeFlashSaleComponent, AdvertiseComponent, HomeSuggestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
