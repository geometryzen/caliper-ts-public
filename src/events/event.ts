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
export class Event {
    constructor() {
        this.setContext(Context.CONTEXT);
        this.setType(null);
        this.setActor(null);
        this.setAction(null);
        this.setObject(null);
        this.setTarget(null);
        this.setGenerated(null);
        this.setEventTime(null);
        this.setEdApp(null);
        this.setGroup(null);
        this.setMembership(null);
        this.setFederatedSession(null);
    }

    setContext(context: string) {
        this['@context'] = context;
    }

    setType(type: string) {
        this['@type'] = type;
    }

    setActor(actor) {
        this.actor = actor;
    }

    setAction(action) {
        this.action = action;
    }

    setObject(object) {
        this.object = object;
    }

    setTarget(target) {
        this.target = target;
    }

    setGenerated(generated) {
        this.generated = generated;
    }

    setEventTime(eventTime) {
        this.eventTime = eventTime;
    }

    setEdApp(edApp) {
        this.edApp = edApp;
    }

    setGroup(group) {
        this.group = group;
    }

    setMembership(membership) {
        this.membership = membership;
    }

    setFederatedSession(federatedSession) {
        this.federatedSession = federatedSession;
    }

}
