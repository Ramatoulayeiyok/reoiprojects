import { RestService } from '../rest.service';
import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-station-detail',
  templateUrl: './station-detail.component.html',
  styleUrls: ['./station-detail.component.css'],
})
export class StationDetailComponent implements OnInit {

  @Input() stationDetails = { name: ''};

  station: any;
  records: any[];
  fields: any;

  constructor(public rest: RestService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {  }

  AppelStation() {
    this.rest.getStation(this.stationDetails.name).subscribe((data: {}) => {
      console.log(data);
      this.station = data;
    });

  }

}
