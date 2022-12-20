import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(){

  }
  ngOnInit(): void {
  const slider = document.getElementById("slider");
  let sliderSection =document.getElementsByClassName("slider__section");
  let sliderSectionLast =sliderSection[sliderSection.length -1];

  const btnleft = document.getElementById("btn-left");
  const btnright= document.getElementById("btn-right");

  slider?.insertAdjacentElement ("afterbegin", sliderSectionLast);

  function next() {
    let sliderSectionFirst = document.getElementsByClassName(".slider__section")[0];
    slider!.style.marginLeft ="-200%";
    slider!.style.transition ="all 0.8s"
    setTimeout(function(){
      slider!.style.transition ="none";
      slider?.insertAdjacentElement ('beforeend', sliderSectionFirst);
      slider!.style.marginLeft= "-100%";
    }, 500);
  }

  function prev() {
    let sliderSection = document.getElementsByClassName("slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider!.style.marginLeft ="0%";
    slider!.style.transition ="all 0.5s"
    setTimeout(function(){
      slider!.style.transition ="none";
      slider?.insertAdjacentElement ("afterbegin", sliderSectionLast);
      slider!.style.marginLeft="-100%";
    }, 500)
  }

  btnright?.addEventListener('click', function(){
    next();
  });

  btnleft?.addEventListener('click', function(){
   prev();
  });

  setInterval(function(){
    next();
  }, 5000);
}

}
