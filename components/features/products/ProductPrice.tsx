import { cn } from "@/lib/utils";

interface ProductPriceProps {
  value: number | string;
  className?: string;
}

export function ProductPrice({ value, className }: ProductPriceProps) {
  const stringValue = Number(value).toFixed(2);

  const [intValue, floatValue] = stringValue.split(".");

  return (
    <p className={cn("text-lg", className)}>
      <span className="text-xs align-super">$</span>
      {intValue}
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
}
