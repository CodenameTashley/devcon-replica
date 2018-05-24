import { Component, OnInit } from '@angular/core';
import { SessionServiceService } from '../session-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-sessions',
  templateUrl: './sessions.component.html',
  styleUrls: ['./sessions.component.css']
})
export class SessionsComponent implements OnInit {
  sessions = [];

  constructor(private sessionService: SessionServiceService) { }

  ngOnInit() {
    this.loadSpeakers();
  }

  loadSpeakers() {
    this.sessionService.getSpeakers().subscribe((response) => {

      this.sessions = response.body.reduce((acc, speaker) => {
        return acc.concat(speaker.sessions);
      }, []);

      this.sessions = this.sessions.sort((obj1, obj2) => {
        return (obj1.name > obj2.name) ? 1 : ((obj2.name > obj1.name) ? -1 : 0);
      });

      this.sessions = _.uniqBy(this.sessions, 'name');

    });
  }

}
