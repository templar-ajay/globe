"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useSearchParams } from "next/navigation";

export function ThemeModeToggle() {
  const { setTheme } = useTheme();
  const searchParams = useSearchParams();
  const theme = searchParams.get("theme") as string;
  if (theme) {
    return <></>;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="rounded-full">
          <Sun className="h-[1.2rem] ease-in w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute ease-in h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="rounded-[20px]" align="end">
        <DropdownMenuItem
          className="rounded-full justify-center"
          onClick={() => setTheme("light")}
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full justify-center"
          onClick={() => setTheme("dark")}
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          className="rounded-full justify-center"
          onClick={() => setTheme("system")}
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
