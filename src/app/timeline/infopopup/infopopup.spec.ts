import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPopup } from './infopopup';

describe('Infopopup', () => {
  let component: InfoPopup;
  let fixture: ComponentFixture<InfoPopup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoPopup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
