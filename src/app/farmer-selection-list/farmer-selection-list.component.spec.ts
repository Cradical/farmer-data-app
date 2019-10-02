import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmerSelectionListComponent } from './farmer-selection-list.component';

describe('FarmerSelectionListComponent', () => {
  let component: FarmerSelectionListComponent;
  let fixture: ComponentFixture<FarmerSelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerSelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FarmerSelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
