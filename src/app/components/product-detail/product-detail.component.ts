import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
// 

constructor(){
  //
}

// tăng giảm số lượng sản phẩm muốn mua
plusOrMinusQuantityProductOrder(isPlus: boolean): void {
  let currentQuantityProductOrder = document.getElementById('quantityOfProductOrderID') as HTMLInputElement;
  if(isPlus){
    (document.getElementById("quantityOfProductOrderID") as any).value = (currentQuantityProductOrder.value as any) - 0 + 1
    console.log(typeof(currentQuantityProductOrder.value))
  }else if((document.getElementById("quantityOfProductOrderID") as any).value != 1){
    (document.getElementById("quantityOfProductOrderID") as any).value = (currentQuantityProductOrder.value as any) - 0 - 1
    console.log(typeof(currentQuantityProductOrder.value))
  }
}
// đánh giá sao (1-5 sao) cho sản phẩm
starRatingForProduct(numberOfStars: string): void {
  let currentStarOfProduct = document.getElementById('starRatingOfProductID') as HTMLInputElement;
  let starRatingForm = document.getElementsByClassName('starRatingOfProduct')[0] as HTMLDivElement;
  if(numberOfStars != currentStarOfProduct.value){
    for(let i=1; i<=5; i++){
      if(i <= ((numberOfStars as any) - 0)){
        ((starRatingForm.childNodes[i]) as HTMLElement).className = "fa fa-star checked"
      }else{
        ((starRatingForm.childNodes[i]) as HTMLElement).className = "fa fa-star"
      }
    }
    (document.getElementById('starRatingOfProductID') as HTMLInputElement).value = numberOfStars
    console.log((document.getElementById('starRatingOfProductID') as HTMLInputElement).value)
  }else{
    for(let i=1; i<=5; i++){
      ((starRatingForm.childNodes[i]) as HTMLElement).className = "fa fa-star"
    }
    (document.getElementById('starRatingOfProductID') as HTMLInputElement).value = '0';
    console.log("Chưa đánh giá")
  }
}
// thay đổi hình chiếu sản phẩm khi hover vào hình nhỏ
changeImageActive(orderOfImage: string): void { 
  ((document.getElementById('imageOfProductActivedID') as HTMLDivElement).childNodes[0] as HTMLImageElement).src = (document.getElementById('imageOfProductID'+orderOfImage)?.childNodes[0] as HTMLImageElement).src;
  (document.getElementById('imageOfProductID1') as HTMLElement).className = 'imageOfProductDetail';
  (document.getElementById('imageOfProductID2') as HTMLElement).className = 'imageOfProductDetail';
  (document.getElementById('imageOfProductID3') as HTMLElement).className = 'imageOfProductDetail';
  (document.getElementById('imageOfProductID4') as HTMLElement).className = 'imageOfProductDetail';
  (document.getElementById('imageOfProductID5') as HTMLElement).className = 'imageOfProductDetail';
  (document.getElementById('imageOfProductID'+orderOfImage) as HTMLElement).className = 'imageOfProductDetail choosed';
}

}
