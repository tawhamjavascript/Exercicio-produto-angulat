import { Component } from '@angular/core';
import {Produto} from "../../shared/modelo/produto";
import {ActivatedRoute, Router} from "@angular/router";
import {PRODUTOS} from "../../shared/modelo/PRODUTOS";


@Component({
  selector: 'app-mantem-produto',
  templateUrl: './mantem-produto.component.html',
  styleUrls: ['./mantem-produto.component.css']
})
export class MantemProdutoComponent {
  productSuport: Produto;
  isRegister = true;
  nameButtonSuport = 'Cadastrar';
  products = PRODUTOS
  constructor(private currentRoute: ActivatedRoute, private router: Router) {
    this.productSuport = new Produto()
    const idForEdition = this.currentRoute.snapshot.paramMap.get('id');
    if (idForEdition) {
      const foundedProduct = this.products.find(product => product.id === Number(idForEdition));
      if (foundedProduct) {
        this.isRegister = false;
        this.nameButtonSuport = "Salvar";
        this.productSuport = foundedProduct;

      }
    }
    else {
      this.nameButtonSuport = "Cadastrar";
    }
  }
  manter(): void {
    if (this.isRegister && this.productSuport) {
      this.products.push(this.productSuport);
    }
    this.productSuport = new Produto();
    this.nameButtonSuport = 'Cadastrar';
    this.router.navigate(['listagemProduto'])
  }

}
