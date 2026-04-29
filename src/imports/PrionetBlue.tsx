import svgPaths from "./svg-g0tt9d2l9x";
import imgImageWithFallback from "figma:asset/37580bb4cfa59eb10ae033d4a76d46140e8629d6.png";

function ServicesPage() {
  return (
    <div className="absolute h-[134.375px] left-[32px] top-[32px] w-[736.656px]" data-name="ServicesPage">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[67.2px] left-0 text-[#3f3f3f] text-[56px] top-[-1px] w-[646px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        How Priority Pay Network Works
      </p>
    </div>
  );
}

function ServicesPage1() {
  return (
    <div className="absolute h-[127.969px] left-[32px] top-[190.38px] w-[600px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[25.6px] left-0 text-[#3f3f3f] text-[16px] top-[-1px] w-[597px]">{`When you visit a PRIONET Provider Network, staff securely checks for your name and birthdate or last four of your SSN in the PPN system, no details about your balance are shared. If there's an outstanding balance, you'll receive a secure code to privately view it in the PPN app. You work directly with your practitioner to resolve it, and once settled, your record is quietly updated.`}</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[800.656px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ServicesPage />
        <ServicesPage1 />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-white h-[344.344px] left-0 rounded-[12px] top-0 w-[802.656px]" data-name="Card">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] size-full">
        <CardContent />
      </div>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function ServicesPage2() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[72px] left-[171.03px] text-[48px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        90+
      </p>
    </div>
  );
}

function ServicesPage3() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-[171.02px] text-[12px] text-center text-nowrap text-white top-0 translate-x-[-50%]">Days minimum debt age</p>
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex flex-col gap-[8px] h-[146px] items-start left-0 pb-0 pt-[24px] px-[24px] rounded-[12px] top-0 w-[389.344px]" data-name="CardContent">
      <ServicesPage2 />
      <ServicesPage3 />
    </div>
  );
}

function ServicesPage4() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[72px] left-[171.09px] text-[48px] text-center text-nowrap text-white top-[-1px] translate-x-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        100%
      </p>
    </div>
  );
}

function ServicesPage5() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-[170.78px] text-[12px] text-center text-nowrap text-white top-0 translate-x-[-50%]">HIPAA Compliant</p>
    </div>
  );
}

