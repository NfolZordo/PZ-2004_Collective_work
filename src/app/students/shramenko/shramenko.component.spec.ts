import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShramenkoComponent } from './shramenko.component';

describe('ShramenkoComponent', () => {
  let component: ShramenkoComponent;
  let fixture: ComponentFixture<ShramenkoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShramenkoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShramenkoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
