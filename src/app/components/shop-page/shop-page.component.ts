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
  handleClickTabShopPage(id: string) {
    if(id === "btnHomeID"){
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
      (document.getElementById(id) as HTMLElement).classList.add("checked");
      (document.getElementById('btnAllProductID') as HTMLElement).classList.remove("checked");
    }else{
      (document.getElementById('topOfproductListMainID') as HTMLElement).scrollIntoView();
      (document.getElementById(id) as HTMLElement).classList.add("checked");
      (document.getElementById('btnHomeID') as HTMLElement).classList.remove("checked");
    }
  } 
}
