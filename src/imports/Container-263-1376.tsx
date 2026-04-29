import svgPaths from "./svg-r4jrtxs5k7";

function Info() {
  return (
    <div className="content-stretch flex flex-col h-[269px] items-start relative shrink-0" data-name="info">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[67.2px] relative shrink-0 text-[56px] text-white w-[714px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medical Balance Management. Helping Patients Find Relief, and Clinics Stay Strong.
      </p>
    </div>
  );
}

function MoreInfo() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="more info">
      <div className="font-['Outfit:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[16px] text-[rgba(255,255,255,0.9)] w-[736px]">
        <p className="mb-0">{`PRIONET is NOT a collection agency. `}</p>
        <p>It is a collaborative tool designed to maintain dignity for patients and sustainability for clinics.</p>
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[203.02px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9 3L14 8M14 8L9 13M14 8H2" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="bg-[#2563eb] h-[44px] overflow-clip relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[231.016px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] left-[12px] text-[16px] text-nowrap text-white top-[10.58px]">Practitioner Portal Login</p>
      <Icon />
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="bg-[#ccc] content-stretch flex h-[44px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[168.203px]" data-name="SlotClone">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] relative shrink-0 text-[#3f3f3f] text-[16px] text-nowrap">Patient portal login</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <SlotClone />
      <SlotClone1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2c926180} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-0">HIPAA Compliant</p>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146.375px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon1 />
        <Text />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p2bc7b900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.8)] text-nowrap top-0">Privacy Protected</p>
      </div>
    </div>
  );
}

function HomePage1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[150.406px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon2 />
        <Text1 />
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex gap-[24px] h-[24px] items-center relative shrink-0 w-full" data-name="badge">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

export default function Container1() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative size-full" data-name="Container">
      <Info />
      <MoreInfo />
      <Container />
      <Badge />
    </div>
  );
}