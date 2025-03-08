import { HouseholdItem } from "./householdItem";

export class FryingPan extends HouseholdItem{
    diameter: number = 0;
    constructor(override name: String, override material: String, override durability: number, diameter: number)
    {
        super(name, material, durability);
        if (diameter<=0) throw new Error('diameter<=0');
        this.diameter=diameter;
    }


    override displayInfo(){
        return super.displayInfo() + '; Діаметр: ' + this.diameter;
    }
}