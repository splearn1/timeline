export class Prescription {
  id: number;
  frequency: number;
  duration?: number;

  constructor (prescription: any) {
    this.id = prescription.id;
    this.frequency = prescription.frequency;
    this.duration = prescription.duration;
  }

}
// Do i need to import User for this and meds and pets or username ??????
