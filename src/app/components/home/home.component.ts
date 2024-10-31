import { Component } from '@angular/core';
import { HomeNewsComponent } from './components/home-news/home-news.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeFlashSaleComponent } from './components/home-flash-sale/home-flash-sale.component';
import { AdvertiseComponent } from './components/advertise/advertise.component';
import { HomeSuggestComponent } from './components/home-suggest/home-suggest.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeNewsComponent, CategoryComponent, HomeFlashSaleComponent, AdvertiseComponent, HomeSuggestComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
