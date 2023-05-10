import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantemProdutoComponent } from './mantem-produto.component';

describe('MantemProdutoComponent', () => {
  let component: MantemProdutoComponent;
  let fixture: ComponentFixture<MantemProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MantemProdutoComponent]
    });
    fixture = TestBed.createComponent(MantemProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
