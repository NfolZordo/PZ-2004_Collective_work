import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutsenkoComponent } from './kutsenko.component';

describe('KutsenkoComponent', () => {
  let component: KutsenkoComponent;
  let fixture: ComponentFixture<KutsenkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KutsenkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KutsenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
