"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
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
var entity_1 = require("./entity");
var entityType_1 = require("./entityType");
/**
 * Represents Digital Resource.  Analogous to a schema.org CreativeWork
 */
var DigitalResource = /** @class */ (function (_super) {
    tslib_1.__extends(DigitalResource, _super);
    /**
     * @constructor
     * @param {string} id URI
     * @property {string} name Name
     * @property {string} description Description
     * @property {Object[]} properties Array of Extensions
     * @property {string[]}  objectType Array of Object Type Strings
     * @property {{string[]} } alignedLearningObjective Array of Learning Objectives
     * @property {{string[]} } keywords Array of KeyWord Strings
     * @property {Object} isPartOf Parent Object
     * @property {string} datePublished String representing a date
     * @property {string} Version String representing the version of the DigitalResource
     */
    function DigitalResource(id) {
        var _this = _super.call(this) || this;
        _this.setId(id);
        _this.setType(entityType_1.entityType.DIGITAL_RESOURCE);
        _this.setObjectType([]);
        _this.setAlignedLearningObjective([]);
        _this.setKeywords([]);
        _this.setIsPartOf(null);
        _this.setDatePublished(null);
        _this.setVersion(null);
        return _this;
    }
    DigitalResource.prototype.setObjectType = function (objectType) {
        this.objectType = objectType;
    };
    DigitalResource.prototype.setAlignedLearningObjective = function (alignedLearningObjective) {
        this.alignedLearningObjective = alignedLearningObjective;
    };
    DigitalResource.prototype.setKeywords = function (keywords) {
        this.keywords = keywords;
    };
    DigitalResource.prototype.setIsPartOf = function (isPartOf) {
        this.isPartOf = isPartOf;
    };
    DigitalResource.prototype.setDatePublished = function (datePublished) {
        this.datePublished = datePublished;
    };
    DigitalResource.prototype.setVersion = function (version) {
        this.version = version;
    };
    return DigitalResource;
}(entity_1.Entity));
exports.DigitalResource = DigitalResource;
//# sourceMappingURL=digitalResource.js.map