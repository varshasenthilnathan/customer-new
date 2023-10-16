import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class CommonServiceTsService {
  colorSchemeService: any;

  constructor(public httpClient: HttpClient) {
    
   }

  createUser(obj: any):Observable<any> {
    const url = "https://petstore.swagger.io/v2/user"
    return this.httpClient.post(url, obj)
  }

  getAvailablePets():Observable<any>{
    const url = "https://petstore.swagger.io/v2/pet/findByStatus?status=available"
    return this.httpClient.get(url)
    
  }
    

}
