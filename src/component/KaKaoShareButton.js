import React from "react";

const { Kakao } = window;
const KakaoShareButton = () => {

  const url = "https://orchestra-mbti.netlify.app/";
  const resultUrl = window.location.href;

  console.log("ㅇㅇㅇ", url, resultUrl);

    React.useEffect(()=>{
      Kakao.cleanup();
      Kakao.init("9685162cb0794a6e59f5e54dc32b7b10");
      console.log(Kakao.isInitialized());
    },[]);

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '오케스트라 MBTI TEST 결과',
          description: '일단아무거나',
          imageUrl:
            'https://mud-kage.kakao.com/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
        buttons: [
          {
            title: '나도 테스트 하러가기',
            link: {
              mobileWebUrl: 'https://orchestra-mbti.netlify.app/',
            },
          },
        ],
      });

      return(
        <Button>카카오톡 공유하기</Button>
      )
}

export default KakaoShareButton;
