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
var entity_1 = require("../entity");
var entityType_1 = require("../entityType");
/**
 * Represents an LTI W3C Organization.
 * Organization's prototype set to Entity.
 * @constructor
 * @param {string} id URI
 * @property {Object} subOrganizationOf Parent Organization Object
 * @extends Agent
 */
var Organization = /** @class */ (function (_super) {
    tslib_1.__extends(Organization, _super);
    function Organization(id) {
        var _this = _super.call(this) || this;
        _this.setId(id);
        _this.setType(entityType_1.entityType.ORGANIZATION);
        _this.setSubOrganizationOf(null);
        return _this;
    }
    Organization.prototype.setSubOrganizationOf = function (subOrganizationOf) {
        this.subOrganizationOf = subOrganizationOf;
    };
    return Organization;
}(entity_1.Entity));
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map