import { Observable } from "rxjs";

interface IResponse<T> {
  data: T;
  status: number;
}

export interface ICrud<T> {
  create(data: T): Observable<IResponse<T>>;
  get(id: number): Observable<IResponse<T>>;
  update(data: T): Observable<IResponse<T>>;
  delete(id: number): Observable<IResponse<T>>;
  list(data: T): Observable<IResponse<T>>;
}
