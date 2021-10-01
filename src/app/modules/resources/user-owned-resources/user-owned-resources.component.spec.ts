import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOwnedResourcesComponent } from './user-owned-resources.component';

describe('UserOwnedResourcesComponent', () => {
  let component: UserOwnedResourcesComponent;
  let fixture: ComponentFixture<UserOwnedResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOwnedResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOwnedResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
