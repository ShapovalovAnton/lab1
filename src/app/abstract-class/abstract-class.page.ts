import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { HouseholdItem } from './abstract/householdItem';
import { ItemFactory } from './abstract/itemFactory';

@Component({
  selector: 'app-abstract-class',
  templateUrl: './abstract-class.page.html',
  styleUrls: ['./abstract-class.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonItem, IonCardContent, IonCardTitle, IonCardHeader, IonCard]
})
export class AbstractClassPage implements OnInit {
ngOnInit():void{
  this.load();
}

data:any;
items : HouseholdItem[]=[];
dataUrl=`https://api.jsonbin.io/v3/b/67ccb48fe41b4d34e4a315e6`;
async load(){
  this.data=[];
  this.items=[];
  fetch(this.dataUrl)
  .then((res)=>res.json())
  .then((json)=>{
    this.data=json;
    this.data=this.data.record;
    let i=0;
    
    while (this.data[i] != undefined){
      let param;
      if(this.data[i].diameter !== undefined) param =this.data[i].diameter;
      else param =this.data[i].volume;
      let it = ItemFactory.getItem(
        this.data[i][`name`],
        this.data[i][`material`],
        this.data[i][`durability`],
        param

      );
      this.items.push(it);
      i++;

    }
  });
}
  taskLab3(){
      this.items.sort((a,b)=> b.getDurability() -a.getDurability());
      return this.items.slice(0, 5);
  }
}
