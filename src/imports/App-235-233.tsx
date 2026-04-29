import svgPaths from "./svg-8kjpn08dhl";
import imgImageWithFallback from "figma:asset/afcde4263282c80b75d78e5ade359f73c1dbae80.png";
import imgImageWithFallback1 from "figma:asset/dd91655823aa215811db66ecb73cccd7607f086a.png";

function HomePage() {
  return (
    <div className="absolute content-stretch flex h-[57.594px] items-start left-0 top-0 w-[1216px]" data-name="HomePage2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why Choose a PRIONET Practitioner
      </p>
    </div>
  );
}

function HomePage1() {
  return (
    <div className="absolute h-[48px] left-[224px] top-[73.59px] w-[768px]" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[384.23px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[752px]">{`When your healthcare provider is part of PRIONET, you're supported by a system that values transparency, privacy, and fairness. Here's what that means for you.`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[121.594px] relative shrink-0 w-full" data-name="Container">
      <HomePage />
      <HomePage1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p35455500} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomePage2() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon />
    </div>
  );
}

function HomePage3() {
  return (
    <div className="content-stretch flex h-[41.594px] items-start relative shrink-0 w-full" data-name="HomePage2">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px] text-center">No Surprises</p>
    </div>
  );
}

function HomePage4() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.06px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[280px]">{`Your practitioner could see if you have outstanding balances before scheduling new services, so you're never caught off guard or turned away unexpectedly.`}</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[245.594px] relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage2 />
        <HomePage3 />
        <HomePage4 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337.188px] items-start left-0 pb-px pl-[25px] pr-px pt-[25px] rounded-[16px] top-0 w-[384px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p32a1ba00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomePage5() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon1 />
    </div>
  );
}

function HomePage6() {
  return (
    <div className="h-[83.188px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] left-[143.41px] text-[#3f3f3f] text-[32px] text-center top-[-1px] translate-x-[-50%] w-[185px]">Your Privacy Matters</p>
    </div>
  );
}

function HomePage7() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.41px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[273px]">PRIONET protects your information. Practitioners see only whether a balance exists, not the amount, not the details. You stay in control.</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage5 />
        <HomePage6 />
        <HomePage7 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337.188px] items-start left-[416px] pl-[25px] pr-px py-[25px] rounded-[16px] top-0 w-[384px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p25602d00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomePage8() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon2 />
    </div>
  );
}

function HomePage9() {
  return (
    <div className="h-[83.188px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] left-[143.25px] text-[#3f3f3f] text-[32px] text-center top-[-1px] translate-x-[-50%] w-[257px]">No One Sees Your Balance</p>
    </div>
  );
}

function HomePage10() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.13px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[286px]">{`Not even the practitioner's staff can view your specific balance amounts, only that a balance exists.`}</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="h-[263.188px] relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage8 />
        <HomePage9 />
        <HomePage10 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337.188px] items-start left-[832px] pb-px pl-[25px] pr-px pt-[25px] rounded-[16px] top-0 w-[384px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p18e4eb00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomePage11() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon3 />
    </div>
  );
}

function HomePage12() {
  return (
    <div className="h-[83.188px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] left-[143.2px] text-[#3f3f3f] text-[32px] text-center top-[-1px] translate-x-[-50%] w-[191px]">Private Code Access</p>
    </div>
  );
}

function HomePage13() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.47px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[264px]">{`Only you will get a private passcode to securely access your information. `}</p>
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage11 />
        <HomePage12 />
        <HomePage13 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337.188px] items-start left-0 pl-[25px] pr-px py-[25px] rounded-[16px] top-[369.19px] w-[384px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent3 />
    </div>
  );
}

function Icon4() {
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

function HomePage14() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon4 />
    </div>
  );
}

function HomePage15() {
  return (
    <div className="content-stretch flex h-[41.594px] items-start relative shrink-0 w-full" data-name="HomePage2">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] relative shrink-0 text-[#3f3f3f] text-[32px] text-center text-nowrap">You Stay in Control</p>
    </div>
  );
}

