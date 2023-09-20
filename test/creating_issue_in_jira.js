import {generateData, generatedData} from "../helper/test_data";
import {createIssueWithParameters, deleteIssue, receiveInfoAboutIssue} from "../methods/crud_methods";
import {TOKEN} from "../config/supertest";
import {checkThatReceivedIssueDataIsCorrect} from "../methods/asserts";

describe('Given: logged user When: creates an issue Then: the issue is saved', () => {
    let idOfCreatedIssue;

    before('generate test data for the test', async () => {
        await generateData();
    })

    it('POST /issue', async () => {
        let createdIssueData = await createIssueWithParameters(generatedData, TOKEN);

        idOfCreatedIssue = createdIssueData.body.id;

        let receivedIssueData = await receiveInfoAboutIssue(idOfCreatedIssue, TOKEN);

        checkThatReceivedIssueDataIsCorrect(receivedIssueData, generatedData, idOfCreatedIssue)
    })

    after('clean-up: deleting created issue', async () => {
       await deleteIssue(idOfCreatedIssue, TOKEN)
    });
})
