import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @HostListener('document:scroll', ['$event'])
  public onViewportScroll() {
this.setUpDesign()
  }
  constructor(){
  }
  goToTop() {
    if(window.scrollY>200 ){
      document.querySelector('.btn-up')?.setAttribute("style","display:none")
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }
  ngAfterViewInit(){
 document.body.addEventListener("scroll",()=>{
  
 })   
  }
  setUpDesign(){
    if(window.scrollY<400 ){
      document.querySelector('.btn-up')?.setAttribute("style","display:none")
    }else{
      document.querySelector('.btn-up')?.setAttribute("style","display:block")
    }
  }
}