function HomePage16() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.17px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[265px]">Your payment arrangement is between you and your practitioner, outside of PRIONET.</p>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="h-[221.594px] relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage14 />
        <HomePage15 />
        <HomePage16 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337.188px] items-start left-[416px] pb-px pl-[25px] pr-px pt-[25px] rounded-[16px] top-[369.19px] w-[384px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent4 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p232bc600} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function HomePage17() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-center relative shrink-0 w-full" data-name="HomePage2">
      <Icon5 />
    </div>
  );
}

function HomePage18() {
  return (
    <div className="h-[83.188px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Bold',sans-serif] font-bold leading-[41.6px] left-[143.36px] text-[#3f3f3f] text-[32px] text-center top-[-1px] translate-x-[-50%] w-[259px]">Resolved Without Shame</p>
    </div>
  );
}

function HomePage19() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[143.27px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[242px]">Once resolved, your information is updated or removed quietly. No judgment, no embarrassment, just resolution and peace of mind.</p>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[334px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <HomePage17 />
        <HomePage18 />
        <HomePage19 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[337.188px] items-start left-[832px] pl-[25px] pr-px py-[25px] rounded-[16px] top-[369.19px] w-[384px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <CardContent5 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[706.375px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
      <Card5 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute bg-[rgba(229,231,235,0.2)] content-stretch flex flex-col gap-[48px] h-[875.969px] items-start left-[123.5px] px-[32px] py-0 top-[941px] w-[1280px]" data-name="Section">
      <Container />
      <Container1 />
    </div>
  );
}

function HomePage20() {
  return (
    <div className="h-[115.188px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[57.6px] left-0 text-[#3f3f3f] text-[48px] top-[-1px] w-[420px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Caring, Secure, and Effective
      </p>
    </div>
  );
}

function HomePage21() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[-0.5px] text-[#3f3f3f] text-[16px] top-[-17.55px] w-[580px]">Prionet provides a secure environment where healthcare practitioners can identify patients with outstanding balances while ensuring complete patient privacy. Together, the Patient and Practitioner create an exclusive plan to lowering the balance.</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p3882ac80} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function HomePage22() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[16px] shrink-0 size-[48px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Compassion</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">No collections, threats, or credit impact, just understanding.</p>
    </div>
  );
}

function HomePage23() {
  return (
    <div className="h-[63.188px] relative shrink-0 w-[420.219px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading3 />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[63.188px] items-start relative shrink-0 w-full" data-name="Container">
      <HomePage22 />
      <HomePage23 />
    </div>
  );
}

function Icon7() {
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

function HomePage24() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[16px] shrink-0 size-[48px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Centralized Database</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[509px]">All outstanding medical debts over 90 days old in one secure, searchable database.</p>
    </div>
  );
}

function HomePage25() {
  return (
    <div className="basis-0 grow h-[87.188px] min-h-px min-w-px relative shrink-0" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading4 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[87.188px] items-start relative shrink-0 w-full" data-name="Container">
      <HomePage24 />
      <HomePage25 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p150db00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function HomePage26() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[16px] shrink-0 size-[48px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">HIPAA Compliant</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[505px]">Full compliance with healthcare privacy regulations and data protection standards.</p>
    </div>
  );
}

function HomePage27() {
  return (
    <div className="basis-0 grow h-[87.188px] min-h-px min-w-px relative shrink-0" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading5 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[87.188px] items-start relative shrink-0 w-full" data-name="Container">
      <HomePage26 />
      <HomePage27 />
    </div>
  );
}

function HomePage28() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[285.563px] items-start relative shrink-0 w-full" data-name="HomePage2">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[528.75px] items-start left-0 top-[173.39px] w-[584px]" data-name="Container">
      <HomePage20 />
      <HomePage21 />
      <HomePage28 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[875.547px] left-[632px] rounded-[12px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[584px]" data-name="ImageWithFallback">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[12px]">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px]" />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute h-[875.547px] left-[155.5px] top-[1944.97px] w-[1216px]" data-name="Section">
      <Container5 />
      <ImageWithFallback />
    </div>
  );
}

