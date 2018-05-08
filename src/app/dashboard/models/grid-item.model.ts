import { GridsterItem } from 'angular-gridster2';
import { Card } from './card.enum';

export interface GridItem extends GridsterItem {
    card: Card;
}
