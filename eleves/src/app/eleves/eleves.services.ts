import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class ElevesService {
    
   

    constructor(private http:Http) { } 
    getEleves = () => [
        {
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
}