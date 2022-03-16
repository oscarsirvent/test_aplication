import { BorrarUpdateManyWithoutProjectsInput } from "./BorrarUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  borrars?: BorrarUpdateManyWithoutProjectsInput;
  description?: string | null;
  name?: string;
  owner?: UserWhereUniqueInput;
  startDate?: Date | null;
};
