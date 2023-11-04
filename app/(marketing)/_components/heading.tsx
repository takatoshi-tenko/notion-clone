"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your ideas, Documents, & Plans, Unified, Welcome to{" "}
        <span className="underline">Tenkotion</span>
      </h1>
      <h3 className="text-base sm:text-xml md:text-2xl font-medium">
        Tenkotion is the connected wordspace where <br />
        better, faster work happens.
      </h3>
      <Button>
        Enter Tenkotion
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
};
