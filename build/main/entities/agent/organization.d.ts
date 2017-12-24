import { Entity } from '../entity';
/**
 * Represents an LTI W3C Organization.
 * Organization's prototype set to Entity.
 * @constructor
 * @param {string} id URI
 * @property {Object} subOrganizationOf Parent Organization Object
 * @extends Agent
 */
export declare class Organization extends Entity {
    subOrganizationOf: Organization;
    constructor(id: string);
    setSubOrganizationOf(subOrganizationOf: Organization): void;
}
