// @ts-nocheck
/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides session data to the server.
 **/

import type { LayoutServerLoad } from './$types'

export const load = async ({ locals: { safeGetSession }, cookies }: Parameters<LayoutServerLoad>[0]) => {
  const { session, user } = await safeGetSession()

  return {
    session,
    user,
    cookies: cookies.getAll(),
  }
}
