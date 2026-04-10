import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPreferences } from './register-preferences';

describe('RegisterPreferences', () => {
  let component: RegisterPreferences;
  let fixture: ComponentFixture<RegisterPreferences>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPreferences],
    }).compileComponents();

    fixture = TestBed.createComponent(RegisterPreferences);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
