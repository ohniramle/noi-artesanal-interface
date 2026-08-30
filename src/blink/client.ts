import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'noi-artesanal-ui-yw9ne94u',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_OixG5SIRr3_BHVAq7iNsen5Ykao-RAhT',
  authRequired: false,
  auth: { mode: 'managed' },
})
