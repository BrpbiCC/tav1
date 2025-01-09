import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:true,
  imports:[IonicModule],
})
export class LoginPage implements OnInit {
  diccionario ={
    user:"",
    pw:""
  }
  constructor(private aRoute:ActivatedRoute) { }

  ngOnInit() {

    this.aRoute.queryParams.subscribe(params => {
      this.diccionario.user = params ['data1']
      this.diccionario.pw = params ['data2']

    });
  }//fin ngOnInit

}