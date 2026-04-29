function Paragraph() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Empower patients to resolve balances directly with the Practitioner</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Search for outstanding patient balances across the network (90+ days old)</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Notify patients discreetly through a secure code system</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[24px] left-0 top-[96px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Recover balances without collections, credit reporting, or added stress</p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="absolute h-[120px] left-0 top-[48px] w-[768px]" data-name="HomePage2">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}

function HomePage1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[768px]" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">PRIONET is a secure, privacy-first network that allows participating medical practices to:</p>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="absolute h-[48px] left-0 top-[192px] w-[768px]" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] top-0 w-[736px]">PRIONET is not a collection agency. It is a collaborative tool designed to maintain dignity for patients and sustainability for clinics.</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="relative size-full" data-name="Container">
      <HomePage />
      <HomePage1 />
      <HomePage2 />
    </div>
  );
}