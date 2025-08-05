import { Logo } from "@/assets";
import Button from "./button";

export const Header = () => {
  return (
    <div className="w-full h-14 border-b border-gray-100 flex items-center justify-center">
      <header className="flex justify-between h-full items-center w-320">
        <Logo className="w-7 h-7" />
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
