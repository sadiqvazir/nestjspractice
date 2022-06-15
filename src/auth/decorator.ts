
import { SetMetadata } from '@nestjs/common';

export const IS_PUBLIC_KEY = 'isPublic';
export const IS_ALLOW_ANNONYMOUS = 'isAllowAnon';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
export const AllowAnonymous = () => SetMetadata(IS_ALLOW_ANNONYMOUS, true);
