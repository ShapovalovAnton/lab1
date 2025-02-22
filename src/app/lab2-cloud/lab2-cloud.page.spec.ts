import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab2CloudPage } from './lab2-cloud.page';

describe('Lab2CloudPage', () => {
  let component: Lab2CloudPage;
  let fixture: ComponentFixture<Lab2CloudPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab2CloudPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
