import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Timeline } from '../models/timeline';
import { TimelineService } from '../services/timeline.service';
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
  timelines: Timeline[] = [];
  newTimelineBody: string = '';
  users: User[] = [];
  currentUser: User | null = null;

  constructor(private timelineService: TimelineService, private userService:UserService, private petService: PetService) { }

  ngOnInit(): void {
    this.userService.currentUserBehaviorSubject.subscribe((user) => {
      this.currentUser = user;


    });

  }

  addANewPetToTheCurrentUserPlease(){
    const newlyCreatedPet:Pet = {id:undefined, name:"Bruno", species:"dog", prescriptions:[]}
    console.log("this is good");
    this.petService.addPet(newlyCreatedPet).subscribe((res) => {
      console.log(res);
      this.userService.getBootstrapData().subscribe((res) => {})
    })
  }

  pretendToBeBob() {
    this.currentUser = {
      id: 1,
      first_name: "Bob",
      last_name: "Bob",
      email: "<EMAIL>",
      username: "bob",
      pets: []
    };
  }
  reloadBootstrapData() {
    this.userService.getBootstrapData().subscribe(data => {
      console.log('reloaded');
    });
  }

  pleaseRemoveThisPetFromCurrentUser(pet: Pet) {
    this.petService.deletePet(pet.id!).subscribe((res) => {
      console.log(res);
      // getBootstrapData
    });
    // this.petService.deletePet(id)
  }

  
}
