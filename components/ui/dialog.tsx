import { Dialog as DialogPrimitive } from "@base-ui/react/dialog";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";

function Dialog(props: DialogPrimitive.Root.Props) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger(props: DialogPrimitive.Trigger.Props) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose(props: DialogPrimitive.Close.Props) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogBackdrop({ className, ...props }: DialogPrimitive.Backdrop.Props) {
  return (
    <DialogPrimitive.Backdrop
      data-slot="dialog-backdrop"
      className={cn(
        "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
        className
      )}
      {...props}
    />
  );
}

function DialogPopup({
  className,
  children,
  showClose = true,
  ...props
}: DialogPrimitive.Popup.Props & { showClose?: boolean }) {
  return (
    <DialogPrimitive.Portal data-slot="dialog-portal">
      <DialogBackdrop />
      <DialogPrimitive.Popup
        data-slot="dialog-popup"
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col gap-6 border-l border-border bg-card p-6 shadow-lg outline-none transition-transform duration-300 ease-out data-[ending-style]:translate-x-full data-[starting-style]:translate-x-full",
          className
        )}
        {...props}
      >
        {showClose ? (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            aria-label="Close menu"
            className="absolute top-6 right-6 rounded-lg p-2 text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
          >
            <X className="size-5" />
          </DialogPrimitive.Close>
        ) : null}
        {children}
      </DialogPrimitive.Popup>
    </DialogPrimitive.Portal>
  );
}

function DialogTitle({ className, ...props }: DialogPrimitive.Title.Props) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn("text-lg font-semibold text-foreground", className)}
      {...props}
    />
  );
}

export { Dialog, DialogTrigger, DialogClose, DialogPopup, DialogBackdrop, DialogTitle };
