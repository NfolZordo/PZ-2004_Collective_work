import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrichevskyiComponent } from './strichevskyi.component';

describe('StrichevskyiComponent', () => {
  let component: StrichevskyiComponent;
  let fixture: ComponentFixture<StrichevskyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrichevskyiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrichevskyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
