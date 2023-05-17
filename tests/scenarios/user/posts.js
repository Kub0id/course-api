import { createUser , deleteUser, createUserPost, getUserPost, deleteUserPost} from '../../steps/customer/posts.js'
import { generateTestData } from '../../utils/helpers.js'

before(async () => {
    await generateTestData()
})

it('Create user Post', () => {
    describe(`Create user Post`, async () => {
        createUser()
        createUserPost()
        getUserPost()
        deleteUserPost()
        deleteUser()
    })
})
