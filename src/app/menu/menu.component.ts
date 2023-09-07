import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu = [
    ['Kouskous', 'Tunisian', 'lorem ipsum',false],
    ['Pasta', 'Itialian', 'lorem ipsum',false],
    ['Ma9rouna bel chocolat', 'Kerkennian', 'lorem ipsum',false],
    ['Mlou5ya bel 7out', 'Monastiri', 'lorem ipsum',false],
    ['Slata naya', 'Ben Arous', 'lorem ipsum',false],
    ['M5are9 w zlayba', 'ajeb', 'lorem ipsum',false]
  ]

  show(card:any){
    card[3] = !card[3];
  }

}
