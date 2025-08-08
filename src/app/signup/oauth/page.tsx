import { GoogleLogo, KakaoTalkLogo } from '@/assets';

export default function SignupOauthPage() {
  return (
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
  );
}
