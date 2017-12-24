import { Organization } from '../agent/organization';
/**
 * Represents Organization.
 * CourseOffering's prototype set to Organization
 * @constructor
 * @param {string} id URI
 * @property {string} courseNumber String representing the Course Number
 * @property {string} academicSession String representing the academic session
 * @extends Organization
 */
export declare class CourseOffering extends Organization {
    courseNumber: string;
    academicSession: string;
    constructor(id: string);
    setCourseNumber(courseNumber: string): void;
    setAcademicSession(academicSession: string): void;
}
