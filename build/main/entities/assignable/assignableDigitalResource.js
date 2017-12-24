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
var digitalResource_1 = require("../digitalResource");
var digitalResourceType_1 = require("../digitalResourceType");
/**
 * Represents AssignableDigitalResource.
 * AssignableDigitalResource's prototype set to DigitalResource
 * @constructor
 * @param {string} id URI
 * @param {string} type Type
 * @property {string} dateCreated String representation of Date
 * @property {string} dateToActivate String representation of Date
 * @property {string} dateToShow String representation of Date
 * @property {string} dateToStartOn String representation of Date
 * @property {string} dateToSubmit String representation of Date
 * @property {number} maxAttempts Maximum attempts
 * @property {number} maxSubmits  Maximum submits
 * @property {number} maxScore Maximum scores
 * @extends DigitalResource
 */
var AssignableDigitalResource = /** @class */ (function (_super) {
    tslib_1.__extends(AssignableDigitalResource, _super);
    function AssignableDigitalResource(id) {
        var _this = _super.call(this, id) || this;
        // FIXME
        _this.setId(id);
        _this.setType(digitalResourceType_1.digitalResourceType.ASSIGNABLE_DIGITAL_RESOURCE);
        _this.setDateToActivate(null);
        _this.setDateToShow(null);
        _this.setDateToStartOn(null);
        _this.setDateToSubmit(null);
        _this.setMaxAttempts(null);
        _this.setMaxSubmits(null);
        _this.setMaxScore(null);
        return _this;
    }
    AssignableDigitalResource.prototype.setDateCreated = function (dateCreated) {
        this.dateCreated = dateCreated;
    };
    AssignableDigitalResource.prototype.setDateToActivate = function (dateToActivate) {
        this.dateToActivate = dateToActivate;
    };
    AssignableDigitalResource.prototype.setDateToShow = function (dateToShow) {
        this.dateToShow = dateToShow;
    };
    AssignableDigitalResource.prototype.setDateToStartOn = function (dateToStartOn) {
        this.dateToStartOn = dateToStartOn;
    };
    AssignableDigitalResource.prototype.setDateToSubmit = function (dateToSubmit) {
        this.dateToSubmit = dateToSubmit;
    };
    AssignableDigitalResource.prototype.setMaxAttempts = function (maxAttempts) {
        this.maxAttempts = maxAttempts;
    };
    AssignableDigitalResource.prototype.setMaxSubmits = function (maxSubmits) {
        this.maxSubmits = maxSubmits;
    };
    AssignableDigitalResource.prototype.setMaxScore = function (maxScore) {
        this.maxScore = maxScore;
    };
    return AssignableDigitalResource;
}(digitalResource_1.DigitalResource));
exports.AssignableDigitalResource = AssignableDigitalResource;
//# sourceMappingURL=assignableDigitalResource.js.map