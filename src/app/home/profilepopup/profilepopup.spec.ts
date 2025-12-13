import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Profilepopup } from './profilepopup';

describe('Profilepopup', () => {
  let component: Profilepopup;
  let fixture: ComponentFixture<Profilepopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Profilepopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Profilepopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
