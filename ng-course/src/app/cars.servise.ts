import {Injectable} from "@angular/core";
import {HttpClient, HttpClientJsonpModule, HttpClientModule, HttpClientXsrfModule} from "@angular/common/http"
import {Observable, ObservableInput} from "rxjs";

@Injectable()

export class CarsServise {
  constructor(private http: HttpClient) { }

  getCars() {
    return this.http
      .get('http://localhost:3000/cars')
      .map((response) => response)
  }
}
