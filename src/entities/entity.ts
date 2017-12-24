/*
 * This file is part of IMS Caliper Analytics™ and is licensed to
 * IMS Global Learning Consortium, Inc. (http://www.imsglobal.org)
 * under one or more contributor license agreements.  See the NOTICE
 * file distributed with this work for additional information.
 *
 * IMS Caliper is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * IMS Caliper is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License along
 * with this program. If not, see http://www.gnu.org/licenses/.
 */

import { Context } from '../context/context';
import { entityType as Type } from './entityType';

/**
 * Represents base Caliper Entity.  Analogous to a schema.org Thing
 */
export class Entity {
    name: string
    description: string
    extensions: Object
    dateCreated: string
    dateModified: string

    constructor() {
        this.setContext(Context.CONTEXT);
        this.setType(Type.ENTITY);
        this.setName(null);
        this.setDescription(null);
        this.setExtensions({});
        this.setDateCreated(null);
        this.setDateModified(null);
    }

    // Setters for base properties of all Caliper Entities
    setContext(context: string) {
        this['@context'] = context;
    }
    setId(id: string) {
        this['@id'] = id;
    }
    setType(type: string) {
        this['@type'] = type;
    }
    setName(name: string) {
        this.name = name;
    }

    setDescription(description: string) {
        this.description = description;
    }

    setExtensions(extensions: Object) {
        this.extensions = extensions;
    }

    /**
     * @param dateCreated ISO8601 dateTime
     */
    setDateCreated(dateCreated: string) {
        this.dateCreated = dateCreated;
    }

    /**
     * @param dateModified ISO8601 dateTime
     */
    setDateModified(dateModified: string) {
        this.dateModified = dateModified;
    }
}
