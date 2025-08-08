import Button from '@/components/button';
import { Toggle } from '@/components/toggle';
import { categoryData } from '@/constants/categories';

export default function SignupCategoryPage() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium">관심 카테고리</p>
          <div className="flex flex-wrap gap-2">
            {categoryData.map((category, i) => (
              <Toggle value={category} key={i} />
            ))}
          </div>
        </div>
        <p className="text-xs text-[#6c6c6c]">하나 이상 선택해주세요. 이후 변경이 가능합니다.</p>
      </div>
      <Button>완료</Button>
    </>
  );
}
