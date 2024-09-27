import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { APIResponseModel } from '../../model/class/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];

  clientservice = inject(ClientService)

  ngOnInit(): void {
    this.loadClient();
  }

  loadClient() {
    this.clientservice.getAllClients().subscribe((res: APIResponseModel) => {
      this.clientList = res.data;
    })
  }

  onSaveClient() {
    this.clientservice.addUpdate(this.clientObj).subscribe((res: APIResponseModel) => {
      if (res.result) {
        alert("Client created success");
        this.loadClient();
        this.clientObj = new Client();


      } else {
        alert(res.message)
      }
    })
  }

  onEdit(data:Client){
    this.clientObj=data;

  }


  onDelete(id: number) {
    const isDelete = confirm("Are you sure want to delete");

    if (isDelete) {
      this.clientservice.deleteClientById(id).subscribe((res: APIResponseModel) => {
        if (res.result) {
          alert("Client deleted success");
          this.loadClient();
        } else {
          alert(res.message)
        }
      })
    } else {

    }
  }
}
