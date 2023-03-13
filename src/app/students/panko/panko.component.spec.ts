import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PankoComponent } from './panko.component';

describe('PankoComponent', () => {
  let component: PankoComponent;
  let fixture: ComponentFixture<PankoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PankoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PankoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
