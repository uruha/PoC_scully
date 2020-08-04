import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'hoge', loadChildren: () => import('./hoge/hoge.module').then(m => m.HogeModule) },
  { path: 'foo', loadChildren: () => import('./foo/foo.module').then(m => m.FooModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
