import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipregisComponent } from './equipregis.component';

describe('EquipregisComponent', () => {
  let component: EquipregisComponent;
  let fixture: ComponentFixture<EquipregisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipregisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipregisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
