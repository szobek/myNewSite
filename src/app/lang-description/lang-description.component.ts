import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-description',
  templateUrl: './lang-description.component.html',
  styleUrls: ['./lang-description.component.scss']
})
export class LangDescriptionComponent implements OnInit {
@Input() langTitle:string=""
@Input() langText:string=""
@Input() langImageSrc:string=""
@Input() langImageAlt:string=""
imgAvailable:boolean=false
constructor(){
  
}
  ngOnInit(): void {

    if(this.langImageSrc!=""){
      this.imgAvailable=true
    }
    
  }
}
