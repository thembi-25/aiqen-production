import { Menu as MenuPrimitive } from "@base-ui/react/menu";

import { cn } from "@/lib/utils";

function Menu(props: MenuPrimitive.Root.Props) {
  return <MenuPrimitive.Root data-slot="menu" {...props} />;
}

function MenuTrigger(props: MenuPrimitive.Trigger.Props) {
  return <MenuPrimitive.Trigger data-slot="menu-trigger" {...props} />;
}

function MenuPopup({ className, ...props }: MenuPrimitive.Popup.Props) {
  return (
    <MenuPrimitive.Portal data-slot="menu-portal">
      <MenuPrimitive.Positioner sideOffset={8} align="start" className="z-50 outline-none">
        <MenuPrimitive.Popup
          data-slot="menu-popup"
          className={cn(
            "min-w-48 rounded-xl border border-border bg-card p-1.5 shadow-lg outline-none data-[ending-style]:opacity-0 data-[starting-style]:opacity-0",
            className
          )}
          {...props}
        />
      </MenuPrimitive.Positioner>
    </MenuPrimitive.Portal>
  );
}

function MenuItem({ className, ...props }: MenuPrimitive.Item.Props) {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn(
        "flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground outline-none transition-colors data-[highlighted]:bg-muted data-[disabled]:cursor-not-allowed data-[disabled]:text-muted-foreground data-[disabled]:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Menu, MenuTrigger, MenuPopup, MenuItem };
