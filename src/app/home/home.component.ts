import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.addEventListener("scroll", (e) => {
      const nav = document.querySelector(".nav");
      if (window.pageYOffset > 0) {
        nav!.classList.add("scroll");
      } else {
        nav!.classList.remove("scroll");
      }
    });
    
    

  }


  toggleclick(){
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".nav ul");
    hamburger!.addEventListener("click", () => {
      menu!.classList.toggle("active");
    });
  }

}
