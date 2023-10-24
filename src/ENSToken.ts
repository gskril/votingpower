import { ponder } from "@/generated";

ponder.on("ENSToken:Approval", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("ENSToken:Claim", async ({ event, context }) => {
  console.log(event.params);
});
