import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PianistComponent } from './pianist.component';

describe('PianistComponent', () => {
  let component: PianistComponent;
  let fixture: ComponentFixture<PianistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PianistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PianistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
