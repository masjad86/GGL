import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventPortfolioComponent } from './event-portfolio.component';

describe('EventPortfolioComponent', () => {
  let component: EventPortfolioComponent;
  let fixture: ComponentFixture<EventPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventPortfolioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
