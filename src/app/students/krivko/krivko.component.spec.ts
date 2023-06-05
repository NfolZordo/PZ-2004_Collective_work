import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrivkoComponent } from './krivko.component';

describe('KrivkoComponent', () => {
  let component: KrivkoComponent;
  let fixture: ComponentFixture<KrivkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrivkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrivkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
