import svgPaths from "./svg-9szj6qwrbj";

function Paragraph() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] w-[428px]">A secure platform connecting healthcare practitioners and patients to resolve outstanding medical bills over 90 days old thus sustaining our healthcare system and ensuring both (practitioners and patients) can thrive.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p3e7f1900} fill="var(--fill-0, #3F3F3F)" id="Vector" />
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="content-stretch flex flex-col items-start relative rounded-[4px] shrink-0 size-[20px]" data-name="Link">
      <Icon />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Section">
      <p className="font-['Outfit:Bold',sans-serif] font-bold h-[42px] leading-[41.6px] relative shrink-0 text-[32px] text-blue-600 w-[493.703px]">Priority Pay Network</p>
      <Paragraph />
      <Link />
    </div>
  );
}