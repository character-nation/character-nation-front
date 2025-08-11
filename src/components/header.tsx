import { Logo } from "@/assets";
import Button from "./button";

export const Header = () => {
  return (
    <div className="flex h-[52px] w-full items-center justify-center border-b border-gray-100 bg-white px-4">
      <header className="flex h-full w-full max-w-7xl items-center justify-between">
        <Logo className="h-7 w-7" />
        <div className="flex justify-center gap-2">
          <Button variant="ghost" size="sm">
            회원가입
          </Button>
          <Button size="sm">로그인</Button>
        </div>
      </header>
    </div>
  );
};
