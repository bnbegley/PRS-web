import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '@model/request.class';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
url: string = 'http://localhost:49951/api/RequestsAPI/';
  constructor(
    private http: HttpClient
    ) {

  }
  
  list(): Observable<Request[]> {
    return this.http.get(this.url) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(this.url+id) as Observable<Request>;
  }
  create(request: Request): Observable<any> {
    return this.http.post(this.url ,request) as Observable<Request>;
}
edit(request:Request): Observable<any>{
  return this.http.put(this.url+request.id, request) as Observable<any>;
}
delete(id:number): Observable<any> {
      return this.http.delete(this.url+id);
}

setReview(id: number ) : Observable<any>{
  return this.http.get("http://localhost:49951/api/setReview/" + id);

}

setApproved(id: number) : Observable<any> {
  return this.http.get("http://localhost:49951/api/setApproved/" + id);
}

setRejected(id: number) : Observable<any> {
  return this.http.get("http://localhost:49951/api/setRejected/" + id);
}

getForReview():  Observable<any> {
  return this.http.get("http://localhost:49951/api/GetRequestsForReview");
}

}


