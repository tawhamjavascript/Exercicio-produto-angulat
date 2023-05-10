import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ListagemProdutoComponent } from './listagem-produto/listagem-produto.component';
import { MantemProdutoComponent } from './mantem-produto/mantem-produto.component';
import { MatCardModule } from '@angular/material/card'
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ListagemProdutoComponent,
    MantemProdutoComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    FlexModule,
    NgOptimizedImage,
    MatIconModule,
    RouterLink,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,

  ],
  exports: [
    ListagemProdutoComponent,
    MantemProdutoComponent
  ]
})
export class ProdutoModule { }
