export class Goods{
    date: Date;
    n_goods: number;
    cash: number;
    credit: number;
    constructor(d:Date, g:number, c:number, cr:number)
    {
        this.date = new Date(d);
        this.n_goods=g;
        this.cash=c;
        this.credit=cr;
    }

    getISOWeekNumber(): number {
        let firstMonday = new Date(2025, 1, 3); // 3 лютого 2025
        let currentDate = this.date;
        let diffDays = Math.floor((currentDate.getTime() - firstMonday.getTime()) / (60*60*24*1000));
        let weekNumber = Math.floor(diffDays / 7);
        return weekNumber
    }
}