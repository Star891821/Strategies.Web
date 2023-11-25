import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyformComponent } from './strategyform.component';

describe('StrategyformComponent', () => {
  let component: StrategyformComponent;
  let fixture: ComponentFixture<StrategyformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrategyformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StrategyformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
