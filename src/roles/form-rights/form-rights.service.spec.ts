import { Test, TestingModule } from '@nestjs/testing';
import { FormRightsService } from './form-rights.service';

describe('FormRightsService', () => {
  let service: FormRightsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormRightsService],
    }).compile();

    service = module.get<FormRightsService>(FormRightsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
