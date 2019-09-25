import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestLine } from '@model/requestline.class';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestLineService {
  url: string = 'http://localhost:49951/api/RequestLinesAPI/'

  constructor(private http: HttpClient) { }
      
list(): Observable<RequestLine[]> {
  return this.http.get(this.url) as Observable<RequestLine[]>;
}
get(id: number): Observable<RequestLine> {
  return this.http.get(this.url+id) as Observable<RequestLine>;
}
create(requestline: RequestLine): Observable<any> {
  return this.http.post(this.url ,requestline) as Observable<RequestLine>;
}
edit(requestline:RequestLine): Observable<any>{
return this.http.put(this.url+requestline.id, requestline) as Observable<any>;
}
delete(id:number): Observable<any> {
    return this.http.delete(this.url+id);
}
}
