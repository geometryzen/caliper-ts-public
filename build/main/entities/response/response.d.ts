import { Entity } from '../entity';
/**
 * Represents Response.
 * Response's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @param {string} type Type
 * @property {string} assignable URI representing Assignment being attempted
 * @property {string} actor URI representing Actor attempted
 * @property {Object} attempt representing attempt
 * @property {string} startedAtTime String Representation of Date
 * @property {string} endedAtTime String Representation of Date
 * @property {string} duration The format is expected to be PnYnMnDTnHnMnS
 * @extends Entity
 */
export declare class Response extends Entity {
    assignable: string;
    actor: string;
    attempt: number;
    startedAtTime: string;
    endedAtTime: string;
    duration: string;
    constructor(id: string);
    setAssignable(assignableId: any): void;
    setActor(actorId: any): void;
    setAttempt(attempt: any): void;
    setStartedAtTime(startedAtTime: any): void;
    setEndedAtTime(endedAtTime: any): void;
    setDuration(duration: any): void;
}
