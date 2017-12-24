import { AssignableDigitalResource } from '../assignable/assignableDigitalResource';
/**
 * Represents AssessmentItem.
 * AssessmentItem's prototype set to AssignableDigitalResource
 * @constructor
 * @param {String} id URI
 * @property {boolean} isTimeDependent boolean true/false
 * @extends AssignableDigitalResource
 */
export declare class AssessmentItem extends AssignableDigitalResource {
    isTimeDependent: boolean;
    constructor(id: string);
    setIsTimeDependent(isTimeDependent: boolean): void;
}
