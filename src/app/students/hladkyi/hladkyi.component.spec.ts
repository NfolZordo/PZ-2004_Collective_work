import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HladkyiComponent } from './hladkyi.component';

describe('HladkyiComponent', () => {
  let component: HladkyiComponent;
  let fixture: ComponentFixture<HladkyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HladkyiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HladkyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
