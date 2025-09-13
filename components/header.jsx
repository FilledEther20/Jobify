import React from "react";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  FileText,
  GraduationCap,
  LayoutDashboard,
  PenBoxIcon,
} from "lucide-react";
import { StarsIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { checkUser } from "@/lib/checkUser";
const Header = async () => {
  await checkUser()
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 backdrop-filter supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-2 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={60}
            className="h-15 w-auto object-contain"
          />
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button variant="outline">
                <LayoutDashboard className="h-4 w-4 text-sm" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button>
                  <StarsIcon className="h-4 w-4 text-sm" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>
                  <Link href="/resume" className=" flex items-center gap-2">
                    <FileText className="h-4 w-4 text-sm" />
                    <span className="w-auto">Build Resume</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link
                    href="/cover-letter"
                    className=" flex items-center gap-2"
                  >
                    <PenBoxIcon className="h-4 w-4 text-sm text-accent-foreground" />
                    <span className="w-auto">Cover Letter</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/prep" className=" flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-sm text-accent-foreground" />
                    <span className="w-auto">Interview Prep</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>
          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn className="mr-40">
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              /* TODO: If need be define after signout route */
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
};

export default Header;
