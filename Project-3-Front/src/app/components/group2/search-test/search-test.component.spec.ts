import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTestComponent } from './search-test.component';

describe('SearchTestComponent', () => {
  let component: SearchTestComponent;
  let fixture: ComponentFixture<SearchTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
