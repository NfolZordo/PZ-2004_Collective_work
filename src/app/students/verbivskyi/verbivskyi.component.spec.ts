import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbivskyiComponent } from './verbivskyi.component';

describe('VerbivskyiComponent', () => {
  let component: VerbivskyiComponent;
  let fixture: ComponentFixture<VerbivskyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerbivskyiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerbivskyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
