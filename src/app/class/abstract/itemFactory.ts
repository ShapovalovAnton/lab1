import { Pan } from "./pan";
import { FryingPan } from "./fryingPan";
import { HouseholdItem } from "./householdItem";
import { ItemNameMap } from "./itemName";

export class ItemFactory{
    public static getItem(name: String, material: String, durability: number, parameter: number): HouseholdItem{
        if(name === ItemNameMap['Сковорідка']) return new FryingPan(name, material, durability, parameter);
        else if(name === ItemNameMap['Каструля']) return new Pan(name, material, durability, parameter);
        else throw new Error("Невідома фігура");
    }
}