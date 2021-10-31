import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AllocationService } from '../services/allocation.service';
import { Router } from '@angular/router';

export class Allocation {
  constructor(
    public allocated_to: string,
    public item: string,
    public item_description: string,
    public project: string,
    public allocation_date: string,
    public po_no: string,
    public po_amount: string,
    public start_date: string,
    public end_date: string,
  ) { }
}

@Component({
  selector: 'app-add-allocation',
  templateUrl: './add-allocation.component.html',
  styleUrls: ['./add-allocation.component.scss']
})
export class AddAllocationComponent implements OnInit {

  @Output() allocationsdata = new EventEmitter<Allocation>();
  allocationData: any;
  
  public obj: any = {};
  title: string = "All Allocations";

  allocationForm = new FormGroup(
     {
    allocated_to: new FormControl(''),
    item: new FormControl(''),
    item_description: new FormControl(''),
    project: new FormControl(''),
    allocation_date: new FormControl(''),
    po_no: new FormControl(''),
    po_amount: new FormControl(''),
    start_date: new FormControl(''),
    end_date: new FormControl('')
     }
  )
  constructor(private allocationService: AllocationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
      this.allocationForm = this.fb.group(
          {
                 allocated_to: [""],
                 item:[""],
                 item_description: [""],
                 project: [""],
                 allocation_date: [""],
                 po_no: [""],
                 po_amount: [""],
                 start_date: [""],
                 end_date: [""]
          }

      );
  }
get f()
{
    return this.allocationForm.controls;
}
  onSubmit() {
       this.obj = { ...this.allocationForm!.value, ...this.obj };
    this.allocationForm.value;
    console.log(
      "LOG: LoginComponent -> onSubmit -> this.allocationForm.value",
      this.allocationForm.value
    );

    this.allocationsdata.emit(
        new Allocation(
             this.allocationForm.value.allocated_to ,
             this.allocationForm.value.item ,
             this.allocationForm.value.item_description ,
             this.allocationForm.value.project ,
             this.allocationForm.value.allocation_date ,
             this.allocationForm.value.po_no ,
             this.allocationForm.value.po_amount ,
             this.allocationForm.value.start_date,
             this.allocationForm.value.end_date
        )
    );


  }

  cancel() 
  {
      this.router.navigate(['./allocation']);
  }

  addAllocation(){
       this.allocationService.postAllocationdata(this.allocationForm.value).subscribe();
       console.warn(this.allocationForm.value);
  }
}
