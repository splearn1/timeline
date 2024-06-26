import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../models/users';
import { UserService } from '../services/user.service';
import { Pet } from '../models/pets';
import { PetService } from '../services/pet.service';

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './timeline.component.html',
  styleUrl: './timeline.component.scss'
})
export class TimelineComponent implements OnInit {
  currentUser: User | null = null;
  userFirstName: string ='';

  constructor(private userService:UserService, private petService: PetService) { }

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user) => {
      this.currentUser = user;
      this.userFirstName = this.currentUser?.first_name || '';

    });

  }

  updateCurrentUserFirstName(){
    this.userService.changeFirstName(this.currentUser!.id,this.userFirstName).subscribe((res) => {
      this.userService.refreshUserData().subscribe();
    })
  }

  addANewPetToTheCurrentUserPlease(){
    const newlyCreatedPet:Pet = {id:undefined, name:"Bruno", species:"dog", prescriptions:[]}
    console.log("this is good");
    this.petService.addPet(newlyCreatedPet).subscribe((res) => {
      console.log(res);
      this.userService.refreshUserData().subscribe((res) => {})
    })
  }

  pretendToBeBob() {
    this.userFirstName = 'Bob';

  }
  reloadBootstrapData() {
    this.userService.refreshUserData().subscribe(data => {
      console.log('reloaded');
    });
  }

  pleaseRemoveThisPetFromCurrentUser(pet: Pet) {
    this.petService.deletePet(pet.id!).subscribe((res) => {
      console.log(res);
      //adding automatic refresh
      this.userService.refreshUserData().subscribe((res) => {});
    });
  }


}
