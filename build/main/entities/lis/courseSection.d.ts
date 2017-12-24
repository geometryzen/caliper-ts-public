import { CourseOffering } from './courseOffering';
/**
 * Represents Course.
 * CourseSection's prototype set to CourseOffering
 * @constructor
 * @param {string} id URI
 * @property {string} category String representing a Category (lecture, lab, etc.)
 * @extends Course
 */
export declare class CourseSection extends CourseOffering {
    category: string;
    constructor(id: string);
    setCategory(category: any): void;
}
