import { SetMetadata } from '@nestjs/common';

export const FunctionName = (functionName: string) => SetMetadata('functionName', functionName);