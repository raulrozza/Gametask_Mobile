/*****
 * Errors mapping
 *
 * 100: User already exists
 * 101: Player already exists
 * 102: Achievement register already exists
 * 200: User and password don't match
 * 300: Missing parameters
 *
 * *****/

import { toastIds } from './toastIds';

export const errorCodesToToastIds = {
  100: toastIds.USER_EXISTS,
  101: toastIds.ALREADY_IN_GAME,
  102: toastIds.ACHIEVEMENT_ALREADY_OBTAINED,
  200: toastIds.USER_PASSWORD_DONT_MATCH,
  201: toastIds.UNABLE_TO_DELETE_TITLE,
  300: toastIds.MISSING_PARAMETERS,
};
