import {Injectable} from '@angular/core';
import {Location} from '@angular/common'

@Injectable({
  providedIn: 'root'
})
export class GoBackService {

  constructor(private _location: Location) {}
  back() {
    this._location.back();
  }
}
