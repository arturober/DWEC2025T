import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadButton } from './load-button';

describe('LoadButton', () => {
  let component: LoadButton;
  let fixture: ComponentFixture<LoadButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadButton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
