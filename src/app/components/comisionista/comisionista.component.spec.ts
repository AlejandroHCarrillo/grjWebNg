import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComisionistaComponent } from './comisionista.component';

describe('ComisionistaComponent', () => {
  let component: ComisionistaComponent;
  let fixture: ComponentFixture<ComisionistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComisionistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComisionistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
