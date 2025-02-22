import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent, IonCard, IonCardHeader, IonCardContent, IonInput, IonItem, IonButton, IonCardTitle],
})
export class Tab1Page {
  d: number = 0;
  getFirstDigit(n: number): number {
    n = Math.abs(n);
    while (n >= 10) {
      n = Math.floor(n / 10);
    }
    return n;
  }
  calculate (a1:any,b1:any, c1:any){
    try{

      if (!a1 || !b1 || !c1) {
        throw new Error('Заповніть всі поля!!!');
      }


      let a=Number(a1),
      b=Number(b1),
      c=Number(c1);

      if (isNaN(a) || isNaN(b) || isNaN(c)) {
        throw new Error('Введено не число!!!');
      }
      if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(c)) {
        throw new Error('Числа повинні бути цілими!!!');
      }

      
      if(a%2==0 && b%2==0 && c%2==0) this.d=a*b*c;
      else if((this.getFirstDigit(a)+this.getFirstDigit(b)+this.getFirstDigit(c))%2==1) this.d=a*a+b*b+c*c;
      else this.d=0;

    } catch(error){
      this.d=0;
      console.log(error);
    }
  }
  constructor() {}
}