function CardContent2() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex flex-col gap-[8px] h-[146px] items-start left-0 pb-0 pt-[24px] px-[24px] rounded-[12px] top-[184.17px] w-[389.344px]" data-name="CardContent">
      <ServicesPage4 />
      <ServicesPage5 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[344.344px] left-[826.66px] top-0 w-[389.344px]" data-name="Container">
      <CardContent1 />
      <CardContent2 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[344.344px] relative shrink-0 w-full" data-name="Container">
      <Card />
      <Container />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[500px] relative shrink-0 w-[592px]" data-name="ImageWithFallback">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Container2() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex h-[719.906px] items-center justify-center justify-self-stretch overflow-clip relative rounded-[16px] shrink-0" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[115.188px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Roboto:Bold',sans-serif] font-bold leading-[57.6px] left-0 text-[#3f3f3f] text-[48px] top-[-1px] w-[518px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Patient-First Healthcare Management
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[76.781px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[25.6px] left-0 text-[#3f3f3f] text-[16px] top-[-1px] w-[569px]">Priority Pay Network bridges the gap between healthcare providers and patients when they make payment arrangements, offering a secure solution that respects patient privacy.</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[207.969px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pcf2b720} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-[#2563eb] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Compassion</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#3f3f3f] text-[12px] text-nowrap top-0">No collections, threats, or credit impact, just a simple understanding.</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[57.188px] relative shrink-0 w-[294.203px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[57.188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p19fddb00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#2563eb] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Ongoing Care</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[18px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#3f3f3f] text-[12px] text-nowrap top-0">Patients keep seeing their practitioner while debts are resolved.</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[57.188px] relative shrink-0 w-[334.953px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[57.188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p150db00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#2563eb] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Patient Privacy Protected</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <div className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#3f3f3f] text-[12px] top-0 w-[536px]">
        <p className="mb-0">{`Practitioners only see if a debt exists, never the amount, whom owed, or specific details. `}</p>
        <p>Complete privacy compliance with HIPAA regulations.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="basis-0 grow h-[75.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[16px] h-[75.188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p20da1800} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-[#2563eb] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Patient Empowerment</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#3f3f3f] text-[12px] top-0 w-[507px]">Patients maintain full control with secure portal access to view balance details, dispute charges, and/or make payments directly to healthcare providers.</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="basis-0 grow h-[75.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading5 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex gap-[16px] h-[75.188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb67ee00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#2563eb] relative rounded-[12px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Secure Data Infrastructure</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-0 text-[#3f3f3f] text-[12px] top-0 w-[536px]">Enterprise-grade security. All interactions are logged and monitored to ensure complete data protection.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="basis-0 grow h-[75.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading6 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex gap-[16px] h-[75.188px] items-start relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[403.938px] items-start relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container9 />
      <Container12 />
      <Container15 />
      <Container18 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[126.52px] size-[16px] top-[14px]" data-name="Icon">
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
    <div className="absolute bg-[#2563eb] h-[44px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16px] w-[154.516px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] left-[12px] text-[16px] text-nowrap text-white top-[10.58px]">Patient Portal</p>
      <Icon5 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[212.06px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9 3L14 8M14 8L9 13M14 8H2" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-[170.52px] overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[16px] w-[240.063px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] left-[12px] text-[#2563eb] text-[16px] text-nowrap top-[10.58px]">Access Practitioner Portal</p>
      <Icon6 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Container">
      <SlotClone />
      <SlotClone1 />
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[24px] h-[719.906px] items-start justify-self-stretch relative shrink-0" data-name="Container">
      <Container3 />
      <Container19 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[719.906px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container21 />
    </div>
  );
}

function Section() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1128.25px] items-start left-[123.5px] px-[32px] py-0 top-[152px] w-[1280px]" data-name="Section">
      <Container1 />
      <Container22 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute content-stretch flex h-[57.594px] items-start left-0 top-0 w-[1216px]" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        The Priority Pay Network Process
      </p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[48px] left-[308px] top-[73.59px] w-[600px]" data-name="Paragraph">
      <div className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[300.23px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[584px]">
        <p className="mb-0">{`A secure, patient-focused approach to health care debt `}</p>
        <p>management that keeps clinics sustainable.</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[121.594px] relative shrink-0 w-full" data-name="Container">
      <Heading7 />
      <Paragraph6 />
    </div>
  );
}

function ServicesPage6() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="ServicesPage">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[24px] text-nowrap text-white">1</p>
    </div>
  );
}

function ServicesPage7() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[32px] top-[96px] w-[530px]" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px]">Practitioner Database Query</p>
    </div>
  );
}

function ServicesPage8() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[145.59px] w-[530px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[520px]">Healthcare practitioners log into the secure portal and search for patients by basic identifying information to check for outstanding debts over 90 days old.</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Secure login with credentials</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Search by patient information</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Results show only debt existence</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">No amount or creditor details visible</p>
    </div>
  );
}

function ServicesPage9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[120px] items-start left-[32px] pl-[20px] pr-0 py-0 top-[233.59px] w-[530px]" data-name="ServicesPage">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function CardContent3() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[594px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ServicesPage6 />
        <ServicesPage7 />
        <ServicesPage8 />
        <ServicesPage9 />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[379.594px] items-start left-0 p-px rounded-[12px] top-0 w-[596px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent3 />
    </div>
  );
}

function ServicesPage10() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="ServicesPage">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[24px] text-nowrap text-white">2</p>
    </div>
  );
}

function ServicesPage11() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[32px] top-[96px] w-[530px]" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px]">Privacy-Protected Results</p>
    </div>
  );
}

