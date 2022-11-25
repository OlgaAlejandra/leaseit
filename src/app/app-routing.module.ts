import { ListOperationsComponent } from './components/list-operations/list-operations.component';
import { OutputComponent } from './components/output/output.component';
import { ListArrendadoresComponent } from './components/list-arrendadores/list-arrendadores.component';
import { ListActivosComponent } from './components/list-activos/list-activos.component';
import { InputComponent } from './components/input/input.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'signup-user', component: SignUpComponent},
  {path:'', component:LoginComponent},
  {path:'input-data/:id', component: InputComponent},
  {path:'home/:id', component: MenuComponent},
  {path:'list-activos', component:ListActivosComponent},
  {path:'list-arrendadores', component:ListArrendadoresComponent},
  {path:'list-operations/:id', component:ListOperationsComponent},
  {path:'final-output/:id', component:OutputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
