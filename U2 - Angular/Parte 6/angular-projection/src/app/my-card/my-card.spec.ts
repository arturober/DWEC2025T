import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCard } from './my-card';

describe('MyCard', () => {
  let component: MyCard;
  let fixture: ComponentFixture<MyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
