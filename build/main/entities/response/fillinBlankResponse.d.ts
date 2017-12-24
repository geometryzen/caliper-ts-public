import { Response } from './response';
/**
 * Represents FillinBlankResponse.
 * FillinBlankResponse's prototype set to Response
 * @constructor
 * @param {string} id URI
 * @property {Object[]} values Array of response values
 * @extends Response
 */
export declare class FillinBlankResponse extends Response {
    values: Object[];
    constructor(id: string);
    setValues(values: Object[]): void;
}
