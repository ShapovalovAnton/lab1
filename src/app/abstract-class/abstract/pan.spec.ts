import { Pan } from './pan';

describe(`Pan testing`,()=>{
    let pan:Pan;
    beforeEach(()=>
    pan=new Pan("Каструля", "Чугун",80,10))
    it("Створення екземпляру класу Каструля",()=>{
        expect(pan).toBeTruthy();
    });
    it("Створення екземпляру класу Каструля з від'ємною міцністю",()=>{
        expect(()=> new Pan("Каструля", "Чугун",-80,10)).toThrow(new Error('durability<=0'));
    });
    it("Створення екземпляру класу Каструля з від'ємною довжиною",()=>{
        expect(()=> new Pan("Каструля", "Чугун",80,-10)).toThrow(new Error('volume<=0'));
    });
    it("Використання методу diaplayInfo для екземпляру Каструля",()=>{
        let expext_show = 'Назва: Каструля; Матеріл: Чугун; Міцність: 80; Об`єм: 10';
        let result=pan.displayInfo();
        expect(result).toBe(expext_show);
    });
});