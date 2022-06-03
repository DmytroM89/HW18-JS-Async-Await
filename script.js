// ------------- # 1
async function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getUserInfo() {
    await delay(1000);
    return { name: 'Vic', age: 21, id: 1 };
}

async function getUserAvatar(userInfo) {
    userInfo.avatar = 'https://previews.123rf.com/images/stockgiu/stockgiu1708/stockgiu170802061/83728179-avatar-sketch-of-a-funny-man-s-haed-with-sunglasses-and-hairstyle-design.jpg';
    await delay(1000);

    return userInfo;
}

async function getUserAdditionalInfo(userInfo) {
    userInfo.interests = ['sport', 'books'];
    await delay(1000);

    return userInfo;
}

async function getResult() {
    let userInfo = await getUserInfo();
    await getUserAvatar(userInfo);
    await getUserAdditionalInfo(userInfo);

    console.log('------------- # 1', userInfo);
}

getResult();

// ------------- # 2
async function getUser() {
    return { name: 'Vic', age: 21, id: 1 };
}
async function getInfo() {
    try {
        let user = await getUser();
        throw new Error('error');
    } catch(err) {
        console.warn('------------- # 2', err);
    }
}

getInfo();
