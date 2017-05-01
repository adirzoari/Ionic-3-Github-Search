import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http ,Response } from '@angular/http';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';



import { User } from '../models/user.interface';
import { Repository } from '../models/repository.interface';


import { USER_LIST } from '../mocks/user.mocks';
import { REPOSITORY_LIST } from '../mocks/repository.mocks';


@Injectable()
export class GithubService {

  private baseUrl: string = 'https://api.github.com/users';
  private reposUrl: string = "repos";

  constructor(private http: Http) {
    console.log('Hello GithubService Provider');
  }

 
  /*
    Finding the repositores from within REPOSITORY_LIST, equal to the Username passed in.
    Returning the results as an observbale
  */
  
     mockGetRepositoryInformation(username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter(repository => repository.owner.name == username));
  }

  /*
    Finding the username from within USER_LIST, equal to the Username passed in.
    Returning the results as an observbale
  */
  mockGetUserInformation(username: string): Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
  }


 /*
    Returns user information for the username parameter.
  */
  getUserInformation(username: string):Observable<User>{
    return this.http.get(`${this.baseUrl}/${username}`)
    .do(this.logData)
    .map(this.extractData)
    .do(this.logData)
    .catch(this.handleError);
  }

  getRepositoryInformation(username: string) :Observable <Repository[]>{
        return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
         .do(this.logData)
         .map(this.extractData)
         .do(this.logData)
         .catch(this.handleError);
  }
  

  private handleError(error:Response | any){
    return Observable.throw(error.json().error || "Server error.")

  }
  private extractData(reponse: Response){
    return reponse.json();

  }

  private logData(reponse: Response) {
    console.log(reponse);

  }
}
