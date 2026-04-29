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

export default function HomePage() {
  return (
    <div className="relative size-full" data-name="HomePage2">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
      <Paragraph3 />
    </div>
  );
}