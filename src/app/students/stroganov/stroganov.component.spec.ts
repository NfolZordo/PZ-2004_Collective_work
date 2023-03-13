import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StroganovComponent } from './stroganov.component';

describe('StroganovComponent', () => {
  let component: StroganovComponent;
  let fixture: ComponentFixture<StroganovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StroganovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StroganovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
