import { llmsSummary, textResponse } from "@/lib/llms";

// Short plain-text summary for AI assistants (llmstxt.org); built in src/lib/llms.ts.
export const dynamic = "force-static";

export function GET() {
  return textResponse(llmsSummary());
}
