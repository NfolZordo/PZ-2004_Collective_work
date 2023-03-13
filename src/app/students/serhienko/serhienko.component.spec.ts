import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerhienkoComponent } from './serhienko.component';

describe('SerhienkoComponent', () => {
  let component: SerhienkoComponent;
  let fixture: ComponentFixture<SerhienkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerhienkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerhienkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
