import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiabchykComponent } from './riabchyk.component';

describe('RiabchykComponent', () => {
  let component: RiabchykComponent;
  let fixture: ComponentFixture<RiabchykComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiabchykComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RiabchykComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
