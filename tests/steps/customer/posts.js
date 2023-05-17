import { request } from '../../utils/requests.js'
import { getCreateUserRequestBody, getCreatePostRequestBody } from '../../utils/requestBodyGenerator/customer.js'

export async function createUser() {
    it('Create user account', async function () {
        const requestBody = await getCreateUserRequestBody()
        await request(this, 'POST', '/users', requestBody, true, 
            {
                statusCode : 201,
                expectedValues: [
                                    {path: 'name', value: requestBody.name},
                                    {path: 'gender', value: requestBody.gender},
                                    {path: 'status', value: requestBody.status},
                                    {path: 'email', value: requestBody.email}
                                ],
                executionVariables: [
                                        {path: 'id', name: 'userId'}, 
                                    ],
                expectedDataTypes: [{path: 'id', types: 'number'}]   
            }
        )
    })
}

export async function createUserPost() {
    it('Create user Post', async function () {
        const userId = global.executionVariables['userId']
        const requestBody = await getCreatePostRequestBody()
        await request(this, 'POST', '/posts/', requestBody, true, 
            {
                statusCode : 201,
                expectedValues: [
                                    {path: 'user_id', value: userId},                
                                    {path: 'title', value: requestBody.title},
                                    {path: 'body', value: requestBody.body}
                                    
                                ],
                executionVariables: [
                                        {path: 'id', name: 'postId'}, 
                                    ],
                expectedDataTypes: [{path: 'id', types: 'number'}]   
            }
        )
    })
}

export async function getUserPost() {
    it('Get User Post', async function () {
        const postId = global.executionVariables['postId']
        await request(this, 'GET',`/posts/${postId}`, undefined, true, 
        {
            statusCode : 200,
        }
        )
    })  
}

export async function deleteUserPost() {
    it('Delete user account', async function () {
        await request(this, 'DELETE',`/posts/${global.executionVariables['postId']}`, undefined, true, 
            {
                statusCode : 204,
            }
        )
    })
}

export async function deleteUser() {
    it('Delete user account', async function () {
        await request(this, 'DELETE',`/users/${global.executionVariables['userId']}`, undefined, true, 
            {
                statusCode : 204,
            }
        )
    })
}