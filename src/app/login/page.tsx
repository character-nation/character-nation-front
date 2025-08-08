import { GoogleLogo, KakaoTalkLogo } from '@/assets';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center">
      <main className="flex w-[440px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] font-medium">로그인</h1>
          <p>나만의 캐릭터를 만들고 공유하세요</p>
        </div>
        <section className="flex w-full flex-col gap-4">
          <div className="rounded-lg border border-gray-200 p-1">
            <button className="flex h-13 w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 px-4 font-medium">
              <GoogleLogo />
              Google로 시작하기
              <div className="h-6 w-6"></div>
            </button>
          </div>
          <button className="flex h-13 w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-[#FEE102] px-4 font-medium">
            <KakaoTalkLogo />
            Kakao로 시작하기
            <div className="h-6 w-6"></div>
          </button>
        </section>
        <p className="flex w-full justify-center gap-1">
          아직 회원이 아니신가요?
          <Link href="/signup">
            <u>회원가입</u>
          </Link>
        </p>
      </main>
    </div>
  );
}
