import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllResourcesListComponent } from './all-resources-list.component';

describe('AllResourcesListComponent', () => {
  let component: AllResourcesListComponent;
  let fixture: ComponentFixture<AllResourcesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllResourcesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
