import { Card } from './card';

export interface GridItem {
    card: Card;

    /**
 * column span in angular-gridster2
 */
    cols?: number;

    /**
     * row span in angular-gridster2
     */
    rows?: number;

    /**
     * x-position in angular-gridster2
     */
    x?: number;

    /**
     * y-position in angular-gridster2
     */
    y?: number;
}