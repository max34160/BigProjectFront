import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifPro } from './verif-pro';

describe('VerifPro', () => {
  let component: VerifPro;
  let fixture: ComponentFixture<VerifPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifPro],
    }).compileComponents();

    fixture = TestBed.createComponent(VerifPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