function ServicesPage12() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[149.59px] w-[530px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[526px]">The system returns only whether the patient has outstanding medical debt, never revealing specific amounts, or other sensitive details.</p>
    </div>
  );
}

function CardContent4() {
  return (
    <div className="h-[221.594px] relative shrink-0 w-[594px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ServicesPage10 />
        <ServicesPage11 />
        <ServicesPage12 />
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[379.594px] items-start left-[620px] p-px rounded-[12px] top-0 w-[596px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent4 />
    </div>
  );
}

function ServicesPage13() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="ServicesPage">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[24px] text-nowrap text-white">3</p>
    </div>
  );
}

function ServicesPage14() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[32px] top-[96px] w-[530px]" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px]">Patient Portal Access</p>
    </div>
  );
}

function ServicesPage15() {
  return (
    <div className="absolute h-[72px] left-[32px] top-[149.59px] w-[530px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[483px]">Patients can access their secure private portal to view complete balance details, dispute charges, make payments or payment arrangements directly to healthcare providers.</p>
    </div>
  );
}

function CardContent5() {
  return (
    <div className="h-[245.594px] relative shrink-0 w-[594px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ServicesPage13 />
        <ServicesPage14 />
        <ServicesPage15 />
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[355.594px] items-start left-0 p-px rounded-[12px] top-[403.59px] w-[596px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent5 />
    </div>
  );
}

function ServicesPage16() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex items-center justify-center left-[32px] rounded-[12px] size-[48px] top-[32px]" data-name="ServicesPage">
      <p className="font-['Outfit:Bold',sans-serif] font-bold leading-[36px] relative shrink-0 text-[24px] text-nowrap text-white">4</p>
    </div>
  );
}

function ServicesPage17() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[32px] top-[96px] w-[530px]" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px]">Secure Data Management</p>
    </div>
  );
}

function ServicesPage18() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[145.59px] w-[530px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[504px]">All interactions are logged for security purposes while maintaining strict privacy standards.</p>
    </div>
  );
}

function CardContent6() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[594px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ServicesPage16 />
        <ServicesPage17 />
        <ServicesPage18 />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[355.594px] items-start left-[620px] p-px rounded-[12px] top-[403.59px] w-[596px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent6 />
    </div>
  );
}

function Container24() {
  return (
    <div className="h-[759.188px] relative shrink-0 w-full" data-name="Container">
      <Card1 />
      <Card2 />
      <Card3 />
      <Card4 />
    </div>
  );
}

