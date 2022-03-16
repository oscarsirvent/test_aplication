import { InputJsonValue } from "../../types";
import { ProjectCreateNestedManyWithoutBorrarsInput } from "./ProjectCreateNestedManyWithoutBorrarsInput";

export type BorrarCreateInput = {
  data?: InputJsonValue;
  task?: ProjectCreateNestedManyWithoutBorrarsInput;
  uno?: InputJsonValue;
};