function HomePage29() {
  return (
    <div className="absolute content-stretch flex h-[57.594px] items-start left-0 top-0 w-[1216px]" data-name="HomePage2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Trusted by Healthcare Professionals Nationwide
      </p>
    </div>
  );
}

function HomePage30() {
  return (
    <div className="absolute h-[48px] left-[272px] top-[73.59px] w-[672px]" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[336.17px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[636px]">Priority Pay Network serves thousands of healthcare practitioners and manages millions in outstanding medical debt while maintaining the highest privacy standards.</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[121.594px] relative shrink-0 w-full" data-name="Container">
      <HomePage29 />
      <HomePage30 />
    </div>
  );
}

function Card6() {
  return (
    <div className="[grid-area:1_/_1] bg-white content-stretch flex flex-col items-center justify-center p-px place-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] min-w-full relative shrink-0 text-[#3f3f3f] text-[24px] text-center w-[min-content]">Encompass</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">Health Practitioners,</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center w-[193px]">Psychiatrist and Behavioral Health Specialists</p>
    </div>
  );
}

function Card7() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col items-center justify-center p-px place-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] min-w-full relative shrink-0 text-[#3f3f3f] text-[24px] text-center w-[min-content]">Embrace</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center w-[217px]">Dentist, Ophthalmologist, and Podiatrist</p>
    </div>
  );
}

function Card8() {
  return (
    <div className="[grid-area:1_/_3] bg-white content-stretch flex flex-col items-center justify-center p-px place-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] min-w-full relative shrink-0 text-[#3f3f3f] text-[24px] text-center w-[min-content]">Include</p>
      <div className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">
        <p className="mb-0">{`Labs, Imaging Centers, `}</p>
        <p>
          {`Allied Health Care Specialists, `}
          <br aria-hidden="true" />
          and Specialty Clinics
        </p>
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="[grid-area:1_/_4] bg-white content-stretch flex flex-col items-center justify-center p-px place-self-stretch relative rounded-[16px] shrink-0" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[31.2px] min-w-full relative shrink-0 text-[#3f3f3f] text-[24px] text-center w-[min-content]">Incorporate</p>
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center w-[213px]">Chiropractor and Physical Therapy and Urgent Care</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[212px] relative shrink-0 w-full" data-name="Container">
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute bg-[rgba(229,231,235,0.2)] content-stretch flex flex-col gap-[48px] h-[381.594px] items-start left-[123.5px] px-[32px] py-0 top-[2948.52px] w-[1280px]" data-name="Section">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        With PRIONET, Everyone Wins
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.23px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[783px]">{`When you need care, you can focus on getting better. Why worry about old bills? By choosing a practitioner who participates in PRIONET, you're choosing someone who believes in transparency, privacy, and dignity for every patient.`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.52px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">{`It's a small choice that can make a big difference.`}</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.25px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[826px]">{`And if you ever have an outstanding balance? You'll be treated with respect, not judgment. You'll get clear information and time to work it out—on your terms.`}</p>
    </div>
  );
}

function HomePage31() {
  return (
    <div className="content-stretch flex h-[41.594px] items-start relative shrink-0 w-full" data-name="HomePage2">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px] text-center">PRIONET: A Quiet Way to Do the Right Thing</p>
    </div>
  );
}

