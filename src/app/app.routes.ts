import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/shop-page/components/product-detail/product-detail.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductListComponent } from './components/shop-page/components/product-list/product-list.component';
import { ShopPageComponent } from './components/shop-page/shop-page.component';
import { ProfileUserComponent } from './components/profile-user/profile-user.component';
import { UserInfoComponent } from './components/profile-user/components/user-info/user-info.component';
import { OrderHistoryComponent } from './components/profile-user/components/order-history/order-history.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path: "product-list", component: ProductListComponent,
        children: [
            {path: "product-detail", component: ProductDetailComponent},
        ],
    },
    {path: "product-detail", component: ProductDetailComponent},
    {path: "shop-page", component: ShopPageComponent},
    {path: "profile-user", component: ProfileUserComponent,
        children: [
            {path: 'info', component: UserInfoComponent},
            {path: 'order-history', component: OrderHistoryComponent},
        ],
    },
    
    {path: "**", component: NotFoundComponent} // route Not Found nên ở cuối cùng
];
