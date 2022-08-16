import { infoList } from './../interface/interface';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  private URL:string = "http://localhost:3000/projeto";
  constructor(private http:HttpClient) { }

  getList():Observable<infoList[]>{
    return this.http.get<infoList[]>(this.URL);
  }
  postList(){
    //this.http.post(this.URL)
  }
  putList(){
    //this.http.put(this.URL+"/id")
  }
  deleteList(){
    //this.http.delete(this.URL+"/id")
  }
}
