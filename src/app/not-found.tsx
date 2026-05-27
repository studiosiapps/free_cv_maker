import Link from "next/link";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light px-4">
      <div className="flex flex-col items-center gap-6 text-center max-w-sm">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10">
          <FileText className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-text-dark">404</h1>
        <p className="text-text-light">
          The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Button asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
