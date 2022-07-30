import { RouterModule, Route } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';
import { TodoViewComponent } from './components/todo-view/todo-view.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Route[] = [
  {path:'' , component:UserListComponent},
  {path:'user-details',component:UserDetailsComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
