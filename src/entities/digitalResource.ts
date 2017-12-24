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
import { Entity } from './entity';
import { entityType as EntityType } from './entityType';

/**
 * Represents Digital Resource.  Analogous to a schema.org CreativeWork
 */
export class DigitalResource extends Entity {
  objectType: string[];
  alignedLearningObjective: any;
  keywords: any;
  isPartOf: any;
  datePublished: string;
  version: string;
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
  constructor(id: string) {
    super();
    this.setId(id);
    this.setType(EntityType.DIGITAL_RESOURCE);
    this.setObjectType([]);
    this.setAlignedLearningObjective([]);
    this.setKeywords([]);
    this.setIsPartOf(null);
    this.setDatePublished(null);
    this.setVersion(null);
  }
  setObjectType(objectType: string[]) {
    this.objectType = objectType;
  }

  setAlignedLearningObjective(alignedLearningObjective: any) {
    this.alignedLearningObjective = alignedLearningObjective;
  }

  setKeywords(keywords: any) {
    this.keywords = keywords;
  }

  setIsPartOf(isPartOf: any) {
    this.isPartOf = isPartOf;
  }

  setDatePublished(datePublished: string) {
    this.datePublished = datePublished;
  }

  setVersion(version: string) {
    this.version = version;
  }
}
