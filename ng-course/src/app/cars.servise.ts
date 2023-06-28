import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http"
import {catchError, delay, map, throwError} from "rxjs";


@Injectable()

export class CarsServise {
  constructor(private http: HttpClient) { }

  getAppTitle() {
    return this.http.get('http://localhost:3000/title').pipe(
      delay(2000),
      map((response) => {
        return  response
      }), map((data) => {
        // @ts-ignore
        return data.value
      })
    )
  }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json: charset = utf8'
    })
    return this.http
      .get('http://localhost:3000/cars', ({
        headers: headers
      }))
      .pipe(
        map((response) => {
        return response
      }), catchError((error) => {
          return  throwError(() => new Error(`Сервер не доступен`))
    })
  )
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue',
    }
    const headers = new HttpHeaders({
      'Content-Type': 'application/json: charset = utf8'
    })
    return this.http.post('http://localhost:3000/cars', data, ({
      headers: headers
    })).pipe(map((response) => {
      return response
    }))
  }

  changeColor(car: any, color: string) {
   car.color = color
    return this.http.put(`http://localhost:3000/cars/${car.id}`, (car)).pipe(map((responce) => {
      return responce
    }));
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`).pipe(map((responce) => {
      return responce
    }));
  }
}