function HomePage32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[416.61px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">No stress. No shame. Just compassionate care and a path forward.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[114.594px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-[rgba(204,204,204,0.5)] border-solid inset-0 pointer-events-none" />
      <HomePage31 />
      <HomePage32 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[338.594px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
      <Container8 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[rgba(229,231,235,0.2)] content-stretch flex flex-col gap-[32px] h-[428.188px] items-start left-[347.5px] top-[3458.11px] w-[832px]" data-name="Section">
      <Heading1 />
      <Container9 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col h-[58px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[57.6px] relative shrink-0 text-[#3f3f3f] text-[48px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>{`Need Help? We're Here to Support Nevada`}</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[7px] py-0 relative shrink-0" data-name="Paragraph">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center w-[657px]">{`Whether you're a healthcare practitioner looking to access our database or a patient needing help with your account, our support team is ready to assist.`}</p>
    </div>
  );
}

function HomePage33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[112.688px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[56.5px] text-[16px] text-center text-nowrap text-white top-0 translate-x-[-50%]">(702) 570-5200</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2563eb] content-stretch flex h-[44px] items-center justify-center overflow-clip relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[144.688px]" data-name="Button">
      <HomePage33 />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#ccc] content-stretch flex h-[44px] items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] shrink-0 w-[149.438px]" data-name="Button">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">Contact Support</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[16px] items-center px-[261px] py-0 relative shrink-0" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute bg-[rgba(229,231,235,0.2)] content-stretch flex flex-col gap-[24px] items-center left-[263px] px-[32px] py-0 top-[4014px] w-[970px]" data-name="Section">
      <Heading6 />
      <Paragraph6 />
      <Container10 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[877px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function OptimizedImage() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1080px] items-start left-0 overflow-clip top-0 w-[1527px]" data-name="OptimizedImage2">
      <ImageWithFallback1 />
    </div>
  );
}

function Container11() {
  return <div className="absolute bg-[rgba(0,0,0,0.4)] h-[877px] left-0 top-0 w-[1527px]" data-name="Container" />;
}

function Container12() {
  return (
    <div className="absolute h-[877px] left-0 top-0 w-[1527px]" data-name="Container">
      <OptimizedImage />
      <Container11 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Roboto:Bold',sans-serif] font-bold h-[268.75px] leading-[67.2px] left-0 text-[56px] text-white top-0 w-[768px]" data-name="Heading 1">
      <p className="absolute left-0 text-nowrap top-[-1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Medical Debt Management
      </p>
      <p className="absolute left-0 top-[66.19px] w-[714px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Helping Patients Find Relief, and Medical Clinics Stay Strong.
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Empower patients to resolve balances directly with the Practitioner</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Search for outstanding patient balances across the network (90+ days old)</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Notify patients discreetly through a secure code system</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="absolute h-[24px] left-0 top-[96px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">• Recover balances without collections, credit reporting, or added stress</p>
    </div>
  );
}

function HomePage34() {
  return (
    <div className="absolute h-[120px] left-0 top-[48px] w-[768px]" data-name="HomePage2">
      <Paragraph7 />
      <Paragraph8 />
      <Paragraph9 />
      <Paragraph10 />
    </div>
  );
}

function HomePage35() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[768px]" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] text-nowrap top-0">PRIONET is a secure, privacy-first network that allows participating medical practices to:</p>
    </div>
  );
}

function HomePage36() {
  return (
    <div className="absolute h-[48px] left-0 top-[192px] w-[768px]" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[16px] text-[rgba(255,255,255,0.9)] top-0 w-[736px]">PRIONET is not a collection agency. It is a collaborative tool designed to maintain dignity for patients and sustainability for clinics.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[240px] left-0 top-[292.75px] w-[768px]" data-name="Container">
      <HomePage34 />
      <HomePage35 />
      <HomePage36 />
    </div>
  );
}

function Icon9() {
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
    <div className="absolute bg-[#2563eb] h-[44px] left-0 overflow-clip rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[231.016px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] left-[12px] text-[16px] text-nowrap text-white top-[10.58px]">Practitioner Portal Login</p>
      <Icon9 />
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute bg-[#ccc] content-stretch flex h-[44px] items-center justify-center left-[247.02px] overflow-clip px-[16px] py-[8px] rounded-[16px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[168.203px]" data-name="SlotClone">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] relative shrink-0 text-[#3f3f3f] text-[16px] text-nowrap">Patient portal login</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[44px] left-0 top-[564.75px] w-[768px]" data-name="Container">
      <SlotClone />
      <SlotClone1 />
    </div>
  );
}

