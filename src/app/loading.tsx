import { FileText } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background-light">
      <div className="flex flex-col items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
          <FileText className="h-8 w-8 text-primary animate-pulse" />
        </div>
        <div className="h-2 w-48 rounded-full bg-primary/20 overflow-hidden">
          <div className="h-full w-1/3 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </div>
  );
}
