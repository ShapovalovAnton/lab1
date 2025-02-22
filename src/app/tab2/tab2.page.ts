import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonItem, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent, IonCard, IonCardHeader, IonCardContent, IonInput, IonItem, IonButton, IonCardTitle],
})
export class Tab2Page {

  task2: string = "";
  calculate (a1:any,b1:any){
    try{

      this.task2="";

      if (!a1 || !b1) {
        throw new Error('Заповніть всі поля!!!');
      }


      let a=Math.ceil(Number(a1)),
      b=Math.floor(Number(b1))

      if (isNaN(a) || isNaN(b)) {
        throw new Error('Введено не число!!!');
      }
      if (a>b) {
        throw new Error('Ліва межа більше за праву!!!');
      }

      let count =0;
      for (let i = a; i <= b; i++) {
        if (i % 7 === 4) {
          this.task2 += i+ " ";
          count++;
        }
      }

      if(count==0) this.task2="Чисел, що відповідають умові, не знайдено!"
      else this.task2+=" Всього таких чисел: " + count;

    } catch(error){
      this.task2="Помилка у введених даних";
      console.log(error);
    }
  }

  constructor() {}

}
