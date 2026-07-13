"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";

import { toggleSubscriberStatusAction } from "@/app/actions/admin";
import { Button } from "@/components/ui/button";

export function SubscriberStatusToggle({
  subscriberId,
  status,
}: {
  subscriberId: string;
  status: string;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const isSubscribed = status === "subscribed";

  function handleToggle() {
    startTransition(async () => {
      await toggleSubscriberStatusAction(subscriberId, isSubscribed ? "unsubscribed" : "subscribed");
      router.refresh();
    });
  }

  return (
    <Button
      type="button"
      variant={isSubscribed ? "destructive" : "outline"}
      size="sm"
      disabled={isPending}
      onClick={handleToggle}
    >
      {isSubscribed ? "Unsubscribe" : "Resubscribe"}
    </Button>
  );
}
