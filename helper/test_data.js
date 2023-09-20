const { faker } = require('@faker-js/faker');

export let generatedData;

export function generateData() {
    generatedData = {
        fields: {
            assignee: {id: "61269ac0db2b4e006a1f69ec"},
            issuetype: {id: "10012"},
            labels: ["1234", "abcdf"],
            project: {id: "10002"},
            reporter: {id: "61269ac0db2b4e006a1f69ec"},
            summary: faker.word.noun()
        },
        "update": {}
    }
}
