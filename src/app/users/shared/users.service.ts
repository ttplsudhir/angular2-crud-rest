import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "";

  constructor(private http: Http) { 
        }
  getUsers(){
    this.url = localStorage.hostUrl;
    this.url = this.url+'users';
    console.log(this.url);
    return this.http.get(this.url)
      .map(res => res.json());
     
  }

  getUser(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res.json());
  }

  addUser(user){
     this.url = localStorage.hostUrl;
     this.url = this.url+'/posts';
     return this.http.post(this.url, JSON.stringify(user))
     .map(res => res.json());
  }

  updateUser(user){
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res.json());
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res.json());
  }

  private getUserUrl(id){
    return this.url + "/" + id;
  }
}
