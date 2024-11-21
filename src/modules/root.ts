import { Controller, Get } from '@nestjs/common';

@Controller()
export class Root {
  @Get()
  async root() {
    return "I am Root";
  }
}
