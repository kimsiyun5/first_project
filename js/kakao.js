Kakao.init('af313d8b90aca9b4f05a809c2c2b2ed3');

// function kakaoLogin() {
//     Kakao.Auth.authorize({
//         redirectUri: 'https://kimsiyun5.github.io/first_project/index.html',
//         success: function() {
//             if (ACCESS_TOKEN) {
//                 Kakao.Auth.setAccessToken(ACCESS_TOKEN);
//             }
//         }
//     });
// }
function kakaoLogin() {
    Kakao.Auth.login({
      success: function (response) {
        Kakao.API.request({
          url: '/v2/user/me',
          success: function (response) {
        	  console.log(response)
          },
          fail: function (error) {
            console.log(error)
          },
        })
      },
      fail: function (error) {
        console.log(error)
      },
    })
  }

console.log(Kakao.Auth);