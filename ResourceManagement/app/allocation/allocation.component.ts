import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  selector: 'app-allocation',
  templateUrl: './allocation.component.html',
  styleUrls: ['./allocation.component.scss']
})
export class AllocationComponent implements OnInit {
  @Output() allocationsdata = new EventEmitter<Allocation>();
  allocationData: any;
  allocationForm!: FormGroup;
  public obj: any = {};
  title: string = "All Allocations";

  constructor(private allocationService: AllocationService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(){
      this.getAllocation();
  }

  getAllocation()
  {
    this.allocationService.getAllocationData().subscribe(data=>{
        console.log(data);
        this.allocationData=data;
    })
  }
  openAllocation() {
      this.router.navigate(['/add-allocation']);
      
  }

  export() {
  }
}