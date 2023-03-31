import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatigoryOfProductsComponent } from './catigory-of-products.component';

describe('CatigoryOfProductsComponent', () => {
  let component: CatigoryOfProductsComponent;
  let fixture: ComponentFixture<CatigoryOfProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatigoryOfProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatigoryOfProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
