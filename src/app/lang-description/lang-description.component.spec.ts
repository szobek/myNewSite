import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangDescriptionComponent } from './lang-description.component';

describe('LangDescriptionComponent', () => {
  let component: LangDescriptionComponent;
  let fixture: ComponentFixture<LangDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LangDescriptionComponent]
    });
    fixture = TestBed.createComponent(LangDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
