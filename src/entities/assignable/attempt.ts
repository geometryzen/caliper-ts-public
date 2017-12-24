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
 * Represents Attempt.  
 * Attempt's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @param {string} type Type
 * @property {string} assignable URI representing Assignment being attempted
 * @property {string} actor URI representing Actor attempted
 * @property {number} count Counter representing attempt
 * @property {string} startedAtTime String Representation of Date
 * @property {string} endedAtTime String Representation of Date
 * @property {string} duration The format is expected to be PnYnMnDTnHnMnS
 * @extends Entity
 */
export class Attempt extends Entity {
    assignable: string
    actor: string
    count: number
    startedAtTime: string
    endedAtTime: string
    duration: string
    constructor(id) {
        super();
        this.setId(id);
        this.setType(EntityType.ATTEMPT);
        this.setActor(null);
        this.setAssignable(null);
        this.setCount(null);
        this.setStartedAtTime(null);
        this.setEndedAtTime(null);
        this.setDuration(null);
    }

    setAssignable(assignableId: string) {
        this.assignable = assignableId;
    }

    setActor(actorId: string) {
        this.actor = actorId;
    }

    setCount(count: number) {
        this.count = count;
    }

    setStartedAtTime(startedAt: string) {
        this.startedAtTime = startedAt;
    }

    setEndedAtTime(endedAt: string) {
        this.endedAtTime = endedAt;
    }

    setDuration(duration: string) {
        this.duration = duration;
    }
}

