import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventSourceService {
  constructor() {}

  observeMessages(url: string): Observable<any> {
    return new Observable<any>(obs => {
      const es = new EventSource(url);
      es.addEventListener('message', (evt: any) => {
        console.log(evt.data);
        obs.next(evt.data != null ? JSON.parse(evt.data) : evt.data);
      });
      return () => es.close();
    });
  }
}
