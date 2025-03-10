import { HouseholdItem } from "./householdItem";

export class Knife extends HouseholdItem{
    length: number = 1;
    constructor(override name: String, override material: String, override durability: number, length: number)
    {
        super(name, material, durability);
        if (length<=0) throw new Error('length<=0');
        this.length=length;
    }


    override displayInfo(){
        return super.displayInfo() + '; Довжина: ' + this.length;
    }
}