import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeroes() : SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = "Bat Man";
    hero.firstName = "Bruce";
    hero.lastName = "Wayne";
    hero.place = "Gotham City";

    return [hero];
  }
}
