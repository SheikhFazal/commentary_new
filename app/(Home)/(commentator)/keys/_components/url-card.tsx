import { Input } from "@/components/ui/input";

import { CopyButton } from "./copy-button";

interface UrlCardProps {
  value: string | null;
};

export const UrlCard = ({
  value,
}: UrlCardProps) => {
  return (
    <div className="rounded-xl bg-[#11151E] p-6">
      <div className="flex sm:flex-row flex-col sm:items-center md:gap-8 gap-3  ">
        <p className="font-semibold shrink-0 text-start">
          Server URL
        </p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              disabled
              placeholder="Server URL"
              className="bg-[#090A0D]"
            />
            <CopyButton
              value={value || ""}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
