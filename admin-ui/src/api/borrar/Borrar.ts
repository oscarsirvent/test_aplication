import { JsonValue } from "type-fest";
import { Project } from "../project/Project";

export type Borrar = {
  createdAt: Date;
  data: JsonValue;
  id: string;
  task?: Array<Project>;
  uno: JsonValue;
  updatedAt: Date;
};
