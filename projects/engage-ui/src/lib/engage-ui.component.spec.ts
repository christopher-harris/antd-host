import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngageUiComponent } from './engage-ui.component';

describe('EngageUiComponent', () => {
  let component: EngageUiComponent;
  let fixture: ComponentFixture<EngageUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EngageUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EngageUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
