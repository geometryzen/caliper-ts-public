import { Entity } from './entity';
/**
 * Represents Digital Resource.  Analogous to a schema.org CreativeWork
 */
export declare class DigitalResource extends Entity {
    objectType: string[];
    alignedLearningObjective: any;
    keywords: any;
    isPartOf: any;
    datePublished: string;
    version: string;
    /**
     * @constructor
     * @param {string} id URI
     * @property {string} name Name
     * @property {string} description Description
     * @property {Object[]} properties Array of Extensions
     * @property {string[]}  objectType Array of Object Type Strings
     * @property {{string[]} } alignedLearningObjective Array of Learning Objectives
     * @property {{string[]} } keywords Array of KeyWord Strings
     * @property {Object} isPartOf Parent Object
     * @property {string} datePublished String representing a date
     * @property {string} Version String representing the version of the DigitalResource
     */
    constructor(id: string);
    setObjectType(objectType: string[]): void;
    setAlignedLearningObjective(alignedLearningObjective: any): void;
    setKeywords(keywords: any): void;
    setIsPartOf(isPartOf: any): void;
    setDatePublished(datePublished: string): void;
    setVersion(version: string): void;
}
