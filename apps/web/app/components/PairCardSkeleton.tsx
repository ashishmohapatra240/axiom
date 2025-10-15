import React from "react";

const PairCardSkeleton: React.FC = () => {
  return (
    <div className="w-full bg-transparent border border-zinc-800 p-1.5">
      <div className="flex flex-col md:flex-row md:items-start gap-2 min-w-0">
        {/* Mobile Layout */}
        <div className="flex md:hidden items-start gap-2 w-full">
          <div className="flex flex-col items-center gap-1 flex-shrink-0">
            <div className="border border-zinc-700 rounded-lg p-0.5">
              <div className="h-16 w-16 rounded-md animate-pulse"></div>
            </div>
            <div className="h-2 w-12 animate-pulse rounded"></div>
          </div>

          <div className="flex flex-col gap-1 flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <div className="h-3 w-12 animate-pulse rounded"></div>
              <div className="h-3 w-24 animate-pulse rounded"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="h-3 w-20 animate-pulse rounded"></div>
              <div className="flex items-center gap-2">
                <div className="h-3 w-16 animate-pulse rounded"></div>
                <div className="h-3 w-16 animate-pulse rounded"></div>
                <div className="h-3 w-12 animate-pulse rounded"></div>
              </div>
            </div>
          </div>

          <div className="h-6 w-16 animate-pulse rounded-full flex-shrink-0"></div>
        </div>

        {/* Desktop Image */}
        <div className="hidden md:flex flex-col items-center gap-1 flex-shrink-0">
          <div className="border border-zinc-700 rounded-lg p-0.5">
            <div className="h-20 w-20 rounded-md animate-pulse"></div>
          </div>
          <div className="h-2 w-16 animate-pulse rounded"></div>
        </div>

        {/* Desktop Content */}
        <div className="flex-1 min-w-0 hidden md:flex flex-col">
          <div className="flex items-center gap-2">
            <div className="h-4 w-16 animate-pulse rounded"></div>
            <div className="h-4 w-32 animate-pulse rounded"></div>
          </div>

          <div className="mt-1.5 flex items-center gap-2">
            <div className="h-6 w-12 animate-pulse rounded-full"></div>
            <div className="h-6 w-6 animate-pulse rounded"></div>
            <div className="h-6 w-6 animate-pulse rounded"></div>
            <div className="h-6 w-6 animate-pulse rounded"></div>
            <div className="h-6 w-6 animate-pulse rounded"></div>
          </div>

          <div className="mt-8 flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-6 w-12 animate-pulse rounded-full"></div>
            ))}
          </div>
        </div>

        {/* Desktop Stats */}
        <div className="hidden md:flex flex-col items-end gap-1.5 flex-shrink-0">
          <div className="h-4 w-24 animate-pulse rounded"></div>
          <div className="h-4 w-20 animate-pulse rounded"></div>
          <div className="h-4 w-28 animate-pulse rounded"></div>
          <div className="h-6 w-24 animate-pulse rounded-full mt-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default PairCardSkeleton;

