import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Hero } from '../+model/hero-model';

@Injectable()
export class HeroService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private heroesUrl = '/api/heroes';

  private heroes:any[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(this.heroes);
    /*return this.http
               .get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);*/
  }


  getHero(id: number): Promise<Hero> {
    for (let hero of this.heroes) {
      if (hero.id == id) {
        return Promise.resolve(hero);
      }
    }
    /*const url = `${this.heroesUrl}/${id}`;
    return this.http
               .get(url)
               .toPromise()
               .then(response => response.json().data as Hero)
               .catch(this.handleError);*/
  }

  delete(id: number): Promise<void> {
    for (let hero of this.heroes) {
      if (hero.id == id) {
        this.heroes.splice(this.heroes.indexOf(hero), 1);
        return Promise.resolve();
      }
    }
    /*for (let i in this.heroes) {
      if (this.heroes[i].id == id) {
        this.heroes.splice(i,1);
        return Promise.resolve();
      }
    }
    const url = `${this.heroesUrl}/${id}`;
    return this.http
               .delete(url, {headers: this.headers})
               .toPromise()
               .then(() => null)
               .catch(this.handleError);*/
  }

  create(hero: Hero): Promise<Hero> {
    hero.id = this.heroes[this.heroes.length-1].id + 1;
    this.heroes.push(hero);
    return Promise.resolve(hero);
    /*return this.http
               .post(this.heroesUrl, JSON.stringify(hero), {headers: this.headers})
               .toPromise()
               .then(res => res.json().data as Hero)
               .catch(this.handleError);*/
  }

  update(hero: Hero): Promise<Hero> {
    for (let h of this.heroes) {
      if (h.id == hero.id) {
        h = hero;
        return Promise.resolve(hero);
      }
    }
    /*const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
               .put(url, JSON.stringify(hero), {headers: this.headers})
               .toPromise()
               .then(() => hero)
               .catch(this.handleError);*/
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  search(term: string): Observable<Hero[]> {
    let heroes:Hero[] = [];
    for (let hero of this.heroes) {
      if (hero.name.indexOf(term) > -1) {
        heroes.push(hero);
      }
    }
    return Observable.of<Hero[]>(heroes);
    /*const url = `${this.heroesUrl}/?name=${term}`;
    return this.http
               .get(url)
               .map(response => response.json().data as Hero[]);*/
  }
  
}