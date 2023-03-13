import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabichComponent } from './babich.component';

describe('BabichComponent', () => {
  let component: BabichComponent;
  let fixture: ComponentFixture<BabichComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabichComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