function Section1() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[64px] h-[1072.781px] items-start left-0 pb-0 pt-[64px] px-[155.5px] top-[1368.25px] w-[1527px]" data-name="Section">
      <Container23 />
      <Container24 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For Patients
      </p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[537px]">Manage your medical overdue balance through a secure, private portal and stay with your trusted clinic.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[121.594px] items-start left-0 top-0 w-[592px]" data-name="Container">
      <Heading8 />
      <Paragraph7 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p20da1800} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Complete Debt Visibility</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">View all outstanding medical debt details in one secure location</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="basis-0 grow h-[63.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading9 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function ServicesPage19() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Card5() {
  return (
    <div className="bg-white h-[113.188px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage19 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pcf2b720} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Dispute Management</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Easily dispute charges or resolve billing issues directly</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="basis-0 grow h-[63.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading10 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function ServicesPage20() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white h-[113.188px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage20 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p19fddb00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Direct Payment</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[423px]">Make payments directly to healthcare providers through the platform</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="basis-0 grow h-[87.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading11 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function ServicesPage21() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container30 />
        <Container31 />
      </div>
    </div>
  );
}

function Card7() {
  return (
    <div className="bg-white h-[137.188px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage21 />
        </div>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[395.563px] items-start left-0 top-[153.59px] w-[592px]" data-name="Container">
      <Card5 />
      <Card6 />
      <Card7 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[101.89px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9 3L14 8M14 8L9 13M14 8H2" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone2() {
  return (
    <div className="absolute bg-[#2563eb] h-[44px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[573.16px] w-[129.891px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[17.143px] left-[12px] text-[12px] text-nowrap text-white top-[13.42px]">Patient Portal</p>
      <Icon10 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[617.156px] left-0 top-0 w-[592px]" data-name="Container">
      <Container25 />
      <Container32 />
      <SlotClone2 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        For Practitioners
      </p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[581px]">Access our secure database to efficiently check for patient balances while maintaining strict privacy compliance.</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[121.594px] items-start left-0 top-0 w-[592px]" data-name="Container">
      <Heading12 />
      <Paragraph11 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p6b12f00} id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Heading13() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Quick Debt Verification</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[466px]">Instantly check if patients have outstanding medical debts over 90 days old</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="basis-0 grow h-[87.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading13 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function ServicesPage22() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container35 />
        <Container36 />
      </div>
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-white h-[137.188px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage22 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
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

function Container37() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Heading14() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Strengthen Relationship</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Make payment arrangements; keep your patient</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[63.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading14 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function ServicesPage23() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container37 />
        <Container38 />
      </div>
    </div>
  );
}

function Card9() {
  return (
    <div className="bg-white h-[113.188px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage23 />
        </div>
      </div>
    </div>
  );
}

function Icon13() {
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

function Container39() {
  return (
    <div className="bg-[rgba(37,99,235,0.1)] relative rounded-[12px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <Icon13 />
      </div>
    </div>
  );
}

function Heading15() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Compassion Sustainability</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Keep clinic open, respected and financially healthy</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="basis-0 grow h-[63.188px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Heading15 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function ServicesPage24() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[542px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-start relative size-full">
        <Container39 />
        <Container40 />
      </div>
    </div>
  );
}

function Card10() {
  return (
    <div className="bg-white h-[113.188px] relative rounded-[12px] shrink-0 w-full" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">
          <ServicesPage24 />
        </div>
      </div>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[395.563px] items-start left-0 top-[153.59px] w-[592px]" data-name="Container">
      <Card8 />
      <Card9 />
      <Card10 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[166.05px] size-[16px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M9 3L14 8M14 8L9 13M14 8H2" id="Vector" stroke="var(--stroke-0, #2563EB)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[44px] left-0 overflow-clip rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-[573.16px] w-[194.047px]" data-name="SlotClone">
      <p className="absolute font-['Outfit:Medium',sans-serif] font-medium leading-[17.143px] left-[12px] text-[#2563eb] text-[12px] text-nowrap top-[13.42px]">Access Practitioner Portal</p>
      <Icon14 />
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[617.156px] left-[624px] top-0 w-[592px]" data-name="Container">
      <Container34 />
      <Container41 />
      <SlotClone3 />
    </div>
  );
}

function Section2() {
  return (
    <div className="absolute h-[617.156px] left-[155.5px] top-[2505.03px] w-[1216px]" data-name="Section">
      <Container33 />
      <Container42 />
    </div>
  );
}

function Heading16() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Why Choose Priority Pay Network?
      </p>
    </div>
  );
}

function ServicesPage25() {
  return (
    <div className="absolute h-[60px] left-[32px] top-[32px] w-[736.656px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[60px] left-[368.33px] text-[#3f3f3f] text-[60px] text-center text-nowrap top-0 translate-x-[-50%]">⏰</p>
    </div>
  );
}

function ServicesPage26() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-[32px] top-[108px] w-[736.656px]" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[32px] text-center">90+ Day Focus</p>
    </div>
  );
}

function ServicesPage27() {
  return (
    <div className="absolute h-[48px] left-[200.33px] top-[165.59px] w-[400px]" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[200.3px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[383px]">Specifically designed for managing medical balances that are past 90 days.</p>
    </div>
  );
}

function CardContent7() {
  return (
    <div className="h-[237.594px] relative shrink-0 w-[800.656px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <ServicesPage25 />
        <ServicesPage26 />
        <ServicesPage27 />
      </div>
    </div>
  );
}

function Card11() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[362.375px] items-start left-0 p-px rounded-[12px] top-0 w-[802.656px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent7 />
    </div>
  );
}

function ServicesPage28() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[36px] left-[169.67px] text-[#3f3f3f] text-[30px] text-center text-nowrap top-0 translate-x-[-50%]">🔒</p>
    </div>
  );
}

function ServicesPage29() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Privacy First</p>
    </div>
  );
}

function ServicesPage30() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-[169.94px] text-[#3f3f3f] text-[12px] text-center top-0 translate-x-[-50%] w-[333px]">Practitioners see only debt existence, never amounts or details, maintaining complete patient privacy.</p>
    </div>
  );
}

function CardContent8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[387.344px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <ServicesPage28 />
        <ServicesPage29 />
        <ServicesPage30 />
      </div>
    </div>
  );
}

