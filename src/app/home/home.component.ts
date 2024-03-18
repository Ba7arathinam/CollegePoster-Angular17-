import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit {
  title = 'CulturalPoster';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    this.countDown();
    setInterval(() => this.countDown(), 1000);
  }

  countDown() {
    const futureDate = new Date("10 may 2024");
    const currentDate = new Date();
    let myDate = futureDate.getTime() - currentDate.getTime();

    if (myDate <= 0) {
      // The future date has passed or is equal to the current date
      this.days = 0;
      this.hours = 0;
      this.minutes = 0;
      this.seconds = 0;
      return;
    }

    this.days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    this.hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
    this.minutes = Math.floor(myDate / 1000 / 60) % 60;
    this.seconds = Math.floor(myDate / 1000) % 60;
  }
      }
   
