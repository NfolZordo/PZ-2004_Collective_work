import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomarComponent } from './komar.component';

describe('KomarComponent', () => {
  let component: KomarComponent;
  let fixture: ComponentFixture<KomarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KomarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KomarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
