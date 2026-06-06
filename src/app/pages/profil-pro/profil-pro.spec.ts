import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPro } from './profil-pro';

describe('ProfilPro', () => {
  let component: ProfilPro;
  let fixture: ComponentFixture<ProfilPro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilPro],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfilPro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
