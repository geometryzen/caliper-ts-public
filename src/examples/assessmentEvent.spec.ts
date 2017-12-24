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

import { AssessmentEvent as Event } from '../events/assessmentEvent';

// Actor
import { Person } from '../entities/agent/person';

// Action
import { assessmentActions as AssessmentActions } from '../actions/assessmentActions';

// Activity Context
import { Assessment } from '../entities/assessment/assessment';
import { Attempt } from '../entities/assignable/attempt';

// Learning Context
import { CourseOffering } from '../entities/lis/courseOffering';
import { CourseSection } from '../entities/lis/courseSection';
import { Group } from '../entities/lis/group';
import { Membership } from '../entities/lis/membership';
import { role as Role } from '../entities/lis/role';
import { SoftwareApplication } from '../entities/agent/softwareApplication';
import { status as Status } from '../entities/lis/status';

describe("", function () {

    // The Actor for the Caliper Event
    const actor = new Person("https://example.edu/user/554433");
    actor.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
    actor.setDateModified((new Date("2015-09-02T11:30:00Z")).toISOString());

    // The Action for the Caliper Event
    const action = AssessmentActions.STARTED;

    // The Object being interacted with by the Actor (Assessment)
    const assessment = new Assessment("https://example.edu/politicalScience/2015/american-revolution-101/assessment/001");
    assessment.setName("American Revolution - Key Figures Assessment");
    assessment.setDateModified((new Date("2015-09-02T11:30:00Z")).toISOString());
    assessment.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
    assessment.setDatePublished((new Date("2015-08-15T09:30:00.000Z")).toISOString());
    assessment.setVersion("1.0");
    assessment.setDateToActivate((new Date("2015-08-16T05:00:00.000Z")).toISOString());
    assessment.setDateToShow((new Date("2015-08-16T05:00:00.000Z")).toISOString());
    assessment.setDateToStartOn((new Date("2015-08-16T05:00:00.000Z")).toISOString());
    assessment.setDateToSubmit((new Date("2015-09-28T11:59:59.000Z")).toISOString());
    assessment.setMaxAttempts(2);
    assessment.setMaxSubmits(2);
    assessment.setMaxScore(3.0);

    // The target object (frame) within the Event Object
    var target = null;

    // The generated object (Attempt) within the Event Object
    const generated = new Attempt(assessment['@id'] + "/attempt/5678");
    generated.setActor(actor['@id']);
    generated.setAssignable(assessment['@id']);
    generated.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
    generated.setCount(1);
    generated.setStartedAtTime((new Date("2015-09-15T10:15:00Z")).toISOString());

    // The edApp
    const edApp = new SoftwareApplication("https://example.com/super-assessment-tool");
    edApp.setName("Super Assessment Tool");
    edApp.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
    edApp.setDateModified(null);

    // LIS Course Offering
    const courseOffering = new CourseOffering("https://example.edu/politicalScience/2015/american-revolution-101");
    courseOffering.setName("Political Science 101: The American Revolution");
    courseOffering.setCourseNumber("POL101");
    courseOffering.setAcademicSession("Fall-2015");
    courseOffering.setSubOrganizationOf(null);
    courseOffering.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
    courseOffering.setDateModified((new Date("2015-09-02T11:30:00Z")).toISOString());

    // LIS Course Section
    const courseSection = new CourseSection(courseOffering['@id'] + "/section/001");
    courseSection.setName("American Revolution 101");
    courseSection.setCourseNumber("POL101");
    courseSection.setAcademicSession("Fall-2015");
    courseSection.setSubOrganizationOf(courseOffering);
    courseSection.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());
    courseSection.setDateModified((new Date("2015-09-02T11:30:00Z")).toISOString());

    // LIS Group
    const group = new Group(courseSection['@id'] + "/group/001");
    group.setName("Discussion Group 001");
    group.setSubOrganizationOf(courseSection);
    group.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());

    // The Actor's Membership
    const membership = new Membership(courseOffering['@id'] + "/roster/554433");
    membership.setName("American Revolution 101");
    membership.setDescription("Roster entry");
    membership.setMember(actor['@id']);
    membership.setOrganization(courseSection['@id']);
    membership.setRoles([Role.LEARNER]);
    membership.setStatus(Status.ACTIVE);
    membership.setDateCreated((new Date("2015-08-01T06:00:00Z")).toISOString());

    // Assert that key attributes are the same
    const event = new Event();
    event.setActor(actor);
    event.setAction(action);
    event.setObject(assessment);
    event.setTarget(target);
    event.setGenerated(generated);
    event.setEventTime((new Date("2015-09-15T10:15:00Z")).toISOString());
    event.setEdApp(edApp);
    event.setGroup(group);
    event.setMembership(membership);

    // console.log("Assessment Event = " + util.inspect(event));

    // Assert that JSON produced is the same
    // jsonCompare('caliperAssessmentEvent', event, t);

    it("", function () {
        expect()
    })
})