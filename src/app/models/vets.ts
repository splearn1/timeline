export class Vet {
  id: number;
  name: string;
  email: string;
  phone: string;

  constructor (vet:any) {
    this.id = vet.id;
    this.name = vet.name;
    this.email = vet.email;
    this.phone = vet.phone;
  }

}
