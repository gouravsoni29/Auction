import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CutomdashComponent } from './cutomdash.component';

describe('CutomdashComponent', () => {
  let component: CutomdashComponent;
  let fixture: ComponentFixture<CutomdashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CutomdashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CutomdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
