import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerachBarComponent } from './serach-bar.component';

describe('SerachBarComponent', () => {
  let component: SerachBarComponent;
  let fixture: ComponentFixture<SerachBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SerachBarComponent]
    });
    fixture = TestBed.createComponent(SerachBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
