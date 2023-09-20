import {expect} from "chai";

export function checkThatReceivedIssueDataIsCorrect(actualResults, expectedResults, idOfCreatedIssue,){
    expect(actualResults.body.id).to.equal(idOfCreatedIssue);
    expect(actualResults.body.fields.summary).to.equal(expectedResults.fields.summary);
}