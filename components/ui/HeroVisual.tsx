
import Image from "next/image";
import InfoBadge from "@/components/ui/InfoBadge";

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[540px]">
      <div className="relative aspect-[540/524] w-full">
        {/* Orange decorative shape */}
        <div
          aria-hidden="true"
          className="absolute left-[83.33%] top-[4.58%] h-[89.31%] w-[16.48%] rounded-[16px] bg-[#FFC99F]"
        />

        {/* Lavender decorative circle */}
        <div
          aria-hidden="true"
          className="absolute left-[-3%] top-[78%] aspect-square w-[17%] rounded-full bg-[#E4E5FF] md:left-[-8.3%] md:top-[76.91%] md:w-[19.63%]"
        />

        {/* Main photograph */}
        <div className="absolute left-0 top-0 z-10 h-[95.42%] w-[92.59%] overflow-hidden rounded-[24px]">
          <Image
            src="/images/hero.png"
            alt="Student smiling while working on a laptop"
            fill
            priority
            sizes="(max-width: 767px) 90vw, (max-width: 1279px) 45vw, 500px"
            className="object-cover object-center"
          />
        </div>

        {/* Course count */}
        <InfoBadge
          variant="courses"
          className="absolute left-[-4.07%] top-[3.05%] z-20"
        />

        {/* Rating */}
        <InfoBadge
          variant="rating"
          className="absolute bottom-[7.54%] right-[-3.2%] z-20"
        />
      </div>
    </div>
  );
}
