import svgPaths from "./svg-sbz93gy2bc";

function Container() {
  return (
    <div className="bg-blue-600 relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">2</p>
      </div>
    </div>
  );
}

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

function ServicesPage() {
  return (
    <div className="content-stretch flex gap-[12px] h-[40px] items-center relative shrink-0 w-full" data-name="ServicesPage">
      <Container />
      <Icon />
    </div>
  );
}

function ServicesPage1() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Practitioner’s Choice</p>
    </div>
  );
}

function ServicesPage2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[427px]">The system returns only whether the patient has outstanding medical debt, never revealing specific amounts, creditors, or other sensitive details.</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[219.188px] relative shrink-0 w-[490.672px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[16px] h-[219.188px] items-start pb-0 pt-[24px] px-[24px] relative w-[490.672px]">
        <ServicesPage />
        <ServicesPage1 />
        <ServicesPage2 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-start p-px relative rounded-[12px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent />
    </div>
  );
}