import { Project } from "../project/Project";
import { JsonValue } from "type-fest";

export type Borrar = {
  createdAt: Date;
  id: string;
  task?: Array<Project>;
  uno: JsonValue;
  updatedAt: Date;
};
