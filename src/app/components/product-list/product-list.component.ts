import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {


  // Mở Bộ lọc sản phẩm 
  openFilterProductList(): void{
    (document.getElementById('leftOfProductListID') as HTMLDivElement).style.transform = 'translateX(0px)';
  }
  // Đóng Bộ lọc sản phẩm 
  closeFilterProductList(): void{
    (document.getElementById('leftOfProductListID') as HTMLDivElement).style.transform = 'translateX(-500px)';
  }
}
