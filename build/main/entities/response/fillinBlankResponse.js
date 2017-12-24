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
var response_1 = require("./response");
var responseType_1 = require("./responseType");
/**
 * Represents FillinBlankResponse.
 * FillinBlankResponse's prototype set to Response
 * @constructor
 * @param {string} id URI
 * @property {Object[]} values Array of response values
 * @extends Response
 */
var FillinBlankResponse = /** @class */ (function (_super) {
    tslib_1.__extends(FillinBlankResponse, _super);
    function FillinBlankResponse(id) {
        var _this = _super.call(this, id) || this;
        _this.setId(id);
        _this.setType(responseType_1.responseType.FILLINBLANK);
        _this.setValues(null);
        return _this;
    }
    FillinBlankResponse.prototype.setValues = function (values) {
        this.values = values;
    };
    return FillinBlankResponse;
}(response_1.Response));
exports.FillinBlankResponse = FillinBlankResponse;
//# sourceMappingURL=fillinBlankResponse.js.map