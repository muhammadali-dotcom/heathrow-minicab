import { llmsFull, textResponse } from "@/lib/llms";

// The llms.txt summary plus every question and answer on the site; built in src/lib/llms.ts.
export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsFull());
}
