import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReginscripComponent } from './reginscrip.component';

describe('ReginscripComponent', () => {
  let component: ReginscripComponent;
  let fixture: ComponentFixture<ReginscripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReginscripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReginscripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
