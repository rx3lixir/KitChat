import { UserButton } from "@clerk/nextjs/app-beta";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl='/' />
      <ModeToggle />
    </div>
  );
}
