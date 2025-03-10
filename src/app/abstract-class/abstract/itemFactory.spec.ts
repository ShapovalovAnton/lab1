import { ItemFactory } from './itemFactory';

describe(`ItemFactory testing`,()=>{
    it("Створення Ножа",()=>{
        let item = ItemFactory.getItem("Ніж", "Сталь",60,20);
        expect(item).toBeTruthy();
    });
    it("Створення Сковорідки",()=>{
        let item = ItemFactory.getItem("Сковорідка", "Залізо",50,15);
        expect(item).toBeTruthy();
    });
    it("Створення Каструлі",()=>{
        let item = ItemFactory.getItem("Каструля", "Чугун",80,10);
        expect(item).toBeTruthy();
    });
    it("Створення невідомого предмета",()=>{
        expect(()=>ItemFactory.getItem("Чайник", "Сталь",60,20)).toThrow(new Error("Невідомий предмет"));
    });
});