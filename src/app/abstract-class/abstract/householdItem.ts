export abstract class HouseholdItem{
    name: String = '';
    material: String = '';
    durability: number = 1;
    constructor(name: String, material: String, durability: number)
    {
        if (!Number.isInteger(durability)) throw new Error('Durability must be an integer.');
        if (durability<=0) throw new Error('durability<=0');
        this.name=name;
        this.durability=durability;
        this.material=material;
    }

    getDurability(){
        return this.durability;
    }

    displayInfo(){
        return 'Назва: '+ this.name + '; Матеріл: '+ this.material + '; Міцність: ' +this.durability;
    }
}