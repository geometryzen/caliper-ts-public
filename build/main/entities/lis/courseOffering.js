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
var organization_1 = require("../agent/organization");
var entityType_1 = require("../entityType");
/**
 * Represents Organization.
 * CourseOffering's prototype set to Organization
 * @constructor
 * @param {string} id URI
 * @property {string} courseNumber String representing the Course Number
 * @property {string} academicSession String representing the academic session
 * @extends Organization
 */
var CourseOffering = /** @class */ (function (_super) {
    tslib_1.__extends(CourseOffering, _super);
    function CourseOffering(id) {
        var _this = _super.call(this, id) || this;
        _this.setId(id);
        _this.setType(entityType_1.entityType.COURSE_OFFERING);
        _this.setCourseNumber(null);
        _this.setAcademicSession(null);
        return _this;
    }
    CourseOffering.prototype.setCourseNumber = function (courseNumber) {
        this.courseNumber = courseNumber;
    };
    CourseOffering.prototype.setAcademicSession = function (academicSession) {
        this.academicSession = academicSession;
    };
    return CourseOffering;
}(organization_1.Organization));
exports.CourseOffering = CourseOffering;
//# sourceMappingURL=courseOffering.js.map