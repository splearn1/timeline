import { Med } from "./meds";
import { Vet } from "./vets";

export class Prescription {
  id: number;
  frequency: number;
  vet: Vet;
  med: Med;
  duration?: number;

  constructor (prescription: any) {
    this.id = prescription.id;
    this.frequency = prescription.frequency;
    this.duration = prescription.duration;
    this.vet = prescription.vet;
    this.med = prescription.med;
  }

}
