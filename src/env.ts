import { z } from 'zod'

export const ENV = z
  .object({
    VITE_APP_API_URL: z.string().url(),
  })
  .parse(import.meta.env)
