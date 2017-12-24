"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assignableDigitalResource_1 = require("../assignable/assignableDigitalResource");
var assignableDigitalResourceType_1 = require("../assignable/assignableDigitalResourceType");
/**
 * Represents AssessmentItem.
 * AssessmentItem's prototype set to AssignableDigitalResource
 * @constructor
 * @param {String} id URI
 * @property {boolean} isTimeDependent boolean true/false
 * @extends AssignableDigitalResource
 */
var AssessmentItem = /** @class */ (function (_super) {
    tslib_1.__extends(AssessmentItem, _super);
    function AssessmentItem(id) {
        var _this = _super.call(this, id) || this;
        _this.setId(id);
        _this.setType(assignableDigitalResourceType_1.assignableDigitalResourceType.ASSESSMENT_ITEM);
        _this.setIsTimeDependent(null);
        return _this;
    }
    AssessmentItem.prototype.setIsTimeDependent = function (isTimeDependent) {
        this.isTimeDependent = isTimeDependent;
    };
    return AssessmentItem;
}(assignableDigitalResource_1.AssignableDigitalResource));
exports.AssessmentItem = AssessmentItem;
//# sourceMappingURL=assessmentItem.js.map