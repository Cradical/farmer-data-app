import { Component, OnInit } from '@angular/core'

import { farmers } from '../../assets/farmer-data'

@Component({
  selector: 'app-farmer-info',
  templateUrl: './farmer-info.component.html',
  styleUrls: ['./farmer-info.component.css'],
})
export class FarmerInfoComponent implements OnInit {
  farmers = farmers

  constructor() {}

  ngOnInit() {}
}
console.log(farmers)
