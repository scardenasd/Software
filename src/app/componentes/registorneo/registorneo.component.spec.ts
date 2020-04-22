import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistorneoComponent } from './registorneo.component';

describe('RegistorneoComponent', () => {
  let component: RegistorneoComponent;
  let fixture: ComponentFixture<RegistorneoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistorneoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistorneoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
