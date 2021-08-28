import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatusComponent } from './contatus.component';

describe('ContatusComponent', () => {
  let component: ContatusComponent;
  let fixture: ComponentFixture<ContatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
