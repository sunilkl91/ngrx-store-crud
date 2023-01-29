// hero-reducer.ts
import {Hero} from "../models/hero";
import {ADD_HERO, AddHero, REMOVE_HERO, RemoveHero,editHero, EDIT_HERO} from "../actions/hero-action";
import {Action, INIT} from "@ngrx/store";

const initialState : Hero[] = [{
  name: "My Initial Hero",
  description: "This is my Initial Hero"
}]

export function heroReducer (state : Hero[] = [], action: Action): Hero[] {
  switch(action.type) {
    case ADD_HERO:
      return [...state, (action as AddHero).heroToBeAdded]
    case REMOVE_HERO:
      const newState = [...state]
      newState.splice((action as RemoveHero).indexOfHeroToBeRemoved,1)
      return newState
    case EDIT_HERO:
      let editState = JSON.parse(JSON.stringify(state));
    //  let data = editState.splice((action as editHero).heroToBeAdded.indexOfHeroToBeUpdated,1)
   //   console.log(data);
     // data[0].name = (action as editHero).heroToBeAdded.name;
     // data[0].description = (action as editHero).heroToBeAdded.description;
     console.log((action as editHero).heroToBeAdded.name);
     editState[(action as editHero).heroToBeAdded.indexOfHeroToBeUpdated].name = (action as editHero).heroToBeAdded.name;
      editState[(action as editHero).heroToBeAdded.indexOfHeroToBeUpdated].description = (action as editHero).heroToBeAdded.description;
      return [...editState]
    case INIT:
      return initialState
    default:
      throw Error(`The action type "${action.type}" is not implemented`)
  }
}
