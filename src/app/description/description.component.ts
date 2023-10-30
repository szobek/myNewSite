import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

@Input() public cardTitle:string=""
@Input() public cardText:string=""
@Input() public cardImg:string=""
imgAvailable:boolean=false
constructor(){
  if(this.cardImg!=""){
    
    this.imgAvailable=true
  }
}
ngOnInit(): void {
  
 }
 
}
