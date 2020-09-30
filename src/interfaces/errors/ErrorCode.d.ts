import { errorCodesToToastIds } from '../../config/errors/errorCodesToToastIds';

export type ErrorCode = keyof typeof errorCodesToToastIds;
