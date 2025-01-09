import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: true, //agragamos
  imports:[IonicModule] //agregamos 
})
export class MenuPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
