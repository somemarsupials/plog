import { Store } from "@app/types";

import { read } from "./read";
import { write } from "./write";

export const createFsStore = (root: string): Store => {
  return {
    read: read(root),
    write: write(root)
  };
};
