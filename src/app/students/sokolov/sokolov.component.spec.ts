import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SokolovComponent } from './sokolov.component';

describe('SokolovComponent', () => {
  let component: SokolovComponent;
  let fixture: ComponentFixture<SokolovComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SokolovComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SokolovComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
