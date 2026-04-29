import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheTech } from './fiche-tech';

describe('FicheTech', () => {
  let component: FicheTech;
  let fixture: ComponentFixture<FicheTech>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheTech],
    }).compileComponents();

    fixture = TestBed.createComponent(FicheTech);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
