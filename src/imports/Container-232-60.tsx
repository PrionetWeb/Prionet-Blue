import clsx from "clsx";

function CardContent4({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-[230px]">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start pb-0 pt-[24px] px-[24px] relative size-full">{children}</div>
    </div>
  );
}
type Card4Props = {
  additionalClassNames?: string;
};

function Card4({ children, additionalClassNames = "" }: React.PropsWithChildren<Card4Props>) {
  return (
    <div className={clsx("bg-white h-[212px] justify-self-stretch relative rounded-[16px] shrink-0", additionalClassNames)}>
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[25px] pr-px py-[25px] relative size-full">{children}</div>
      </div>
    </div>
  );
}
type HeadingTextProps = {
  text: string;
};

function HeadingText({ text }: HeadingTextProps) {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full">
      <p className="basis-0 font-['Roboto:Bold',sans-serif] font-bold grow leading-[57.6px] min-h-px min-w-px relative shrink-0 text-[#2563eb] text-[48px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        {text}
      </p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="h-[162px] relative shrink-0 w-[230px]" data-name="CardContent">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-center pb-0 pt-[24px] px-[24px] relative size-full">
        <HeadingText text="5,000+" />
        <div className="font-['Outfit:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#3f3f3f] text-[16px] text-center w-[214px]">
          <p className="mb-0">{`Healthcare Practitioners, `}</p>
          <p>Psychiatrist and Behavioral Health Specialists</p>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_1]">
      <CardContent />
    </Card4>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex h-[57.594px] items-start relative shrink-0 w-full" data-name="Heading 2">
      <p className="font-['Roboto:Bold',sans-serif] font-bold leading-[57.6px] relative shrink-0 text-[#2563eb] text-[48px] text-center text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        50,000+
      </p>
    </div>
  );
}

function HomePage() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="HomePage2">
      <div className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[91.5px] text-[#3f3f3f] text-[16px] text-center top-[0.34px] translate-x-[-50%] w-[263px]">
        <p className="mb-0">{`Dentist, Podiatrist, Ophthalmologist, `}</p>
        <p>Medical, and Podiatry</p>
      </div>
    </div>
  );
}

function CardContent1() {
  return (
    <CardContent4>
      <Heading />
      <HomePage />
    </CardContent4>
  );
}

function Card1() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_2]">
      <CardContent1 />
    </Card4>
  );
}

function HomePage1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="HomePage2">
      <p className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[91.34px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">Labs and Imaging centers</p>
    </div>
  );
}

function CardContent2() {
  return (
    <CardContent4>
      <HeadingText text="$25M+" />
      <HomePage1 />
    </CardContent4>
  );
}

function Card2() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_3]">
      <CardContent2 />
    </Card4>
  );
}

function HomePage2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="HomePage2">
      <div className="absolute font-['Outfit:Regular',sans-serif] font-normal leading-[24px] left-[90.7px] text-[#3f3f3f] text-[16px] text-center text-nowrap top-0 translate-x-[-50%]">
        <p className="mb-0">{`Behavioral Health, Psychiatry, `}</p>
        <p>Urgent Care</p>
      </div>
    </div>
  );
}

function CardContent3() {
  return (
    <CardContent4>
      <HeadingText text="98%" />
      <HomePage2 />
    </CardContent4>
  );
}

function Card3() {
  return (
    <Card4 additionalClassNames="[grid-area:1_/_4]">
      <CardContent3 />
    </Card4>
  );
}

export default function Container() {
  return (
    <div className="gap-[32px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] relative size-full" data-name="Container">
      <Card />
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}