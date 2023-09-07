import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit{
  menu : any;

  constructor(private http: HttpClient) {}

  show(card:any){
    card.displayed = !card.displayed;
  }

  ngOnInit() : void{
    const url: string = 'assets/menu.json';

    this.http.get(url).subscribe(
      (response) => {
        this.menu = response;
      }
    );
  }

}
