import { async, fakeAsync, ComponentFixture, TestBed, DebugElement, inject } from '@angular/core/testing';
import { GridComponent } from './grid.component';
import { ActionsService } from '../services/actions.service';
import { Subject } from 'rxjs/Subject';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('GridComponent', () => {
  let component: GridComponent;
  let fixture: ComponentFixture<GridComponent>;
  let de: DebugElement;
  let element: HTMLElement;
  let actionsService: ActionsService;
  let actionsServiceStub: Partial<ActionsService> = {
    actionsList: [37];
    playMethodCallSource: new Subject<any>(),
    playMethodCalled$: (new Subject<any>()).asObservable(),
    insertActions: () => { }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GridComponent],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: ActionsService, useValue: actionsServiceStub }]
    });
    actionsService = TestBed.get(ActionsService);
    fixture = TestBed.createComponent(GridComponent);
    component = fixture.componentInstance;
  }));

  it('toArray should return array of n number', () => {
    expect(component.toArray(3)).toEqual([0, 1, 2]);
  });

  it('should calculate coordinates', () => {
    let actionsList = component.calculateCoordinates();
    expect(actionsList.length).toEqual(1);
    expect(actionsList).toEqual([[0, 0]]);
  });

  it('should not display the grid unless the button is clicked', () => {
    element = fixture.nativeElement;
    expect(element.innerHTML).not.toContain("table");
  });

  it('should check if number in range', () => {
    expect(component.inRange(10)).toBe(true);
    expect(component.inRange(401)).toBe(false);
  });
});
