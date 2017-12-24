import { Entity } from '../entity';
/**
 * Represents Attempt.
 * Attempt's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @param {string} type Type
 * @property {string} assignable URI representing Assignment being attempted
 * @property {string} actor URI representing Actor attempted
 * @property {number} count Counter representing attempt
 * @property {string} startedAtTime String Representation of Date
 * @property {string} endedAtTime String Representation of Date
 * @property {string} duration The format is expected to be PnYnMnDTnHnMnS
 * @extends Entity
 */
export declare class Attempt extends Entity {
    assignable: string;
    actor: string;
    count: number;
    startedAtTime: string;
    endedAtTime: string;
    duration: string;
    constructor(id: any);
    setAssignable(assignableId: string): void;
    setActor(actorId: string): void;
    setCount(count: number): void;
    setStartedAtTime(startedAt: string): void;
    setEndedAtTime(endedAt: string): void;
    setDuration(duration: string): void;
}
