import { expect } from "chai";
import REQUEST from "../config/supertest";

export function createIssueWithParameters(data, token) {
    return REQUEST
        .post(`/issue`)
        .set('Authorization', `Basic ${token}`)
        .send(data)
        .expect(201);
}

export function receiveInfoAboutIssue(issueId, token) {
    return REQUEST
        .get(`/issue/${issueId}`)
        .set('Authorization', `Basic ${token}`)
        .expect(200);
}

export function deleteIssue(issueId, token) {
    return REQUEST
        .delete(`/issue/${issueId}`)
        .set('Authorization', `Basic ${token}`)
        .expect(204);
}
