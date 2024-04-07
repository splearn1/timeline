export class Pet {
  id: number;
  name: string;
  species: string;
  breed?: string;

  constructor (pets: any) {
    this.id = pets.id;
    this.name = pets.name;
    this.species = pets.species;
    this.breed = pets.breed;
  }

}
