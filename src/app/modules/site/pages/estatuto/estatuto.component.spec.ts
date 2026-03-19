import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstatutoComponent } from './estatuto.component';

describe('EstatutoComponent', () => {
  let component: EstatutoComponent;
  let fixture: ComponentFixture<EstatutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstatutoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EstatutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
