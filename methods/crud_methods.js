import REQUEST from "../config/supertest";

export function createIssueWithParameters(data, token) {
    return REQUEST
        .post(`/issue`)
        .set('Authorization', `Basic ${token}`)
        .send(data)
        .expect((res) => { if (res.statusCode !== 201) { console.log("POST request wasn't successful, the response is:"); console.log(res.body); } })
        .expect(201);
}

export function receiveInfoAboutIssue(issueId, token) {
    return REQUEST
        .get(`/issue/${issueId}`)
        .set('Authorization', `Basic ${token}`)
        .expect((res) => { if (res.statusCode !== 200) { console.log("GET request wasn't successful, the response is:"); console.log(res.body); } })
        .expect(200);
}

export function deleteIssueAsCleanUp(issueId, token) {
    return REQUEST
        .delete(`/issue/${issueId}`)
        .set('Authorization', `Basic ${token}`)
}
