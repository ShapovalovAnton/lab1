import { FryingPan } from "./fryingPan";
import { Pan } from "./pan";

export type ItemName ='Сковорідка' | 'Каструля' | 'Ніж';
export type ItemNameMap={
    [key: string] : ItemName;
};
export const ItemNameMap: ItemNameMap={
    'Сковорідка': 'Сковорідка',
    'Каструля': 'Каструля',
    'Ніж': 'Ніж',
    
};
