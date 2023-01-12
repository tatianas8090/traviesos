import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{


    ngOnInit(): void {



  var botonDerecho = document.getElementsByClassName('icono-derecho')[0]
  var botonIzquierdo = document.getElementsByClassName('icono-izquierdo')[0]

  var slider = document.getElementsByClassName('slider')[0]  as HTMLElement

  var sliders = document.getElementsByClassName('img-slider').length
  var contador = 0; 

  function moverDerecha(){
      contador++;

      if(contador > sliders - 1){
          contador = 0
      }

      slider.style.marginLeft = `-${contador * 100}%`




      clearInterval(intervalo)
      intervalo = setInterval(moverDerecha, 6000)
  }


  var intervalo = setInterval(moverDerecha, 6000)


  function moverIzquierda(){
      contador--;

      if(contador < 0){
          contador = sliders -1;
      }

      slider.style.marginLeft = `-${contador * 100}%`



      clearInterval(intervalo)
      intervalo = setInterval(moverDerecha, 6000)
  }

  botonDerecho.addEventListener('click', moverDerecha)
  botonIzquierdo.addEventListener('click', moverIzquierda)
  }}
