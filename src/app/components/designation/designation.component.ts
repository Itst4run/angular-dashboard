import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service';
import { IDesignation } from '../../model/class/interface/role';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

 designationList: IDesignation[]=[];

loader:boolean=true;

  masterService=inject(MasterService);
  
  ngOnInit(): void {
    this.masterService.getDesignations().subscribe((res)=>{
       this.designationList=res.data;
       this.loader=false;
    },
    (error)=>{console.log("network error",error)
      this.loader=false;

    }
  )
  }

}
