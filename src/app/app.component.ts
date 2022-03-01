import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  data = [
    {
      code: 'D12',
      endDate: '2019-08-31',
      name: 'Discount 1',
      offersDtos: [
        {id: 1, libelle: 'offer 1'},
        {id: 2, libelle: 'offer 2'},
        {id: 3, libelle: 'offer 3'}
      ],
      promotionCode: 'D12',
      startDate: '2019-08-01',
      value: 12
    },
    {
      code: 'D13',
      endDate: '2019-09-30',
      name: 'Discount 1',
      offersDtos: [
        {id: 4, libelle: 'offer 4'},
        {id: 5, libelle: 'offer 5'},
        {id: 6, libelle: 'offer 6'}
      ],
      promotionCode: 'D13',
      startDate: '2019-09-01',
      value: 13
    }
  ]
}
