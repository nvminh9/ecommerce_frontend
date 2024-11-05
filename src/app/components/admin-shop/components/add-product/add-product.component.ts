import { Component } from '@angular/core';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  constructor(){}


  selectedFile: File[] = []
  img_product :File | null = null

  details : any = {
    name: '',
    value: ''
  }
  product_details :any = []


  isFileSelected(event:any){
    if(event.target.files.length > 0){
      this.selectedFile = Array.from(event.target.files) 
      //console.log(this.selectedFile.length);
    }
  }
 // alert("ok") không thể đặt alert() hay log ra được ngoài component , chỉ có thể gọi bên trong 1 hàm nào đó mới được
  
  add_product_details(){

  }

  //create_product(product_name:any,product_short_description:any, product_description:any,categoriesID:any,product_supp_price:any,







  // Handle preview product images
  handlePreviewProductImages(): void{
    // tạo URL ảo cho từng ảnh được chọn
    let previewImageFile = [];
    let previewImageURL = [];
    // lấy ảnh từ input
    for(let i=0; i<5; i++){
      previewImageFile.push((document.getElementById('productImagesID') as any).files[i])
    }
    if(previewImageFile.length > 0){
      // tạo URL ảo
      for(let file of previewImageFile){
        previewImageURL.push(URL.createObjectURL(file))
      }
      // show
      (document.getElementById('imagePreviewID1') as HTMLImageElement).src = previewImageURL[0];
      (document.getElementById('imagePreviewID2') as HTMLImageElement).src = previewImageURL[1];
      (document.getElementById('imagePreviewID3') as HTMLImageElement).src = previewImageURL[2];
      (document.getElementById('imagePreviewID4') as HTMLImageElement).src = previewImageURL[3];
      (document.getElementById('imagePreviewID5') as HTMLImageElement).src = previewImageURL[4];
    }
  }

  //
  handleDeleteVariant(): void{

  }

  // Handle Preview Variant
  handlePreviewVariant(this: any): void{
    // this.preventDefault();
    let previewVariantName: any;
    let previewVariantPrice: any;
    let previewVariantQuantity: any;
    let previewVariantImage: any;
    let previewVariantImageURL: any;
    // lấy giá trị từ input, tạo URL ảo
    previewVariantName = (document.getElementById('nameVariantID') as HTMLInputElement).value;
    previewVariantPrice = (document.getElementById('priceVariantID') as HTMLInputElement).value;
    previewVariantQuantity = (document.getElementById('quantityVariantID') as HTMLInputElement).value;
    previewVariantImage = (document.getElementById('imageVariantID') as any).files[0];
    previewVariantImageURL = URL.createObjectURL(previewVariantImage);
    // show
    // Tạo div chính
    const div = document.createElement("div");
    div.id = `${previewVariantName}ID`
    div.className = "variant";
    div.style.display = "flex";
    div.style.alignItems = "center";
    div.style.justifyContent = "space-between";
    div.style.padding = "10px";

    // Tạo span để chứa tên biến thể
    const span = document.createElement("span");
    span.style.width = "20%";
    span.style.display = "block";
    span.style.color = "#222";
    span.style.fontWeight = "400";
    span.style.fontSize = "14px";
    span.style.textAlign = "center";
    span.textContent = previewVariantName;

    // Tạo img
    const img = document.createElement("img");
    img.src = previewVariantImageURL;
    img.alt = "";
    img.style.width = "20%";
    // img.style.height = "150px";
    img.style.textAlign = "center";
    img.style.borderRadius = "8px";

    // Tạo span để chứa giá
    const spanPrice = document.createElement("span");
    spanPrice.style.width = "20%";
    spanPrice.style.display = "block";
    spanPrice.style.color = "#222";
    spanPrice.style.fontWeight = "400";
    spanPrice.style.fontSize = "14px";
    spanPrice.style.textAlign = "center";
    spanPrice.textContent = previewVariantPrice;

    // Tạo span để chứa số lượng
    const spanQuantity = document.createElement("span");
    spanQuantity.style.width = "20%";
    spanQuantity.style.display = "block";
    spanQuantity.style.color = "#222";
    spanQuantity.style.fontWeight = "400";
    spanQuantity.style.fontSize = "14px";
    spanQuantity.style.textAlign = "center";
    spanQuantity.textContent = previewVariantQuantity;

    // Tạo button Xóa
    const button = document.createElement("button");
    button.className = "btnDeleteVariant";
    button.style.width = "20%";
    button.style.border = ".5px solid #c0392b";
    button.style.padding = "10px 5px";
    button.style.fontSize = "12px";
    button.style.fontWeight = "600";
    button.style.color = "#c0392b";
    button.style.borderRadius = "4px";
    button.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px";
    button.style.cursor = "pointer";
    button.style.transition = "all .1s";
    button.textContent = "Xóa";
    // button.onclick = handleDeleteVariant();

    // Ghép các phần tử vào div chính
    div.appendChild(span);
    div.appendChild(img);
    div.appendChild(spanPrice);
    div.appendChild(spanQuantity);
    div.appendChild(button);
    (document.getElementById('previewVariantBoxID') as HTMLElement).appendChild(div);
  }

  // Thay đổi ảnh đại diện khi chọn ảnh mới (xem trước)
  handleProfileCoverImageUpdate(): void{
    // xóa Object URL trước đó
    const oldImagePreview = (document.getElementById('avatarInfoID') as HTMLImageElement).src;
    URL.revokeObjectURL(oldImagePreview);
    // tạo URL ảo để hiện khi chọn hình khác từ máy
    // const fileCoverImage = avatarInfoID.target.files[0];
    const fileCoverImage = (document.getElementById('btnChooseImageID') as any).files[0];
    if (fileCoverImage) {
        let fileCoverImagePreview = URL.createObjectURL(fileCoverImage);
        // Url ảo cho ảnh bìa
        // setProfileCoverImagePreview(fileCoverImagePreview);
        (document.getElementById('avatarInfoID') as HTMLImageElement).src = fileCoverImagePreview;
    }
    //
    console.log(URL.createObjectURL(fileCoverImage));
  };
}
