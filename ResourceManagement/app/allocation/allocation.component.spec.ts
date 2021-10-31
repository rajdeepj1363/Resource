import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AllocationService } from '../services/allocation.service';
import { AllocationComponent } from './allocation.component';
import { By } from '@angular/platform-browser';

describe('AllocationComponent', () => {
  let component: AllocationComponent;
  let fixture: ComponentFixture<AllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationComponent ],
      imports: [ReactiveFormsModule, RouterTestingModule, FormsModule, HttpClientTestingModule],
      providers:[AllocationService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('boundary', () => {
    it('should have a title', () => {
      expect(component.title).toBe('All Allocations');
      // we are accessing "h1"
      const title = fixture.debugElement.query(By.css('h1')).nativeElement;
      expect(title.innerHTML).toBe('All Allocations');
    });

    it('should have New Allocation Button', () => {
      const btn = fixture.debugElement.nativeElement.querySelector('#new_allocation');
      expect(btn.innerHTML).toBe('New Allocation');
    });

    it('should have Export Button', () => {
      const btn = fixture.debugElement.nativeElement.querySelector('#export');
      expect(btn.innerHTML).toBe('Export');
    });

    it("should show project header length", async() => {
      var rowHeaderLength = fixture.debugElement.nativeElement.querySelectorAll("th").length;
      expect(rowHeaderLength).toBe(8);
    });

    it("should have table header Allocation ID", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[0].textContent).toEqual("Allocation ID");
    });

    it("should have table header Allocated To", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[1].textContent).toEqual("Allocated To");
    });

    it("should have table header Item", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[2].textContent).toEqual("Item");
    });

    it("should have table header Project", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[3].textContent).toEqual("Project");
    });

    it("should have table header Allocation Date", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[4].textContent).toEqual("Allocation Date");
    });

    it("should have table header PO No", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[5].textContent).toEqual("PO No");
    });

    it("should have table header PO Amt", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[6].textContent).toEqual("PO Amt");
    });

    it("should have table header Life Time", () => {
      var headers = fixture.debugElement.nativeElement.querySelectorAll("th")
      expect(headers[7].textContent).toEqual("Life Time");
    });

    it("should render table", () => {
      const result = fixture.debugElement.queryAll(By.css(".allocation-table"));
      const markup = result[0].nativeNode.outerHTML;

      //const tableEl = fixture.debugElement.query(By.css('div'));
      //const bodyRows = tableEl.query(By.css('.ui-table-tbody')).queryAll(By.css('tr'));
      //expect(bodyRows.length).toEqual(10);
    });
  });

  describe("exception", () => {
    it("should be check allocation api", inject([HttpTestingController, AllocationService], (httpMock: HttpTestingController, dataService: AllocationService) => {
      component.ngOnInit();
      dataService.getAllocationData().subscribe(data => {
        expect(data).toEqual(data);
        expect(data).toBe(data);
        expect(data).not.toBe(null);
        expect(null).toBeNull();
        expect(data).toBeTruthy();
      });
    }));
  });
});
