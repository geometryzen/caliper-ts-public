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

import { AssignableDigitalResource } from '../assignable/assignableDigitalResource';
import { assignableDigitalResourceType as AssignableDigitalResourceType } from '../assignable/assignableDigitalResourceType';

/**
 * Represents AssessmentItem.  
 * AssessmentItem's prototype set to AssignableDigitalResource
 * @constructor
 * @param {String} id URI
 * @property {boolean} isTimeDependent boolean true/false
 * @extends AssignableDigitalResource
 */
export class AssessmentItem extends AssignableDigitalResource {
    isTimeDependent: boolean
    constructor(id: string) {
        super(id);
        this.setId(id);
        this.setType(AssignableDigitalResourceType.ASSESSMENT_ITEM);
        this.setIsTimeDependent(null);
    }

    setIsTimeDependent(isTimeDependent: boolean) {
        this.isTimeDependent = isTimeDependent;
    }
}
