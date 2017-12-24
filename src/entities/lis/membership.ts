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

import { Entity } from '../entity';
import { entityType as EntityType } from '../entityType';

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
export class Membership extends Entity {
    member: string
    organization: string
    roles: string[]
    status: string
    constructor(id: string) {
        super();
        this.setId(id);
        this.setType(EntityType.MEMBERSHIP);
        this.setMember(null);
        this.setOrganization(null);
        this.setRoles(null);
        this.setStatus(null);
    }

    setMember(member: string) {
        this.member = member;
    }

    setOrganization(organization: string) {
        this.organization = organization;
    }

    setRoles(roles: string[]) {
        this.roles = roles;
    }

    setStatus(status: string) {
        this.status = status;
    }
}

