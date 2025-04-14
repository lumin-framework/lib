import { z } from "zod";

export const PlayerZod = z.object({
    source: z.number().or(z.null())
})

export type PlayerType = z.infer<typeof PlayerZod>