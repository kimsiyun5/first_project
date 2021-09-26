Kakao.init('af313d8b90aca9b4f05a809c2c2b2ed3');
console.log(Kakao.isInitialized());

// function kakaoLogin() {
//   Kakao.Auth.authorize({
//     redirectUri: 'http://localhost:8080/first_project/index.html'
//   });
// }

const URLSearch = new URLSearchParams(location.search);
if (URLSearch.get('code')) {

}

// function test() {
//   Kakao.API.request({
//     url: '/v2/user/me',
//     success: function(response) {
//       console.log(response);
//       alert("당신의 이메일은 " +response.kakao_account.email +"입니다");
//     },
//     fail: function(error) {
//       console.log(error)
//     },
//   })
// }

function kakaoLogin() {
  Kakao.Auth.login({
    success: function(response) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
          console.log(response);
          alert("당신의 이메일은 " +response.kakao_account.email +"입니다");
        },
        fail: function(error) {
          console.log(error)
        },
      })
    },
    fail: function(error) {
      console.log(error)
    },
  })
}

function kakaoLogout() {
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        console.log(response)
      },
      fail: function(error) {
        console.log(error)
      },
    })
    Kakao.Auth.setAccessToken(undefined)
  }
}

// console.log(Kakao.Auth);
