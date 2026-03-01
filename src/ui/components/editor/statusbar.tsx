import {
  ArrowDown,
  ArrowUp,
  CircleX,
  GitBranch,
  RotateCcw,
  TriangleAlert,
} from "lucide-react";
import type { HTMLAttributes } from "react";

const Text: React.FC<HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <span
      className={`text-[12px] flex items-center gap-1  ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between h-5.5 w-full px-2 bg-[#007ACC]">
      {/* Left */}
      <div className="flex items-center h-full min-w-fit gap-2">
        <div className="flex items-center gap-1 px-1">
          <GitBranch size={12} />
          <Text>main</Text>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 px-1">
            <RotateCcw size={12} />
            <Text>
              0 <ArrowDown size={12} />
            </Text>
            <Text>
              1 <ArrowUp size={12} />
            </Text>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 px-1">
            <CircleX size={12} />
            <Text>0</Text>
            <TriangleAlert size={12} />
            <Text>1 </Text>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex items-center h-full min-w-fit gap-2">
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1 px-1">
            <Text>
              <span>Ln</span>
              <span>17,</span>
            </Text>
            <Text>
              <span>Col</span>
              <span>3</span>
            </Text>
          </div>
        </div>

        <div className="flex items-center gap-1 px-1">
          <Text>Spaces: 2</Text>
        </div>

        <div className="flex items-center gap-1 px-1">
          <Text>UTF-8</Text>
        </div>

        <div className="flex items-center gap-1 px-1">
          <Text>LF</Text>
        </div>

        <div className="flex items-center gap-1 px-1">
          <Text>TypeScript</Text>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" color="currentColor" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 18V9.5C19 5.63401 15.866 2.5 12 2.5C8.13401 2.5 5 5.63401 5 9.5V18" />
            <path d="M20.5 18H3.5" />
            <path d="M13.5 20C13.5 20.8284 12.8284 21.5 12 21.5M10.5 20C10.5 20.8284 11.1716 21.5 12 21.5M12 21.5V20" />
        </svg>
      </div>
    </div>
  );
}
