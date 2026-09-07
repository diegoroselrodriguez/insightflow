export class EntityCache<T extends { id: string }> {

  private items = new Map<string, T>();

  setAll(values: T[]) {

    this.items.clear();

    values.forEach(value => {
      this.items.set(value.id, value);
    });

  }

  get(id: string | null) {

    if (!id) {
      return null;
    }

    return this.items.get(id) ?? null;

  }

  getAll() {

    return [...this.items.values()];

  }

}