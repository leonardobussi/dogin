import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../service/api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dog: Array<[]>

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }

  toogle(){
    this.api.listar().subscribe((data: any)=> {
      console.log(data.message)
      this.dog = data.message 
    }),
    (error)=> {
      console.log(error)
    }
  }


}
