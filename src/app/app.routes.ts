import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { UserInfoComponent } from './components/profile-user/components/user-info/user-info.component';
import { OrderHistoryComponent } from './components/profile-user/components/order-history/order-history.component';
import { CartComponent } from './components/cart/cart.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PublicComponent } from './components/public/public.component';
import { AdminShopComponent } from './components/admin-shop/admin-shop.component';

export const routes: Routes = [
    {path: "", component: PublicComponent, 
        children: [
            {path: "", component: HomeComponent},
            {path: "product-list", component: ProductListComponent, // danh sách sp
                children: [
                    {path: "product-detail", component: ProductDetailComponent}, // chi tiết sp
                ],
            },
            {path: "product-detail", component: ProductDetailComponent}, // chi tiết sp
            {path: "shop-page", component: ShopPageComponent}, // trang của shop
            {path: "profile-user", component: ProfileUserComponent, // trang hồ sơ người dùng
                children: [
                    {path: 'info', component: UserInfoComponent},
                    {path: 'order-history', component: OrderHistoryComponent},
                ],
            },
            {path: "cart", component: CartComponent}, // trang giỏ hàng
        ],
    },
    {path: "admin-shop", component: AdminShopComponent}, // trang admin của shop
    {path: "sign-in", component: SignInComponent}, // trang đăng nhập
    {path: "sign-up", component: SignUpComponent}, // trang đăng ký
    //    
    {path: "**", component: NotFoundComponent} // route Not Found nên ở cuối cùng
];
