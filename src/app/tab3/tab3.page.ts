import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonInput, IonItem, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, MyHeaderComponent, IonCard, IonCardHeader, IonCardContent, IonInput, IonItem, IonButton, IonCardTitle, IonGrid, IonRow, IonCol, CommonModule],
})
export class Tab3Page {
  a:any;
  answer: string ="";
  calculate (n1:any){
    try{
      

      let n =parseFloat(n1);

      if(isNaN(n)==true){
        throw new Error ('Введено не число') 
      }

      if(n<=1){
        throw new Error ('введено некоректне число') 
      }

      let i: number=0,
      j: number=0;

      this.a=Array(n);
      console.log('Створено масив')
      let min=101,
      i_min=0, j_min=0;
      this.answer="";
      for(i=0; i<n;i++)
      {
        this.a[i]=Array(n);
        for(j=0; j<n; j++){
          // Від -100 до 100
          this.a[i][j]=Math.floor(Math.random() * (201)) -100;
          if(j%2==0 && this.a[i][j]<min) {
            min=this.a[i][j];
            i_min=i;
            j_min=j;
          }

        }
      }

      this.answer="A["+i_min+","+j_min+"]: "+min;

    } catch(error){
      console.log(error);
      this.answer="Сталася помилка!"
    }
  }
  constructor() {}
}
