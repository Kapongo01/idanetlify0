import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MazozoComponent } from './mazozo.component';

describe('MazozoComponent', () => {
  let component: MazozoComponent;
  let fixture: ComponentFixture<MazozoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MazozoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MazozoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
