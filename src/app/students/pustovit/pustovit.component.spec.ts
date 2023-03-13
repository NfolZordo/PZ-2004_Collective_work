import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PustovitComponent } from './pustovit.component';

describe('PustovitComponent', () => {
  let component: PustovitComponent;
  let fixture: ComponentFixture<PustovitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PustovitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PustovitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
