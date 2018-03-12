import { Component, OnInit} from '@angular/core';
import { ElevesService } from './eleves.services';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {

  eleves = [{
    id : 1,
    nom : 'ons',
    prenom : 'chouaib'
  },
  {
    id : 2,
    nom : 'kak',
    prenom : 'kaka'
  }
];

constructor(private Eleves: ElevesService) { }
elevess = this.Eleves.getEleves();
  ngOnInit() {
  }

}