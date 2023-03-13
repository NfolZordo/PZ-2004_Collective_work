import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DementievComponent } from './dementiev.component';

describe('DementievComponent', () => {
  let component: DementievComponent;
  let fixture: ComponentFixture<DementievComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DementievComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DementievComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