function Icon10() {
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

function HomePage37() {
  return (
    <div className="h-[24px] relative shrink-0 w-[146.375px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon10 />
        <Text />
      </div>
    </div>
  );
}

function Icon11() {
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

function HomePage38() {
  return (
    <div className="h-[24px] relative shrink-0 w-[150.406px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative size-full">
        <Icon11 />
        <Text1 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[24px] h-[24px] items-center left-0 top-[640.75px] w-[768px]" data-name="Container">
      <HomePage37 />
      <HomePage38 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[664.75px] left-[155.5px] top-[146.13px] w-[768px]" data-name="Container">
      <Heading />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute h-[877px] left-0 top-0 w-[1527px]" data-name="Section">
      <Container12 />
      <Container16 />
    </div>
  );
}

function HomePage39() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1527px]" data-name="HomePage2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-0 top-0 w-[493.703px]" data-name="Heading 3">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#2563eb] text-[32px]">Priority Pay Network</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="absolute h-[96px] left-0 top-[65.59px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[427px]">A secure platform connecting healthcare practitioners and patients to resolve outstanding medical bills over 90 days old thus sustaining our healthcare system and ensuring both (practitioners and patients) can thrive.</p>
    </div>
  );
}

function Icon12() {
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
    <div className="absolute content-stretch flex flex-col items-start left-0 rounded-[4px] size-[20px] top-[185.59px]" data-name="Link">
      <Icon12 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute h-[215.188px] left-0 top-0 w-[493.703px]" data-name="Section">
      <Heading2 />
      <Paragraph11 />
      <Link />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Quick Links</p>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start left-0 rounded-[4px] top-[2px] w-[72.797px]" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3f3f3f] text-[18px] text-nowrap">About Us</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Link1 />
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start left-0 rounded-[4px] top-[2px] w-[104.719px]" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3f3f3f] text-[18px] text-nowrap">How It Works</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Link2 />
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start left-0 rounded-[4px] top-[2px] w-[147.891px]" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3f3f3f] text-[18px] text-nowrap">Practitioner Portal</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Link3 />
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute content-stretch flex h-[23px] items-start left-0 rounded-[4px] top-[2px] w-[64.234px]" data-name="Link">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#3f3f3f] text-[18px] text-nowrap">Support</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24px] left-0 rounded-[4px] top-0 w-[97.75px]" data-name="Button">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Privacy Policy</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button2 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[215.188px] items-start left-[525.7px] top-0 w-[329.141px]" data-name="Navigation">
      <Heading7 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Contact</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3c4f8d00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Link5() {
  return (
    <div className="h-[24px] relative rounded-[4px] shrink-0 w-[112.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">(702) 570-5200</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Link5 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Address">
      <Container17 />
    </div>
  );
}

function Section7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[215.188px] items-start left-[886.84px] top-0 w-[329.156px]" data-name="Section">
      <Heading8 />
      <Address />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[215.188px] relative shrink-0 w-full" data-name="Container">
      <Section6 />
      <Navigation />
      <Section7 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[607.55px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">© 2025 Priority Pay Network. All rights reserved.</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ccc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph12 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[352.188px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[48px] px-[32px] relative size-full">
          <Container18 />
          <Container19 />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-white h-[369.188px] relative shrink-0 w-[1527px]" data-name="Footer2">
      <div aria-hidden="true" className="absolute border-[#ccc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-px px-[123.5px] relative size-full">
        <Container20 />
      </div>
    </div>
  );
}

function Section8() {
  return (
    <div className="h-0 relative shrink-0 w-[1527px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

export default function App() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="App">
      <HomePage39 />
      <Footer />
      <Section8 />
    </div>
  );
}