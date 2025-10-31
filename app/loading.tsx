export default function Loading() {
  return (
    <div className="flex-center min-h-screen">
      <div className="relative">
        <div className="size-16 rounded-full border-4 border-primary/20"></div>
        <div className="absolute inset-0 size-16 animate-spin rounded-full border-4 border-transparent border-t-primary"></div>
        <div className="absolute inset-0 flex-center">
          <div className="size-3 animate-pulse rounded-full bg-primary"></div>
        </div>
      </div>
    </div>
  );
}
