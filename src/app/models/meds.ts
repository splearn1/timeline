export class Med {
  id: number;
  name: string;
  dosage: number;
  description?: string;

  constructor (meds: any) {
    this.id = meds.id;
    this.name = meds.name;
    this.dosage = meds.dosage;
    this.description = meds.description;
  }

}
