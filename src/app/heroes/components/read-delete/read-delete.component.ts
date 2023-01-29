// src/app/heroes/components/read-delete.component.ts
import { Component, OnInit } from '@angular/core';
import {Hero} from "../../models/hero";
import {Observable, of} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../../app.state"
import {RemoveHero, editHero} from "../../actions/hero-action";
import {DataServiceService} from '../../../services/data-service.service';

@Component({
  selector: 'app-read-delete',
  templateUrl: './read-delete.component.html',
  styleUrls: ['./read-delete.component.scss']
})
export class ReadDeleteComponent implements OnInit {

  heroes: Observable<Hero[]>;

  constructor(private store: Store<AppState>,private dataService: DataServiceService) {
    this.heroes = this.store.select("heroes")
  }

  deleteHero(indexOfHeroToBeRemoved: number) {
    this.store.dispatch(new RemoveHero(indexOfHeroToBeRemoved))
  }

  getById(indexOfHeroToBeUpdated: number):any {
    this.heroes.subscribe((val:any)=>{
      const data = [...val];
      let arr = data.splice(indexOfHeroToBeUpdated,1);
    
      const sendData = {
        name: arr[0].name,
        description: arr[0].description,
        id: indexOfHeroToBeUpdated
      }
    //  arr = [...arr,{id: indexOfHeroToBeUpdated}]
      this.dataService.setData(sendData);
     
    });
  }

  ngOnInit(): void {
  }

}
