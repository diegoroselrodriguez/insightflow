import { NotionGateway } from "../adapter/notion/notion.gateway.js";

export class EntityService<T> {

  constructor(
    private gateway: NotionGateway,
    private dataSourceId: string,
    private mapper: (page: any) => T
  ) {}

  async execute(): Promise<T[]> {

    const pages = await this.gateway.queryDataSource(
      this.dataSourceId
    );

    return pages.map(this.mapper);

  }

}