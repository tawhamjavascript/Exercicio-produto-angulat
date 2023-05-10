import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MantemProdutoComponent} from "./produto/mantem-produto/mantem-produto.component";
import { ListagemProdutoComponent } from './produto/listagem-produto/listagem-produto.component';
import { ListagemUsuarioComponent } from './usuario/listagem-usuario/listagem-usuario.component';
import {MantemUsuarioComponent} from './usuario/mantem-usuario/mantem-usuario.component';


const routes: Routes = [
  {
    path: 'cadastrousuario',
    component: MantemUsuarioComponent
  },
  
  {
    path: 'listagemusuarios',
    component: ListagemUsuarioComponent
  },
  {
    path: 'editausuario/:id',
    component: MantemUsuarioComponent
  },
  {
    path: "cadastroProduto",
    component: MantemProdutoComponent
  },
  {
    path: "editaProduto/:id",
    component: MantemProdutoComponent
  },
  {
    path: "listagemProduto",
    component: ListagemProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*

  
*/