import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPurchasesListComponent } from './user-purchases-list.component';

describe('UserPurchasesListComponent', () => {
  let component: UserPurchasesListComponent;
  let fixture: ComponentFixture<UserPurchasesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPurchasesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPurchasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
