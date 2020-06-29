import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtileComponent } from './viewtile.component';

describe('ViewtileComponent', () => {
  let component: ViewtileComponent;
  let fixture: ComponentFixture<ViewtileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewtileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewtileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
