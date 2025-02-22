import { Goods } from "./goods"

export class GoodsList{
goods:Goods[]=[];
addGoods(g:Goods){
    this.goods.push(g);
}
sort() {
    this.goods = this.goods.sort((g1, g2) => new Date(g1.date).getTime() - new Date(g2.date).getTime());
}

filter_week(): any{
    let goods_per_weeks: Goods[][] = [[], [], [], []];
    let week:number;
    this.goods.forEach(element => {
        week=element.getISOWeekNumber();
        if (week >= 0 && week < 4) {
            goods_per_weeks[week].push(element);
        } else {
            console.warn(`Дата ${element.date} виходить за межі лютого 2025`);
        }
    });
    return goods_per_weeks;

}
}