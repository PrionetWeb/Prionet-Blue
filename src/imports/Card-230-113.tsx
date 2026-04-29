import svgPaths from "./svg-oxapwv7z5h";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3e1784c0} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomePage() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon />
    </div>
  );
}

function HomePage1() {
  return (
    <div className="content-stretch flex h-[41.594px] items-start relative shrink-0 w-full" data-name="HomePage2">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] relative shrink-0 text-[#3f3f3f] text-[32px] text-center text-nowrap">You Stay in Control</p>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.2px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[283px]">Make a payment arrangement with your practitioner, outside of PRIONET.</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[245.594px] relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage />
        <HomePage1 />
        <HomePage2 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pl-[25px] pr-px pt-[25px] relative size-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}