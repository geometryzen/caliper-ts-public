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
var courseOffering_1 = require("./courseOffering");
var entityType_1 = require("../entityType");
/**
 * Represents Course.
 * CourseSection's prototype set to CourseOffering
 * @constructor
 * @param {string} id URI
 * @property {string} category String representing a Category (lecture, lab, etc.)
 * @extends Course
 */
var CourseSection = /** @class */ (function (_super) {
    tslib_1.__extends(CourseSection, _super);
    function CourseSection(id) {
        var _this = _super.call(this, id) || this;
        _this.setId(id);
        _this.setType(entityType_1.entityType.COURSE_SECTION);
        _this.setCategory(null);
        return _this;
    }
    CourseSection.prototype.setCategory = function (category) {
        this.category = category;
    };
    return CourseSection;
}(courseOffering_1.CourseOffering));
exports.CourseSection = CourseSection;
//# sourceMappingURL=courseSection.js.map