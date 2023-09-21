import { expect } from "chai";

export function checkThatReceivedIssueDataIsCorrect(actualResults, expectedResults, idOfCreatedIssue,) {
    expect(actualResults.body.id).to.equal(idOfCreatedIssue);
    expect(actualResults.body.fields.assignee.accountId).to.equal(expectedResults.fields.assignee.id);
    expect(actualResults.body.fields.issuetype.id).to.equal(expectedResults.fields.issuetype.id);
    expect(actualResults.body.fields.labels).to.include.all.members(expectedResults.fields.labels);
    expect(actualResults.body.fields.project.id).to.equal(expectedResults.fields.project.id);
    expect(actualResults.body.fields.reporter.accountId).to.equal(expectedResults.fields.reporter.id);
    expect(actualResults.body.fields.summary).to.equal(expectedResults.fields.summary);
}