import { GoogleLogo, KakaoTalkLogo } from "@/assets"

export default function SignupOauthPage () {
    return (
        <section className="w-full gap-4 flex flex-col">
          <div className="p-1 border border-gray-200 rounded-lg">
            <button className="w-full h-13 font-medium flex justify-between items-center border-gray-200 border rounded-lg px-4 cursor-pointer">
              <GoogleLogo />
              Google로 시작하기
              <div className="w-6 h-6"></div>
            </button>
          </div>
          <button className="w-full h-13 font-medium flex justify-between items-center border-gray-200 border rounded-lg px-4 bg-[#FEE102] cursor-pointer">
            <KakaoTalkLogo />
            Kakao로 시작하기
            <div className="w-6 h-6"></div>
            </button>
        </section>
    )
}