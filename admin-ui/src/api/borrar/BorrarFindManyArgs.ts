import { BorrarWhereInput } from "./BorrarWhereInput";
import { BorrarOrderByInput } from "./BorrarOrderByInput";

export type BorrarFindManyArgs = {
  where?: BorrarWhereInput;
  orderBy?: Array<BorrarOrderByInput>;
  skip?: number;
  take?: number;
};
