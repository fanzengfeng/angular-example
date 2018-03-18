import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
@Injectable()
export class UsersService {
  userActivted = new Subject();
  constructor() { }

}
