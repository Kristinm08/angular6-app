import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionsComponent } from './actions.component';
import { ActionsService } from '../services/actions.service';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;
  let actionsService: ActionsService;
  let actionsServiceStub: Partial<ActionsService> = {
    insertActions:() => {}
  }
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsComponent ],
      providers:    [ {provide: ActionsService, useValue: actionsServiceStub } ]
    });
   }); 
   
   beforeEach(() => {
	actionsService = TestBed.get(ActionsService);
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
   });
   
   it('should create', () => {
    expect(component).toBeTruthy();
   });
  
   it('should called addAction', () => {
    const insertActions = spyOn(actionsService, 'insertActions');
	component.addAction();
    expect(insertActions).toHaveBeenCalled();
  });
});
