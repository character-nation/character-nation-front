import { GoogleLogo, KakaoTalkLogo } from "@/assets";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center">
      <main className="flex flex-col w-[440px] gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] font-medium">로그인</h1>
          <p>나만의 캐릭터를 만들고 공유하세요</p>
        </div>
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
        <p className="flex justify-center w-full gap-1">
          아직 회원이 아니신가요?
          <Link href="/signup">
            <u>회원가입</u>
          </Link>
        </p>
      </main>
    </div>
  );
}