function Card12() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[169.188px] items-start left-0 p-px rounded-[12px] top-0 w-[389.344px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent8 />
    </div>
  );
}

function ServicesPage31() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[36px] left-[169.67px] text-[#3f3f3f] text-[30px] text-center text-nowrap top-0 translate-x-[-50%]">👤</p>
    </div>
  );
}

function ServicesPage32() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Patient Control</p>
    </div>
  );
}

function ServicesPage33() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[18px] left-[170.06px] text-[#3f3f3f] text-[12px] text-center top-0 translate-x-[-50%] w-[325px]">Patients have full access to their information and control over dispute resolution and payments.</p>
    </div>
  );
}

function CardContent9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[387.344px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <ServicesPage31 />
        <ServicesPage32 />
        <ServicesPage33 />
      </div>
    </div>
  );
}

function Card13() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[169.188px] items-start left-0 p-px rounded-[12px] top-[193.19px] w-[389.344px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent9 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute h-[362.375px] left-[826.66px] top-0 w-[389.344px]" data-name="Container">
      <Card12 />
      <Card13 />
    </div>
  );
}

function ServicesPage34() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[40px] left-[169.66px] text-[#3f3f3f] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">🛡️</p>
    </div>
  );
}

function ServicesPage35() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">HIPAA Compliant</p>
    </div>
  );
}

function ServicesPage36() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[170.11px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[279px]">Full compliance with healthcare privacy regulations and industry best practices.</p>
    </div>
  );
}

function CardContent10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[387.328px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <ServicesPage34 />
        <ServicesPage35 />
        <ServicesPage36 />
      </div>
    </div>
  );
}

function Card14() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[193.188px] items-start left-0 p-px rounded-[12px] top-[386.38px] w-[389.328px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent10 />
    </div>
  );
}

function ServicesPage37() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[40px] left-[169.66px] text-[#3f3f3f] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">💻</p>
    </div>
  );
}

function ServicesPage38() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">Secure Platform</p>
    </div>
  );
}

function ServicesPage39() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[169.75px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[300px]">Enterprise-grade security with encryption, monitoring, and regular audits.</p>
    </div>
  );
}

function CardContent11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[387.328px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <ServicesPage37 />
        <ServicesPage38 />
        <ServicesPage39 />
      </div>
    </div>
  );
}

function Card15() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[193.188px] items-start left-[413.33px] p-px rounded-[12px] top-[386.38px] w-[389.328px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent11 />
    </div>
  );
}

function ServicesPage40() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[40px] left-[169.67px] text-[#3f3f3f] text-[36px] text-center text-nowrap top-0 translate-x-[-50%]">🚫</p>
    </div>
  );
}

function ServicesPage41() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="ServicesPage">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px] text-center">No Third-Party Sharing</p>
    </div>
  );
}

function ServicesPage42() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="ServicesPage">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[170.13px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[307px]">Patient data stays within the network and is never shared with external parties.</p>
    </div>
  );
}

