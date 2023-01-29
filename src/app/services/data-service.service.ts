import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  heroData= new Subject<any>();

  constructor() { }

  public setData(arr:any) {
      this.heroData.next(arr);
  }

  public getData(): Observable<any> {
    return this.heroData.asObservable();
  }
}
