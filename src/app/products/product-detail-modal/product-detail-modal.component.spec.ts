import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailModalComponent } from './product-detail-modal.component';

describe('ProductDetailDialogComponent', () => {
  let component: ProductDetailModalComponent;
  let fixture: ComponentFixture<ProductDetailModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
