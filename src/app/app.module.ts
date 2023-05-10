import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProdutoModule } from './produto/produto.module';
import { LayoutModule } from './layout/layout.module';
import { UsuarioModule } from './usuario/usuario.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ProdutoModule,
    LayoutModule,
    UsuarioModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
