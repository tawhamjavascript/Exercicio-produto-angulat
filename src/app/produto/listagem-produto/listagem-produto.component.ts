import { Component } from '@angular/core';
import {PRODUTOS} from "../../shared/modelo/PRODUTOS";
import {Produto} from "../../shared/modelo/produto";

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {
  produtos = PRODUTOS;

  delete(produtoDelete: Produto): void {
    const index = this.produtos.findIndex(produto =>
      produto.id === produtoDelete.id);
    this.produtos.splice(index, 1);

  }

}
