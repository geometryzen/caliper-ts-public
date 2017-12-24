import { DigitalResource } from '../digitalResource';
/**
 * Represents AssignableDigitalResource.
 * AssignableDigitalResource's prototype set to DigitalResource
 * @constructor
 * @param {string} id URI
 * @param {string} type Type
 * @property {string} dateCreated String representation of Date
 * @property {string} dateToActivate String representation of Date
 * @property {string} dateToShow String representation of Date
 * @property {string} dateToStartOn String representation of Date
 * @property {string} dateToSubmit String representation of Date
 * @property {number} maxAttempts Maximum attempts
 * @property {number} maxSubmits  Maximum submits
 * @property {number} maxScore Maximum scores
 * @extends DigitalResource
 */
export declare class AssignableDigitalResource extends DigitalResource {
    dateToActivate: string;
    dateToShow: string;
    dateToStartOn: string;
    dateToSubmit: string;
    maxAttempts: number;
    maxSubmits: number;
    maxScore: number;
    constructor(id: string);
    setDateCreated(dateCreated: any): void;
    setDateToActivate(dateToActivate: string): void;
    setDateToShow(dateToShow: string): void;
    setDateToStartOn(dateToStartOn: string): void;
    setDateToSubmit(dateToSubmit: string): void;
    setMaxAttempts(maxAttempts: number): void;
    setMaxSubmits(maxSubmits: number): void;
    setMaxScore(maxScore: number): void;
}
