import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TsybenkoComponent } from './tsybenko.component';

describe('TsybenkoComponent', () => {
  let component: TsybenkoComponent;
  let fixture: ComponentFixture<TsybenkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TsybenkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TsybenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
