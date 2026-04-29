import svgPaths from "./svg-98eq2gcd8b";

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p18e4eb00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
    <div className="h-[83.188px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] left-[143.2px] text-[#3f3f3f] text-[32px] text-center top-[-1px] translate-x-[-50%] w-[191px]">Private Code Access</p>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.47px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[264px]">Only you will get a private code to securely access your information. For each transaction you will receive a private passcode code.</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="CardContent">
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
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <CardContent />
        </div>
      </div>
    </div>
  );
}