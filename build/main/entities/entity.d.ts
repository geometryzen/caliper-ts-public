/**
 * Represents base Caliper Entity.  Analogous to a schema.org Thing
 */
export declare class Entity {
    name: string;
    description: string;
    extensions: Object;
    dateCreated: string;
    dateModified: string;
    constructor();
    setContext(context: string): void;
    setId(id: string): void;
    setType(type: string): void;
    setName(name: string): void;
    setDescription(description: string): void;
    setExtensions(extensions: Object): void;
    /**
     * @param dateCreated ISO8601 dateTime
     */
    setDateCreated(dateCreated: string): void;
    /**
     * @param dateModified ISO8601 dateTime
     */
    setDateModified(dateModified: string): void;
}
