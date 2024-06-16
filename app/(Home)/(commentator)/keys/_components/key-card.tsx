"use client";

import { useState } from "react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { CopyButton } from "./copy-button";

interface KeyCardProps {
  value: string | null;
};

export const KeyCard = ({
  value,
}: KeyCardProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="rounded-xl bg-[#11151E] p-6">
      <div className="flex sm:flex-row flex-col items-start md:gap-8 gap-3">
        <p className="font-semibold pt-2 shrink-0">
          Stream Key
        </p>
        <div className="space-y-2 w-full">
          <div className="w-full flex items-center gap-x-2">
            <Input
              value={value || ""}
              type={show ? "text" : "password"}
              disabled
              className="bg-[#090A0D]"
              placeholder="Stream key"
            />
            <CopyButton value={value || ""} />
          </div>
          <Button
            onClick={() => setShow(!show)}
            size="sm"
            variant="link"
          >
            {show ? "Hide" : "Show"}
          </Button>
        </div>
      </div>
    </div>
  );
};
