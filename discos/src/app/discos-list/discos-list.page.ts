import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-discos-list',
  templateUrl: './discos-list.page.html',
  styleUrls: ['./discos-list.page.scss'],
})
export class DiscosListPage implements OnInit {

  discosData: any;

  constructor(public apiService: ApiService) { 
    this.discosData = [];
  }

  ngOnInit() {
    this.getAllDiscos();
  }

  getAllDiscos(){
    //Get lista de discos
    this.apiService.getList().subscribe(response => {
      this.discosData = response;
    })
  }

  delete(item) {
    //eliminar un disco
    this.apiService.deleteItem(item.id).subscribe(Response => {
      //Actualizar lista despues de eliminar
      this.getAllDiscos();
    });
  }
 
}
