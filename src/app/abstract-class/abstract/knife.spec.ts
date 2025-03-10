import { Knife } from './knife';

describe(`Knife testing`,()=>{
    let knife:Knife;
    beforeEach(()=>
    knife=new Knife("Ніж", "Сталь",60,20))
    it("Створення екземпляру класу Ніж",()=>{
        expect(knife).toBeTruthy();
    });
    it("Створення екземпляру класу Ніж з від'ємною міцністю",()=>{
        expect(()=> new Knife("Ніж", "Сталь",-60,20)).toThrow(new Error('durability<=0'));
    });
    it("Створення екземпляру класу Ніж з від'ємною довжиною",()=>{
        expect(()=> new Knife("Ніж", "Сталь",60,-20)).toThrow(new Error('length<=0'));
    });
    it("Використання методу diaplayInfo для екземпляру Ніж",()=>{
        let expext_show = 'Назва: Ніж; Матеріл: Сталь; Міцність: 60; Довжина: 20';
        let result=knife.displayInfo();
        expect(result).toBe(expext_show);
    });
});