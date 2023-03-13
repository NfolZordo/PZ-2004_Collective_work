import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZadorozhnyiComponent } from './zadorozhnyi.component';

describe('ZadorozhnyiComponent', () => {
  let component: ZadorozhnyiComponent;
  let fixture: ComponentFixture<ZadorozhnyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZadorozhnyiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZadorozhnyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
