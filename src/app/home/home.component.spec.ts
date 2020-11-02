import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],

      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should render My chatbot title', () => {
    const fx = TestBed.createComponent(HomeComponent);
    fx.detectChanges();
    const compiled = fx.nativeElement;
    expect(compiled.querySelector('.nav-left').textContent).toContain('My Chatbots');
  });
  it(' Display card must return true by default', () => {
    expect(component.displayCards).toBe(true);
  });

});
