export async function generateTestData() {
    setEnvironment(process.argv.slice(process.argv.length - 1)[0])
}

function setEnvironment(env) {
    global.env = env
}

export async function generateRandomEmail() {
    const email = `${Math.random().toString(36).substring(2,11)}@domain.com`
    global.executionVariables['userEmail'] = email
    return email
}