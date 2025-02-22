import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent, IonLabel, IonItem, IonCardSubtitle } from '@ionic/angular/standalone';
import { MyHeaderComponent } from '../my-header/my-header.component';
import { LoadingController, AlertController } from '@ionic/angular';
import { GoodsList } from '../class/Goods/goodsList';
import {Chart, registerables} from 'chart.js'
import { Goods } from '../class/Goods/goods';

@Component({
  selector: 'app-lab2-cloud',
  templateUrl: './lab2-cloud.page.html',
  styleUrls: ['./lab2-cloud.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, MyHeaderComponent, IonCard, IonCardHeader, IonCardTitle, IonList, IonCardContent, IonLabel, IonItem, IonCardSubtitle]
})
export class Lab2CloudPage implements OnInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  goods = new GoodsList();
  dataUrl = 'https://api.jsonbin.io/v3/b/67ba07c6e41b4d34e4984b8c';

  loading: any;
  lineChart?: any;

  lineChartMethod() {
    if (this.lineChart instanceof Chart) {
      this.lineChart.destroy();
    }

    let goodsPerWeek = this.goods.filter_week();

    let weeklyIncome = goodsPerWeek.map((weekGoods: Goods[]) => {
      return weekGoods.reduce((total, good) => total + good.cash + good.credit, 0);
    });

    let lab: string[] = [];
    for(let i=0; i<weeklyIncome.length; i++){

      lab[i]= i + " тиждень";

    }



    console.log('goodsPerWeek:', goodsPerWeek);
console.log('weeklyIncome:', weeklyIncome);

    this.lineChart = new Chart(this.lineCanvas?.nativeElement, {
      type: 'bar',
      data: {
        labels: lab,
        datasets: [
          {
            label: 'Продажі за лютий',
            borderColor: 'rgba(75,192,192,1)', // Дати по осі Y
            data: weeklyIncome,
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
          },
        ],
      },
    });
  }

  constructor(
    public loadingController: LoadingController,
    private alertController: AlertController
  ) {
    Chart.register(...registerables);
  }

  ngOnInit() {
    this.load();
  }

  

  async presentAlert(msg: string) {
    const alert = await this.alertController.create({
      header: 'Помилка',
      message: msg,
      buttons: ['Ок'],
    });

    await alert.present();
  }

  async load() {
    // Створюємо новий компонент
    this.loading = await this.loadingController.create({
      spinner: 'crescent',
      message: 'Loading...',
    });

    // Відображаємо завантажувальний екран
    await this.loading.present();

    let data: any = [];

    // Отримання запиту асинхронно
    fetch(this.dataUrl)
      .then((res) => res.json())
      .then((json) => {
        data = json;
        data = data.record;
        let i = 0;
        try {
          let d = 0;
          while (data[i] !== undefined) {
              this.goods.addGoods((new Goods(data[i].date, data[i].n_goods, data[i].cash, data[i].credit)));
            i++;
          }
        } catch (e) {
          this.presentAlert('Помилка читання JSON');
          console.log(e as Error);
        }
        this.lineChartMethod();
        this.loading.dismiss();
      });
  }



}