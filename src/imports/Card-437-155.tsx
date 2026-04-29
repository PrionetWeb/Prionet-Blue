import svgPaths from "./svg-p6uvw3gem3";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p19fddb00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ContactPage() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] flex-[1_0_0] min-h-px min-w-px relative rounded-[16px] w-[48px]" data-name="ContactPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function ContactPage1() {
  return (
    <div className="h-[31.188px] relative shrink-0 w-[164.172px]" data-name="ContactPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Business Hours</p>
      </div>
    </div>
  );
}

function ContactPage2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[118.016px]" data-name="ContactPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[59.5px] text-[#3f3f3f] text-[16px] text-center top-0">Monday - Friday</p>
      </div>
    </div>
  );
}

function ContactPage3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[167.453px]" data-name="ContactPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[84px] text-[#3f3f3f] text-[16px] text-center top-0">8:00 AM - 6:00 PM PST</p>
      </div>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[208.188px] relative shrink-0 w-[234px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[11px] items-center py-[24px] relative size-full">
        <ContactPage />
        <ContactPage1 />
        <ContactPage2 />
        <ContactPage3 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start pb-px pl-[26px] pr-px pt-[26px] relative rounded-[16px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent />
    </div>
  );
}