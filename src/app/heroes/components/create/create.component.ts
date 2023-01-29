import { Component, OnInit } from '@angular/core';
import {Store, StoreModule} from "@ngrx/store";
import {AppState} from "../../../app.state";
import {AddHero,editHero} from "../../actions/hero-action";
import {DataServiceService} from '../../../services/data-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  name='';
  description='';
  id=0;
  constructor(private store: Store<AppState>,private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe((data:any)=>{
      console.log(data);
      this.name = data.name;
      this.description = data.description;
      this.id = data.id;
    });
  }

  addHero(name: string, description: string) {
    this.store.dispatch(new AddHero({name: name, description: description}))
  }

  edit(name: string, description: string,id: number) {
    this.store.dispatch(new editHero({name: name, description: description,indexOfHeroToBeUpdated: id}))
    //this.store.select(this.getById(indexOfHeroToBeUpdated));
    this.id=0;
}

}
