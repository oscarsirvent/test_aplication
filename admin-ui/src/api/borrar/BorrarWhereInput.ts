import { StringFilter } from "../../util/StringFilter";
import { ProjectListRelationFilter } from "../project/ProjectListRelationFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type BorrarWhereInput = {
  id?: StringFilter;
  task?: ProjectListRelationFilter;
  uno?: JsonFilter;
};
