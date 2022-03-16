import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";

export type BorrarWhereInput = {
  data?: JsonFilter;
  id?: StringFilter;
  task?: ProjectListRelationFilter;
  uno?: JsonFilter;
};
