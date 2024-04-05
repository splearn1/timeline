import { DateTime } from "@angular/common";

export class Prescription {

  constructor (
    public frequency: string,
    public duration: string,
    public date_prescribed: DateTime,
    public pet_id?: string,
    public vet_id?: string,
    public med_id?: string,
  ) {}
  
}
