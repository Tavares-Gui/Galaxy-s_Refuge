import { ClientData } from './clientData';
import { Injectable } from '@angular/core';
import { ClientDataLogin } from './clientDataLogin';
import { ApiClientService } from './apiClient.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  constructor(private http: ApiClientService) { }

  register(data: ClientData)
  {
    this.http.post('user/register', data)
      .subscribe(response => console.log(response))
  }

  login(data: ClientDataLogin, callback: any)
  {
    this.http.post('user/login', data)
      .subscribe(
        response => {
          callback(response)
        },
        error => { 
          callback(null)
        })
  }
}