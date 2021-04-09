import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyFormComponent } from './hobby-form.component';

import { FormArray, FormGroup } from '@angular/forms';
describe('HobbyFormComponent', () => {
  let component: HobbyFormComponent;
  let fixture: ComponentFixture<HobbyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HobbyFormComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });



}
)