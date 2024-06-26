import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
    <h1 className="text-primary text-5xl">Shadcn Workshop</h1>
    <ModeToggle/>
    </main>
  );
}
