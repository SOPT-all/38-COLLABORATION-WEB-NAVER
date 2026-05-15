import { OrderSheetHeader } from "@/pages/order-sheet/components/order-sheet-header/OrderSheetHeader";

export function OrderSheetPage() {
  return (
    <div className='flex min-h-screen flex-col gap-[31px] bg-gray-300'>
      <OrderSheetHeader className='pt-[72px] pr-[16px] pb-[12px] pl-[16px]' />

      <main className='flex flex-col gap-[40px] px-[16px] pb-[16px]'>
        컴포넌트 영역
      </main>
    </div>
  );
}
