import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../config/config.service";

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit {
  public blink!: string;
  public dragons!: string;
  public pilots!: string;

  constructor(private httpService: ConfigService) {
  }

  ngOnInit(): void {
    this.getBlink();
  }

  getBlink() {
    this.httpService.getBlink()
      .subscribe(data => {
        console.log(`CALL API WITH DATA ${data}`);
        this.blink = data.message;
      });

    this.httpService.getImagineDragons()
      .subscribe(data => {
        console.log(`CALL API WITH DATA ${data}`);
        this.dragons = data.message;
      });
    this.httpService.getTwentyOnePilots()
      .subscribe(data => {
        console.log(`CALL API WITH DATA ${data}`);
        this.pilots = data.message;
      });
  }

}
