import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplexeFormComponent } from './complexe-form.component';

describe('ComplexeFormComponent', () => {
  let component: ComplexeFormComponent;
  let fixture: ComponentFixture<ComplexeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplexeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplexeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
