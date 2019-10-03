import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-data-request',
  templateUrl: './data-request.component.html',
  styleUrls: ['./data-request.component.css'],
})
export class DataRequestComponent implements OnInit {
  onClick(event: { target: any }) {
    console.log('click: ', event.target)
  }

  constructor() {}

  ngOnInit() {}
}
