import { Accordion as AccordionPrimitive } from "@base-ui/react/accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({
  className,
  ...props
}: AccordionPrimitive.Root.Props) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("w-full", className)}
      {...props}
    />
  );
}

function AccordionItem({
  className,
  ...props
}: AccordionPrimitive.Item.Props) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("group border-b border-border last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  className,
  children,
  ...props
}: AccordionPrimitive.Trigger.Props) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-center justify-between gap-4 py-5 text-left text-base font-medium text-foreground outline-none transition-colors hover:text-primary-text focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-data-[open]:rotate-180 group-data-[open]:text-primary" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionPanel({
  className,
  children,
  ...props
}: AccordionPrimitive.Panel.Props) {
  return (
    <AccordionPrimitive.Panel
      data-slot="accordion-panel"
      className={cn(
        "overflow-hidden text-muted-foreground data-[ending-style]:h-0 data-[starting-style]:h-0 transition-[height] duration-300 ease-out",
        className
      )}
      {...props}
    >
      <div className="pb-5 text-sm leading-relaxed md:text-base">{children}</div>
    </AccordionPrimitive.Panel>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionPanel };
