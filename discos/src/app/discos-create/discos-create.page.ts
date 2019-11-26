import { Component, OnInit } from '@angular/core';
import { Disco } from '../models/disco';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discos-create',
  templateUrl: './discos-create.page.html',
  styleUrls: ['./discos-create.page.scss'],
})
export class DiscosCreatePage implements OnInit {

  data: Disco
  discosCount: number

  constructor(public apiService: ApiService,
              public router: Router) 
  { 
    this.data = new Disco();
    this.discosCount = 0;
  }

  ngOnInit() {
    this.countElements();
  }

  countElements() {
    this.apiService.getList().subscribe(response => {
    this.discosCount = Object.keys(response).length;
    });
  }

  submitForm() {
    //console.log(this.discosCount);
    this.data.id = this.discosCount;
    this.apiService.createItem(this.data).subscribe((response) => {
      this.router.navigate(['list']).then(() => {
        window.location.reload();
      });
    });
  }

}
