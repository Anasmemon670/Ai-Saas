import *"react";
import { Slot } from "@radix-ui/react-slot@1.1.2";
import { cva, 

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}  & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
