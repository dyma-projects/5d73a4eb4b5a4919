import { Component, OnInit } from '@angular/core';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-exercice3',
  templateUrl: './exercice3.component.html',
  styleUrls: ['./exercice3.component.css']
})
export class Exercice3Component implements OnInit {
  statut: boolean = true

 

  constructor() { }

  ngOnInit() {
  }


  inversetatut(){ 
    if (this.statut) {
      this.statut=false;
    } else {
      this.statut=true;
    }
  }
}
