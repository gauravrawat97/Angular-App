import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
beers: Object;
constructor(private data: DataService) { }

    
  ngOnInit() {
        this.data.getBeers().subscribe(data => {
        this.beers = data
        }
    );
  }

  

}
