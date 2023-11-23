import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfoubdComponent } from './pagenotfoubd.component';

describe('PagenotfoubdComponent', () => {
  let component: PagenotfoubdComponent;
  let fixture: ComponentFixture<PagenotfoubdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagenotfoubdComponent]
    });
    fixture = TestBed.createComponent(PagenotfoubdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
