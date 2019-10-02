import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { farmers } from '../../assets/farmer-data'

@Component({
  selector: 'app-farmer-info',
  templateUrl: './farmer-info.component.html',
  styleUrls: ['./farmer-info.component.css'],
})
export class FarmerInfoComponent implements OnInit {
  farmers = farmers

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
console.log(farmers)
