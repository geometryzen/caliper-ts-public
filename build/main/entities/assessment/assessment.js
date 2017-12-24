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
var Assessment = /** @class */ (function (_super) {
    tslib_1.__extends(Assessment, _super);
    function Assessment(id /*, type: string*/) {
        var _this = _super.call(this, id) || this;
        // FIXME: redundancy
        _this.setId(id);
        // FXME: type parameter is not being used.
        _this.setType(assignableDigitalResourceType_1.assignableDigitalResourceType.ASSESSMENT);
        return _this;
    }
    return Assessment;
}(assignableDigitalResource_1.AssignableDigitalResource));
exports.Assessment = Assessment;
//# sourceMappingURL=assessment.js.map