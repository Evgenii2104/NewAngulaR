import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"
import {map, tap} from "rxjs";

@Injectable()

export class CarsServise {
  constructor(private http: HttpClient) { }

  getCars() {
    return this.http
      .get('http://localhost:3000/cars')
      .pipe(map((response) => {
        return response
      }))
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue',
    }
    return this.http.post('http://localhost:3000/cars', data).pipe(map((response) => {
      return response
    }))
  }
}
