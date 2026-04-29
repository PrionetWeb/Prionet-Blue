import svgPaths from "./svg-fi8jfb0b7j";

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb67ee00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Compassion Sustainability</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0 whitespace-pre">Keep clinic open, respected and financially healthy</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[63.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[63.188px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function ServicesPage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-full items-start relative w-[542px]">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[12px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage />
        </div>
      </div>
    </div>
  );
}