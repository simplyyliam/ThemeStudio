import { Blocks, BugPlay, File, GitBranch, Search } from "lucide-react";
import type { HtmlHTMLAttributes } from "react";

const IconWrapper: React.FC<HtmlHTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={` flex items-center justify-center w-full h-9.25 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default function ActivityBar() {
  return (
    <div className="flex flex-col items-center justify-between h-full min-w-9.25 bg-neutral-700">
      {/* Top */}
      <div className="flex flex-col items-center w-full h-fit">
          <IconWrapper>
            <File size={20} />
          </IconWrapper>
        <IconWrapper>
          <Search size={20} />
        </IconWrapper>
        <IconWrapper>
          <GitBranch size={20} />
        </IconWrapper>
        <IconWrapper>
          <BugPlay size={20} />
        </IconWrapper>
        <IconWrapper>
          <Blocks size={20} />
        </IconWrapper>
      </div>
      {/* Top */}
      <div className="flex flex-col items-center w-full h-fit">Botom</div>
    </div>
  );
}
