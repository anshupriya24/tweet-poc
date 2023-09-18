import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor(private http: HttpClient, private router: Router) { }
  baseUrl = 'http://16.171.132.103:8081/api/v1/tweets'

  load_user_tweets(user_id: string) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    return this.http.get(this.baseUrl + '/' + user_id, { headers })
  }

  add_tweet(user_id: string, msg: string) {

    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    const payload = {
      "text": msg,
      "authorId": user_id
    }
    return this.http.post(this.baseUrl, payload, { headers })
  }

  load_user_tweets_all(user_id: string) {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    return this.http.get(this.baseUrl + '/others/' + user_id, { headers })
  }


  get_contact() {
    const headers = { 'content-type': 'application/json', 'Access-Control-Allow-Origin': '*' };
    return this.http.get('http://16.171.132.103:8082/team', { headers })
  }
}
