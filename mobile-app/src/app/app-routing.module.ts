import { CenyesPage } from './cenyes/cenyes.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cen',
    loadChildren: () => import('./cen/cen.module').then( m => m.CenPageModule)
  },
  {
    path: 'plian',
    loadChildren: () => import('./plian/plian.module').then( m => m.PlianPageModule)
  },
  {
    path: 'setup',
    loadChildren: () => import('./setup/setup.module').then( m => m.SetupPageModule)
  },
  {
    path: 'cenyes',
    loadChildren: () => import('./cenyes/cenyes.module').then( m => m.CenyesPageModule)
  },
  {
    path: 'h',
    loadChildren: () => import('./h/h.module').then( m => m.HPageModule)
  },
  {
    path: 'lomax',
    loadChildren: () => import('./lomax/lomax.module').then( m => m.LomaxPageModule)
  },
  {
    path: 'yang',
    loadChildren: () => import('./yang/yang.module').then( m => m.YangPageModule)
  },
  {
    path: 'toaisia',
    loadChildren: () => import('./toaisia/toaisia.module').then( m => m.ToaisiaPageModule)
  },
  {
    path: 'kreangyon',
    loadChildren: () => import('./kreangyon/kreangyon.module').then( m => m.KreangyonPageModule)
  },
  {
    path: 'puanmalai',
    loadChildren: () => import('./puanmalai/puanmalai.module').then( m => m.PuanmalaiPageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'detail2',
    loadChildren: () => import('./detail2/detail2.module').then( m => m.Detail2PageModule)
  },
  {
    path: 'detail3',
    loadChildren: () => import('./detail3/detail3.module').then( m => m.Detail3PageModule)
  },
  {
    path: 'detail4',
    loadChildren: () => import('./detail4/detail4.module').then( m => m.Detail4PageModule)
  },
  {
    path: 'detail5',
    loadChildren: () => import('./detail5/detail5.module').then( m => m.Detail5PageModule)
  },
  {
    path: 'confirmbuy',
    loadChildren: () => import('./confirmbuy/confirmbuy.module').then( m => m.ConfirmbuyPageModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./security/security.module').then( m => m.SecurityPageModule)
  },
  {
    path: 'myadd',
    loadChildren: () => import('./myadd/myadd.module').then( m => m.MyaddPageModule)
  },
  {
    path: 'detailpuanmalai',
    loadChildren: () => import('./detailpuanmalai/detailpuanmalai.module').then( m => m.DetailpuanmalaiPageModule)
  },
  {
    path: 'buysucces',
    loadChildren: () => import('./buysucces/buysucces.module').then( m => m.BuysuccesPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },  {
    path: 'forgot2',
    loadChildren: () => import('./forgot2/forgot2.module').then( m => m.Forgot2PageModule)
  },






];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
