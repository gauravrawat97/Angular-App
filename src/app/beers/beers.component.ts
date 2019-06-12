import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {
  product;
  beers;

  constructor(private route: ActivatedRoute, private data: DataService ) { }

  ngOnInit() {

    this.product = "https://api.punkapi.com/v2/beers/";
    this.route.paramMap.subscribe(params => {
      this.product = this.product+params.get('bid');
    });


    this.data.getselectedBeers(this.product).subscribe(data => {
      this.beers = data
    }
    );
    
  }
}
