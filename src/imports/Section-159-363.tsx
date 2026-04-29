function AboutPage() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="AboutPage">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Our Mission
      </p>
    </div>
  );
}

function AboutPage1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="AboutPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.09px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[801px]">PPN’s mission is to securely connect practitioners and patients with the information they need to manage and resolve medical payments over 90 days old—promoting clarity, accountability, and trust throughout the healthcare financial journey.</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[153.594px] items-start relative shrink-0 w-full" data-name="Container">
      <AboutPage />
      <AboutPage1 />
    </div>
  );
}

function AboutPage2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[718px]" data-name="AboutPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[358.5px] text-[#3f3f3f] text-[16px] text-center top-[-11.59px] translate-x-[-50%] w-[733px]">The Prionet Provider Network (PPN) is built on privacy, security, and ethical debt management. We empower practitioners and patients to collaboratively reduce outstanding medical balances, to ensure continued access to healthcare. PPN promotes fairness by enabling patients to challenge or dispute balances, fostering a transparent, accountable, and HIPAA-compliant environment for all parties.</p>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-white h-[186px] relative rounded-[16px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#cccccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[57px] pr-px py-[57px] relative size-full">
          <AboutPage2 />
        </div>
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-[rgba(229,231,235,0.2)] relative size-full" data-name="Section">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start px-[32px] py-0 relative size-full">
          <Container />
          <Card />
        </div>
      </div>
    </div>
  );
}