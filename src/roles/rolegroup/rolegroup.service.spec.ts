import { Test, TestingModule } from '@nestjs/testing';
import { RolegroupService } from './rolegroup.service';

describe('RolegroupService', () => {
  let service: RolegroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolegroupService],
    }).compile();

    service = module.get<RolegroupService>(RolegroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
