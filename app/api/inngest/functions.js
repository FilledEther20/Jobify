import { inngest } from "@/lib/inngest/client";

export const helloWorld=inngest.createFunction(
    {id:"Hello-world"},
    {event:"test/hello.world"},
    async ({event,step})=>{
        await step.sleep("wait-a-moment","1s");
        return {message:`Hello ${event.data.email}!`}
    }
)