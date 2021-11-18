import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }
}
export interface Details {
  name: string;
  phone: string;
}