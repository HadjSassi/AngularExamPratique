import {Component} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menu = [
    ['Kouskous', 'Tunisian', 'lorem ipsum'],
    ['Pasta', 'Itialian', 'lorem ipsum'],
    ['Ma9rouna bel chocolat', 'Kerkennian', 'lorem ipsum'],
    ['Mlou5ya bel 7out', 'Monastiri', 'lorem ipsum'],
    ['Slata naya', 'Ben Arous', 'lorem ipsum'],
    ['M5are9 w zlayba', 'ajeb', 'lorem ipsum']
  ]
}
