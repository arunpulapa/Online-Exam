import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportExamsComponent } from './export-exams.component';

describe('ExportExamsComponent', () => {
  let component: ExportExamsComponent;
  let fixture: ComponentFixture<ExportExamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExportExamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportExamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
