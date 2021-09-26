Kakao.init('af313d8b90aca9b4f05a809c2c2b2ed3');
console.log(Kakao.isInitialized());

function kakaoLogin() {
  Kakao.Auth.login({
    success: function(response) {
      Kakao.API.request({
        url: '/v2/user/me',
        success: function(response) {
          console.log(response);
          if (response.kakao_account.email) {
            alert("안녕하세요 " +response.kakao_account.profile.nickname +"님\n당신의 이메일은 " +response.kakao_account.email +"입니다");
          } else {
            alert("안녕하세요 " +response.kakao_account.profile.nickname +"님");
          }
        },
        fail: function(error) {
          console.log(error);
        },
      })
    },
    fail: function(error) {
      console.log(error);
    },
  })
}

function kakaoLogout() {
  if (Kakao.Auth.getAccessToken()) {
    Kakao.API.request({
      url: '/v1/user/unlink',
      success: function(response) {
        console.log(response);
        alert("로그아웃되었습니다");
      },
      fail: function(error) {
        console.log(error);
      },
    })
    Kakao.Auth.setAccessToken(undefined);
  } else {
    alert("이미 로그아웃 되었습니다");
  }
}
