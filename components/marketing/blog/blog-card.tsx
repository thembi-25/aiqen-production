import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { AiqenCard } from "@/components/ui/aiqen-card";
import type { BlogPost } from "@/lib/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <AiqenCard className="flex h-full flex-col group-hover:border-foreground/20">
        <span className="w-fit rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-text">
          {post.category}
        </span>

        <h3 className="mt-4 text-lg font-semibold text-foreground transition-colors group-hover:text-primary-text">
          {post.title}
        </h3>

        <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>

        <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="size-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="size-3.5" />
            {post.readTime}
          </span>
        </div>
      </AiqenCard>
    </Link>
  );
}
