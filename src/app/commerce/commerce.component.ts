import { map, mergeMap } from 'rxjs/operators';
import { RestService } from './../rest.service';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-commerce',
  templateUrl: './commerce.component.html',
  styleUrls: ['./commerce.component.css'],
})
export class CommerceComponent implements OnInit {

  @Input() stationD = { name: ''};

  station: any;
  commerces: any ;
  latitude: number;
  longuitude: number;


  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {  }


  getCommercesFromStat() {

    this.rest.getStation(this.stationD.name).pipe(
      map( data => {
        this.station = data;
        this.latitude = this.station.records[0].fields.stop_coordinates[0];
        this.longuitude = this.station.records[0].fields.stop_coordinates[1];
        return this.station;
      }),
      mergeMap( station => this.rest.getCommercesFromStation(this.latitude, this.longuitude))
    ).subscribe( comm => {
      this.commerces = comm;
    });


   /* this.rest.getStation(this.stationD.name)
    .subscribe((data: {}) => {
      console.log(data);
      this.station = data;
      this.latitude = this.station.records[0].fields.stop_coordinates[0];
      this.longuitude = this.station.records[0].fields.stop_coordinates[1];

      this.rest.getCommercesFromStation(this.latitude, this.longuitude).subscribe((data2: {}) => {
        this.commerces = data2;
        console.log(this.commerces.records[0].fields.tco_libelle);
      });

    });*/





  }
}
