Kakao.init('af313d8b90aca9b4f05a809c2c2b2ed3');

function kakaoLogin() {
    Kakao.Auth.authorize({
        redirectUri: 'https://kimsiyun5.github.io/first_project/index.html'
    });
}
