/**
 * (c) Copyright BAYMS
 *
 * Original Author:     Lin Jiang
 * License:             MIT License
 *
 * Provides session data to the server.
 **/

import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ locals: { session } }) => {
  return {
    session,
  }
}
