
import Image from "next/image";

interface AvatarGroupProps {
  count?: number;
  size?: number;
  className?: string;
}

export default function AvatarGroup({
  count = 4,
  size = 40,
  className = "",
}: AvatarGroupProps) {
  return (
    <div
      className={`flex items-center justify-center -space-x-2 ${className}`}
      aria-label={`${count} learner avatars`}
      role="img"
    >
      {Array.from({ length: count }, (_, index) => (
        <Image
          key={index}
          src={`/images/avatar-${index + 1}.png`}
          alt=""
          width={size}
          height={size}
          className="shrink-0 rounded-full border-2 border-[#FFDF59] object-cover"
          style={{ width: size, height: size }}
        />
      ))}
    </div>
  );
}
