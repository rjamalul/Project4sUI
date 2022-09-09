import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterModalComponent } from './enter-modal.component';

describe('EnterModalComponent', () => {
  let component: EnterModalComponent;
  let fixture: ComponentFixture<EnterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
