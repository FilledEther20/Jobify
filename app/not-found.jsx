import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100vh] px-4 text-center">
      <h1 className="text-6xl font-bold gradient-title mb-4">
        404
      </h1>
      <h2 className="text-4xl font-semibold mb-4">
        Page Not Found
      </h2>
      <div className="text-gray-500 mb-8">
        Oops! the page you&apos;re looking for doesn&apos;t exist or has been
        moved
      </div>
      <Link href={"/"}>
        <Button className={"mt-4 "}>
            Return home
        </Button>
      </Link>
    </div>
  );
}
