import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductFour } from './product-four';

describe('ProductFour', () => {
  let component: ProductFour;
  let fixture: ComponentFixture<ProductFour>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductFour],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductFour);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
