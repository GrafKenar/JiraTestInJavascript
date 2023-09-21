import { GeneratedData } from "../helper/test_data";
import { createIssueWithParameters, deleteIssue, receiveInfoAboutIssue } from "../methods/crud_methods";
import { TOKEN } from "../config/supertest";
import { checkThatReceivedIssueDataIsCorrect } from "../methods/asserts";

describe('Given: logged user When: creates an issue Then: the issue is saved and available', () => {
    let idOfCreatedIssue;
    let testData;

    before('generate test data for the test', async () => {
        let generator = await new GeneratedData();
        testData = await generator.getGeneratedData;
    })

    it('POST /issue', async () => {
        let createdIssueData = await createIssueWithParameters(testData, TOKEN);

        idOfCreatedIssue = createdIssueData.body.id;

        let receivedIssueData = await receiveInfoAboutIssue(idOfCreatedIssue, TOKEN);

        await checkThatReceivedIssueDataIsCorrect(receivedIssueData, testData, idOfCreatedIssue)
    })

    after('clean-up: deleting created issue', async () => {
        await deleteIssue(idOfCreatedIssue, TOKEN)
    });
})
