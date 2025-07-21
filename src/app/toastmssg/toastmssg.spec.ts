import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toastmssg } from './toastmssg';

describe('Toastmssg', () => {
  let component: Toastmssg;
  let fixture: ComponentFixture<Toastmssg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toastmssg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Toastmssg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
