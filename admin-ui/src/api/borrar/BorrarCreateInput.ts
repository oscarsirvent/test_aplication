import { ProjectCreateNestedManyWithoutBorrarsInput } from "./ProjectCreateNestedManyWithoutBorrarsInput";
import { InputJsonValue } from "../../types";

export type BorrarCreateInput = {
  task?: ProjectCreateNestedManyWithoutBorrarsInput;
  uno?: InputJsonValue;
};
