import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { ApiService } from '../services/api.service'
import { Disco } from '../models/disco'

@Component({
  selector: 'app-discos-edit',
  templateUrl: './discos-edit.page.html',
  styleUrls: ['./discos-edit.page.scss'],
})
export class DiscosEditPage implements OnInit {

  id: number;
  data: Disco; 

  constructor(
              public activatedRoute: ActivatedRoute,
              public router: Router,
              public apiService: ApiService
            ) 
  { 
    this.data = new Disco;
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params["id"];
    this.apiService.getItem(this.id).subscribe(response => {
      this.data = response;
    })
  }

  update() {
    //Actualizar apartir del id
    this.apiService.updateItem(this.id, this.data).subscribe(response => {
      this.router.navigate(['list']).then(() => {
        window.location.reload();
      });
    })
  }

}
