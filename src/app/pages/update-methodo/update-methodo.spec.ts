import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMethodo } from './update-methodo';

describe('UpdateMethodo', () => {
  let component: UpdateMethodo;
  let fixture: ComponentFixture<UpdateMethodo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateMethodo],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateMethodo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
