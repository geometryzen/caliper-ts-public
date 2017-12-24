import { Entity } from '../entity';
/**
 * Represents a W3C Membership.
 * Membership's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @property {string} memberId member Identifier
 * @property {string} organizationId organization Identifier
 * @property {Object[]} roles Array of roles
 * @extends Entity
 */
export declare class Membership extends Entity {
    member: string;
    organization: string;
    roles: string[];
    status: string;
    constructor(id: string);
    setMember(member: string): void;
    setOrganization(organization: string): void;
    setRoles(roles: string[]): void;
    setStatus(status: string): void;
}
