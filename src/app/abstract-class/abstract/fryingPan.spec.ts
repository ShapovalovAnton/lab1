import { FryingPan } from './fryingPan';

describe(`FryingPan testing`,()=>{
    let fryingPan:FryingPan;
    beforeEach(()=>
    fryingPan=new FryingPan("Сковорідка", "Залізо",50,15))
    it("Створення екземпляру класу Сковорідка",()=>{
        expect(fryingPan).toBeTruthy();
    });
    it("Створення екземпляру класу Сковорідка з від'ємною міцністю",()=>{
        expect(()=> new FryingPan("Сковорідка", "Залізо",-50,15)).toThrow(new Error('durability<=0'));
    });
    it("Створення екземпляру класу Сковорідка з від'ємною довжиною",()=>{
        expect(()=> new FryingPan("Сковорідка", "Залізо",50,-15)).toThrow(new Error('diameter<=0'));
    });
    it("Використання методу diaplayInfo для екземпляру Сковорідка",()=>{
        let expext_show = 'Назва: Сковорідка; Матеріл: Залізо; Міцність: 50; Діаметр: 15';
        let result=fryingPan.displayInfo();
        expect(result).toBe(expext_show);
    });
});