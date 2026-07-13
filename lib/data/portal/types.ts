export interface ThreadMessage {
  id: string;
  author: string;
  authorRole: "client" | "aiqen";
  body: string;
  timestamp: string;
}
