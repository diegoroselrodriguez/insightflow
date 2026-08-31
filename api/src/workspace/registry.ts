export interface WorkspaceTable {

  id: string;

  notionName: string;

  logicalName: string;

}

export class WorkspaceRegistry {

  private tables: WorkspaceTable[] = [];

  setTables(tables: WorkspaceTable[]) {

    this.clear();
    this.tables = tables;

  }

  getTables() {

    return this.tables;

  }

    registerTable(table: WorkspaceTable) {

        const exists = this.tables.find(
            t => t.logicalName === table.logicalName
        );

        if (exists) {
            return;
        }

        this.tables.push(table);

    }

    getTable(logicalName: string) {

        return this.tables.find(
            table => table.logicalName === logicalName
        );

    }

    clear(){
        this.tables = [];
    }
}