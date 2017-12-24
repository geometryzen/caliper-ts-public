/**
 * Represents Base Caliper Event.
 * @constructor
 * @property {string} context Context
 * @property {string} type Type
 * @property {Object} actor Actor Object
 * @property {string} action String representing the action
 * @property {Object} target Target
 * @property {Object} generated Generated
 * @property {string} eventTime String representing Date (ISO 8601 format)
 * @property {Object} group Group Object
 * @property {Object} edApp EdApp Object
 */
export declare class Event {
    constructor();
    setContext(context: string): void;
    setType(type: string): void;
    setActor(actor: any): void;
    setAction(action: any): void;
    setObject(object: any): void;
    setTarget(target: any): void;
    setGenerated(generated: any): void;
    setEventTime(eventTime: any): void;
    setEdApp(edApp: any): void;
    setGroup(group: any): void;
    setMembership(membership: any): void;
    setFederatedSession(federatedSession: any): void;
}
