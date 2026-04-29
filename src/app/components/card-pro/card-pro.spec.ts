import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPro } from './card-pro';

describe('CardPro', () => {
  let component: CardPro;
  let fixture: ComponentFixture<CardPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPro],
    }).compileComponents();

    fixture = TestBed.createComponent(CardPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