function CardContent12() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[387.344px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[24px] px-[24px] relative size-full">
        <ServicesPage40 />
        <ServicesPage41 />
        <ServicesPage42 />
      </div>
    </div>
  );
}

function Card16() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[193.188px] items-start left-[826.66px] p-px rounded-[12px] top-[386.38px] w-[389.344px]" data-name="Card">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <CardContent12 />
    </div>
  );
}

function Container44() {
  return (
    <div className="h-[579.563px] relative shrink-0 w-full" data-name="Container">
      <Card11 />
      <Container43 />
      <Card14 />
      <Card15 />
      <Card16 />
    </div>
  );
}

function Section3() {
  return (
    <div className="absolute bg-[#e5e7eb] content-stretch flex flex-col gap-[64px] h-[829.156px] items-start left-0 pb-0 pt-[64px] px-[155.5px] top-[3186.19px] w-[1527px]" data-name="Section">
      <Heading16 />
      <Container44 />
    </div>
  );
}

function Heading17() {
  return (
    <div className="absolute content-stretch flex h-[57.594px] items-start left-[32px] top-0 w-[832px]" data-name="Heading 2">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        Ready to Get Started?
      </p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[48px] left-[148px] top-[73.59px] w-[600px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[300.27px] text-[#3f3f3f] text-[16px] text-center top-0 translate-x-[-50%] w-[573px]">{`Whether you're a healthcare provider looking to access our database or a patient needing help with your medical balance, we're here to support you.`}</p>
    </div>
  );
}

function SlotClone4() {
  return (
    <div className="absolute bg-[#2563eb] content-stretch flex h-[44px] items-center justify-center left-[234.94px] overflow-clip px-[16px] py-[8px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[130.516px]" data-name="SlotClone">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] relative shrink-0 text-[16px] text-center text-nowrap text-white">Patient Portal</p>
    </div>
  );
}

function SlotClone5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] content-stretch flex h-[44px] items-center justify-center left-[381.45px] overflow-clip px-[16px] py-[8px] rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)] top-0 w-[215.609px]" data-name="SlotClone">
      <p className="font-['Outfit:Medium',sans-serif] font-medium leading-[22.857px] relative shrink-0 text-[#2563eb] text-[16px] text-center text-nowrap">Practitioner Portal Access</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[44px] left-[32px] top-[153.59px] w-[832px]" data-name="Container">
      <SlotClone4 />
      <SlotClone5 />
    </div>
  );
}

function Section4() {
  return (
    <div className="absolute h-[197.594px] left-[315.5px] top-[4079.34px] w-[896px]" data-name="Section">
      <Heading17 />
      <Paragraph15 />
      <Container45 />
    </div>
  );
}

function ServicesPage43() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[1527px]" data-name="ServicesPage">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Section />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[41.594px] items-start left-0 top-0 w-[493.703px]" data-name="Heading 3">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[41.6px] min-h-px min-w-px relative shrink-0 text-[#2563eb] text-[32px]">Priority Pay Network</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="absolute h-[96px] left-0 top-[65.59px] w-[448px]" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] top-0 w-[427px]">A secure platform connecting healthcare practitioners and patients to resolve outstanding medical bills over 90 days old thus sustaining our healthcare system and ensuring both (practitioners and patients) can thrive.</p>
    </div>
  );
}

function Icon15() {
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
      <Icon15 />
    </div>
  );
}

function Section5() {
  return (
    <div className="absolute h-[215.188px] left-0 top-0 w-[493.703px]" data-name="Section">
      <Heading1 />
      <Paragraph16 />
      <Link />
    </div>
  );
}

