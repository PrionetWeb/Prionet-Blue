function Container() {
  return (
    <div className="h-[40px] relative shrink-0 w-[36px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[40px] left-0 text-[#3f3f3f] text-[36px] text-nowrap top-0">🛡️</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Secure Access</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[398px]">Collaboration. PRIONET is designed for all patient and clinic scenarios, including insured, underinsured, and uninsured, to keep people healthy and clinics open.</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[91.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[494px]" data-name="AboutPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container />
        <Container1 />
      </div>
    </div>
  );
}

export default function Card() {
  return (
    <div className="bg-white relative rounded-[16px] size-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[49px] pr-px py-[49px] relative size-full">
          <AboutPage />
        </div>
      </div>
    </div>
  );
}