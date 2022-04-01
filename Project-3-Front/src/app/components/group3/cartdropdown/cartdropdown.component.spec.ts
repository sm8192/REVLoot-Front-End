import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartdropdownComponent } from './cartdropdown.component';

describe('CartdropdownComponent', () => {
  let component: CartdropdownComponent;
  let fixture: ComponentFixture<CartdropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartdropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartdropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
