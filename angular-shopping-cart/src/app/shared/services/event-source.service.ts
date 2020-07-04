import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface StreamData {
  data: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventSourceService {

  constructor() { }

  observeMessages(url: string): Observable<StreamData> {
    return new Observable<StreamData>(obs => {
      const es = new EventSource(url);
      es.addEventListener('message', (evt: StreamData) => {
        // console.log(evt.data);
        obs.next(evt.data != null ? JSON.parse(evt.data) : evt.data);
      });
      return () => es.close();
    });
  }
}
