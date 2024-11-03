import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-shop-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './shop-page.component.html',
  styleUrl: './shop-page.component.css'
})
export class ShopPageComponent {

  // Xử lý chuyển tab trong trang Shop
  handleClickTabShopPage(e: any) {
    
  } 
}