function Heading18() {
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

function ListItem4() {
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

function ListItem5() {
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

function ListItem6() {
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

function ListItem7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="List Item">
      <Link4 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-0 rounded-[4px] top-0 w-[97.75px]" data-name="Button">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#3f3f3f] text-[16px] text-nowrap top-0">Privacy Policy</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Button />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[215.188px] items-start left-[525.7px] top-0 w-[329.141px]" data-name="Navigation">
      <Heading18 />
      <List />
    </div>
  );
}

function Heading19() {
  return (
    <div className="content-stretch flex h-[31.188px] items-start relative shrink-0 w-full" data-name="Heading 4">
      <p className="basis-0 font-['Outfit:Bold',sans-serif] font-bold grow leading-[31.2px] min-h-px min-w-px relative shrink-0 text-[#3f3f3f] text-[24px]">Contact</p>
    </div>
  );
}

function Icon16() {
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

function Container46() {
  return (
    <div className="content-stretch flex gap-[12px] h-[24px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon16 />
      <Link5 />
    </div>
  );
}

function Address() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-start relative shrink-0 w-full" data-name="Address">
      <Container46 />
    </div>
  );
}

function Section6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[215.188px] items-start left-[886.84px] top-0 w-[329.156px]" data-name="Section">
      <Heading19 />
      <Address />
    </div>
  );
}

function Container47() {
  return (
    <div className="h-[215.188px] relative shrink-0 w-full" data-name="Container">
      <Section5 />
      <Navigation />
      <Section6 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[607.55px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">© 2025 PRIONET. All rights reserved.</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex flex-col h-[57px] items-start pb-0 pt-[33px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#ccc] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Paragraph17 />
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[352.188px] relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[32px] items-start pb-0 pt-[48px] px-[32px] relative size-full">
          <Container47 />
          <Container48 />
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
        <Container49 />
      </div>
    </div>
  );
}

function Section7() {
  return (
    <div className="h-0 relative shrink-0 w-[1527px]" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[4774.125px] items-start left-0 top-0 w-[1527px]" data-name="App">
      <ServicesPage43 />
      <Footer />
      <Section7 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name="ImageWithFallback">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24px] left-0 not-italic text-[#3f3f3f] text-[16px] text-nowrap top-[-1px]">PRIONET Provider Network</p>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[40px] relative shrink-0 w-[261.281px]" data-name="Logo2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <ImageWithFallback1 />
        <Text />
      </div>
    </div>
  );
}

function Text1() {
  return <div className="h-[193.521px] opacity-0 w-[253.271px]" data-name="Text" />;
}

function Text2() {
  return <div className="absolute h-[41px] left-[1.5px] rounded-[6px] top-[1.5px] w-[71.609px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[12px] w-[42.609px]" data-name="Text">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">Home</p>
    </div>
  );
}

function MenuItem() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[74.609px]" data-name="Menu Item">
      <div className="absolute flex h-[261.066px] items-center justify-center left-[-389.27px] top-[-259.22px] w-[299.943px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[162.393deg]">
          <Text1 />
        </div>
      </div>
      <Text2 />
      <Text3 />
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[44px] relative shrink-0 w-[74.609px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem />
      </div>
    </div>
  );
}

function Text4() {
  return <div className="h-[239.333px] opacity-0 w-[397.629px]" data-name="Text" />;
}

function Text5() {
  return <div className="absolute bg-[#2563eb] h-[41px] left-[1.5px] rounded-[6px] top-[1.5px] w-[122.094px]" data-name="Text" />;
}

function Text6() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[12px] w-[93.094px]" data-name="Text">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-center text-nowrap text-white">How It Works</p>
    </div>
  );
}

function MenuItem1() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[125.094px]" data-name="Menu Item">
      <div className="absolute flex h-[348.398px] items-center justify-center left-[-587.66px] top-[-325.79px] w-[451.396px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[162.393deg]">
          <Text4 />
        </div>
      </div>
      <Text5 />
      <Text6 />
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[44px] relative shrink-0 w-[125.094px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem1 />
      </div>
    </div>
  );
}

function Text7() {
  return <div className="h-[194.457px] opacity-0 w-[256.219px]" data-name="Text" />;
}

