import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { SessionServiceService } from '../session-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css']
})
export class SessionDetailsComponent implements OnInit {

  sessionDetail;
  sessionName;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private sessionService: SessionServiceService) { }

  ngOnInit() {
    this.getSession();
  }

  getSession(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.sessionService.getSpeakers().subscribe((response) => {
      this.sessionDetail = response.body.filter((session) => {
        const tmpSessions = session.sessions.filter((sess) => {
          if (sess.id === id) {
            this.sessionName = sess.name;
            return sess;
          }
        });

        if (tmpSessions.length > 0) {
          return session;
        }

      });
    });
  }

  goBack(): void {
    this.location.back();
  }

  ratedSession(args, session) {
    session.rating = args;
  }

}
