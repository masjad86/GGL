import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingNotificationComponent } from './booking-notification.component';

describe('BookingNotificationComponent', () => {
  let component: BookingNotificationComponent;
  let fixture: ComponentFixture<BookingNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
