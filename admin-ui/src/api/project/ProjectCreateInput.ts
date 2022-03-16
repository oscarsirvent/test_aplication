import { BorrarCreateNestedManyWithoutProjectsInput } from "./BorrarCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  borrars?: BorrarCreateNestedManyWithoutProjectsInput;
  description?: string | null;
  name: string;
  owner: UserWhereUniqueInput;
  startDate?: Date | null;
};
