export class Timeline {
  id: number;
  username: string;
  pet_id: number;
  pet_name: string;
  med_id: number;
  med_name: string;
  med_dosage: number;
  prescription_id: number;
  prescription_frequency: string;

  constructor(user:any){
    this.id = user.id;
    this.username = user.username;
    this.pet_id = user.pet_id;
    this.pet_name = user.pet_name;
    this.med_id = user.med_id;
    this.med_name = user.med_name;
    this.med_dosage = user.med_dosage;
    this.prescription_id = user.prescription_id;
    this.prescription_frequency = user.prescription_frequency;
  }
}
