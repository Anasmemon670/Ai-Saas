"use client";

import *"react";
import *"@radix-ui/react-toggle@1.1.2";
import { cva, 

function Toggle({
  className,
  variant,
  size,
  ...props
} ) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
