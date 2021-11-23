import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoItemsItemComponent } from './todo-items-item.component';

describe('TodoItemsItemComponent', () => {
  let component: TodoItemsItemComponent;
  let fixture: ComponentFixture<TodoItemsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoItemsItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoItemsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
