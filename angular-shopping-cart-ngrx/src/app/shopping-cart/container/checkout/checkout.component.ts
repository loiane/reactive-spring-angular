import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventSourceService } from '../../../core/services/event-source.service';
import { map, take } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit, OnDestroy {

  private readonly BASE_URL = environment.baseUrl;

  private sseStream: Subscription;
  messages: any[] = [];

  orders = [
    { id: '2facf25d-b1e1-4fd6-9829-d8c7f49e33c4', color: 'blue', description: 'Order Received' },
    { id: '18a1d2ea-3652-4ef0-bbdf-576593d0fd9a', color: 'purple', description: 'Order Confirmed' },
    {
      id: '872bbaad-c9ae-4d62-9de7-f9ff3188d56a',
      color: 'pink',
      description: 'Order Being Prepared'
    },
    { id: '7468b388-88d3-469c-9426-9c32b033e92b', color: 'green', description: 'Delivered' }
  ];

  constructor(private sseService: EventSourceService) {}

  ngOnInit() {
    this.sseStream = this.sseService
      .observeMessages(`${this.BASE_URL}/orders/stream`)
      .pipe(
        map((message: any) => {
          message.date = new Date();
          return message;
        }),
        take(4)
      )
      .subscribe(message => {
        this.messages.push(message);
      });
  }

  ngOnDestroy() {
    if (this.sseStream) {
      this.sseStream.unsubscribe();
    }
  }
}
