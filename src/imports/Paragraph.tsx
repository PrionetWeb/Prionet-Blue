function BulletList() {
  return (
    <div className="content-stretch flex flex-col h-[96px] items-start relative shrink-0 text-nowrap w-[533.5px] whitespace-pre" data-name="bullet list">
      <p className="relative shrink-0">• Empower patients to resolve balances directly with the Practitioner</p>
      <p className="relative shrink-0">• Search for outstanding patient balances across the network (90+ days old)</p>
      <p className="relative shrink-0">• Notify patients discreetly through a secure code system</p>
      <p className="relative shrink-0">• Recover funds without collections, credit reporting, or added stress</p>
    </div>
  );
}

export default function Paragraph() {
  return (
    <div className="content-stretch flex flex-col font-['Outfit:Regular',sans-serif] font-normal gap-[24px] items-start leading-[24px] relative size-full text-[16px] text-[rgba(255,255,255,0.9)]" data-name="Paragraph">
      <p className="min-w-full relative shrink-0 w-[min-content]">PRIONET is a secure, privacy-first network that allows participating medical practices to:</p>
      <BulletList />
      <p className="min-w-full relative shrink-0 w-[min-content]">PRIONET is not a collection agency. It is a collaborative tool designed to maintain dignity for patients and sustainability for clinics.</p>
    </div>
  );
}