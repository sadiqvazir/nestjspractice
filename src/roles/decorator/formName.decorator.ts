import { SetMetadata } from '@nestjs/common';

export const FormName = (formName: string) => SetMetadata('formName', formName);