function Text8() {
  return <div className="absolute h-[41px] left-[1.5px] rounded-[6px] top-[1.5px] w-[72.641px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[12px] w-[43.641px]" data-name="Text">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">About</p>
    </div>
  );
}

function MenuItem2() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[75.641px]" data-name="Menu Item">
      <div className="absolute flex h-[262.85px] items-center justify-center left-[-393.33px] top-[-260.58px] w-[303.037px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[162.393deg]">
          <Text7 />
        </div>
      </div>
      <Text8 />
      <Text9 />
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[44px] relative shrink-0 w-[75.641px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem2 />
      </div>
    </div>
  );
}

function Text10() {
  return <div className="h-[274.142px] opacity-0 w-[507.316px]" data-name="Text" />;
}

function Text11() {
  return <div className="absolute h-[41px] left-[1.5px] rounded-[6px] top-[1.5px] w-[160.453px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[12px] w-[131.453px]" data-name="Text">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">Practitioner Portal</p>
    </div>
  );
}

function MenuItem3() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[163.453px]" data-name="Menu Item">
      <div className="absolute flex h-[414.755px] items-center justify-center left-[-738.41px] top-[-376.37px] w-[566.474px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[162.393deg]">
          <Text10 />
        </div>
      </div>
      <Text11 />
      <Text12 />
    </div>
  );
}

function ListItem12() {
  return (
    <div className="basis-0 grow h-[44px] min-h-px min-w-px relative shrink-0" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem3 />
      </div>
    </div>
  );
}

function Text13() {
  return <div className="h-[206.679px] opacity-0 w-[294.733px]" data-name="Text" />;
}

function Text14() {
  return <div className="absolute h-[41px] left-[1.5px] rounded-[6px] top-[1.5px] w-[86.109px]" data-name="Text" />;
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[16px] top-[12px] w-[57.109px]" data-name="Text">
      <p className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center text-nowrap">Support</p>
    </div>
  );
}

function MenuItem4() {
  return (
    <div className="absolute h-[44px] left-0 overflow-clip rounded-[12px] top-0 w-[89.109px]" data-name="Menu Item">
      <div className="absolute flex h-[286.149px] items-center justify-center left-[-446.25px] top-[-278.34px] w-[343.443px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[162.393deg]">
          <Text13 />
        </div>
      </div>
      <Text14 />
      <Text15 />
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[44px] relative shrink-0 w-[89.109px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <MenuItem4 />
      </div>
    </div>
  );
}

function MenuBar() {
  return (
    <div className="h-[44px] relative shrink-0 w-[559.906px]" data-name="Menu Bar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-start relative size-full">
        <ListItem9 />
        <ListItem10 />
        <ListItem11 />
        <ListItem12 />
        <ListItem13 />
      </div>
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[9.37%_9.37%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-4%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p1f885d00} id="Vector" stroke="var(--stroke-0, #3F3F3F)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[8px] size-[20px] top-[8px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container50 />
      </div>
    </div>
  );
}

function Container51() {
  return (
    <div className="h-[44px] relative shrink-0 w-[651.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] items-center pl-[40px] pr-0 py-0 relative size-full">
        <MenuBar />
        <Button1 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[24px] py-0 relative size-full">
          <Logo />
          <Container51 />
        </div>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[66px] items-start left-[155.5px] p-px rounded-[12px] top-[16px] w-[1216px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_0px_rgba(0,0,0,0.06)]" />
      <Container52 />
    </div>
  );
}

function ThemeToggle() {
  return (
    <div className="absolute left-[1328px] overflow-clip size-px top-[48.5px]" data-name="ThemeToggle2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[72.5px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">Switch to dark mode</p>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="absolute h-[98px] left-0 top-0 w-[1527px]" data-name="Navigation2">
      <Container53 />
      <ThemeToggle />
    </div>
  );
}

export default function PrionetBlue() {
  return (
    <div className="bg-white relative size-full" data-name="Prionet Blue">
      <App />
      <Navigation1 />
    </div>
  );
}