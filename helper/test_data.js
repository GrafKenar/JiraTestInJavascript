const { faker } = require('@faker-js/faker');


export class GeneratedData {
    constructor() {
        this.generatedValidData = {
            fields: {
                assignee: { id: faker.helpers.arrayElement(["61269ac0db2b4e006a1f69ec", "61f4116158ce4f0068ae099d"]) },
                issuetype: { id: faker.helpers.arrayElement(["10012", "10009", "10014"]) },
                labels: [faker.helpers.arrayElement(["1234", "abcdf"])],
                project: { id: "10002" },
                reporter: { id: faker.helpers.arrayElement(["61269ac0db2b4e006a1f69ec", "61f4116158ce4f0068ae099d"]) },
                summary: faker.word.noun()
            },
            "update": {}
        }
    }

    get getGeneratedValidData() {
        return this.generatedValidData;
    }
}