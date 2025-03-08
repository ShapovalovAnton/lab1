import { HouseholdItem } from "./householdItem";

export class Pan extends HouseholdItem{
    volume: number = 0;
    constructor(override name: String, override material: String, override durability: number, volume: number)
    {
        super(name, material, durability);
        if (volume<=0) throw new Error('volume<=0');
        this.volume=volume;
    }


    override displayInfo(){
        return super.displayInfo() + '; Об`єм: ' + this.volume;
    }
}