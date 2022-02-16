import React from "react";
import {
  getDatabase,
  off,
  ref,
  child,
  remove,
  set,
  onValue,
  get,
} from "firebase/database";

class Storage {
  constructor(app) {
    this.db = getDatabase(app);
    this.temp = {};
  }

  syncStocksByStorageType(onUpdate, storageType) {
    const query = ref(this.db, `stock/${storageType}`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  syncItemProperties(onUpdate) {
    const query = ref(this.db, `property`);
    onValue(query, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  updateStock(storageType, itemType, item) {
    set(ref(this.db, `stock/${storageType}/${itemType}/${item.id}`), item);
  }

  clearStock(storageType, itemType) {
    remove(ref(this.db, `stock/${storageType}/${itemType}`));
  }

  updateProperty(itemType, property) {
    set(ref(this.db, `property/${itemType}`), property);
  }

  getItemLargeType(itemType) {
    return itemType.substring(itemType.search(/[A-Z]/g));
  }
}

export default Storage;
