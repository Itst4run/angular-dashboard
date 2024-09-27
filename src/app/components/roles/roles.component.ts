import { HttpClient } from '@angular/common/http';
import { Component,inject,OnInit } from '@angular/core';
import { APIResponseModel, Irole } from '../../model/class/interface/role';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [NgFor],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent implements OnInit {


http = inject(HttpClient)

roleList : Irole[]=[];

ngOnInit(): void {
  this.getAllRoles()
}

getAllRoles() {
this.http.get<APIResponseModel>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((res:APIResponseModel)=>{
this.roleList= res.data;
// console.log(this.roleList)
})
}

}
