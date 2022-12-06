import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerristerComponent } from './sellerrister.component';

describe('SellerristerComponent', () => {
  let component: SellerristerComponent;
  let fixture: ComponentFixture<SellerristerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellerristerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerristerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
