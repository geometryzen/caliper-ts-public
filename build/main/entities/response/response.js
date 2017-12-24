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
 * Represents Response.
 * Response's prototype set to Entity
 * @constructor
 * @param {string} id URI
 * @param {string} type Type
 * @property {string} assignable URI representing Assignment being attempted
 * @property {string} actor URI representing Actor attempted
 * @property {Object} attempt representing attempt
 * @property {string} startedAtTime String Representation of Date
 * @property {string} endedAtTime String Representation of Date
 * @property {string} duration The format is expected to be PnYnMnDTnHnMnS
 * @extends Entity
 */
var Response = /** @class */ (function (_super) {
    tslib_1.__extends(Response, _super);
    function Response(id) {
        var _this = _super.call(this) || this;
        _this.setId(id);
        _this.setType(entityType_1.entityType.RESPONSE);
        _this.setActor(null);
        _this.setAssignable(null);
        _this.setAttempt(null);
        _this.setStartedAtTime(null);
        _this.setEndedAtTime(null);
        _this.setDuration(null);
        return _this;
    }
    Response.prototype.setAssignable = function (assignableId) {
        this.assignable = assignableId;
    };
    Response.prototype.setActor = function (actorId) {
        this.actor = actorId;
    };
    Response.prototype.setAttempt = function (attempt) {
        this.attempt = attempt;
    };
    Response.prototype.setStartedAtTime = function (startedAtTime) {
        this.startedAtTime = startedAtTime;
    };
    Response.prototype.setEndedAtTime = function (endedAtTime) {
        this.endedAtTime = endedAtTime;
    };
    Response.prototype.setDuration = function (duration) {
        this.duration = duration;
    };
    return Response;
}(entity_1.Entity));
exports.Response = Response;
//# sourceMappingURL=response.js.map