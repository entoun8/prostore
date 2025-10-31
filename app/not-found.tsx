import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-center min-h-screen">
      <div className="flex flex-col items-center gap-6 text-center px-4">
        <div className="relative">
          <div className="absolute inset-0 animate-ping rounded-full bg-primary/20 blur-xl"></div>
          <div className="relative rounded-full bg-primary/10 p-6">
            <FileQuestion className="size-20 text-primary" strokeWidth={1.5} />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-foreground">404</h1>
          <h2 className="h2-bold">Page Not Found</h2>
          <p className="text-muted-foreground max-w-md">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            might have been moved or deleted.
          </p>
        </div>

        {/* Action */}
        <Button asChild size="lg" className="mt-2">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
}
