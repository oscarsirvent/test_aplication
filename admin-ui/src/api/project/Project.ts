import { Borrar } from "../borrar/Borrar";
import { User } from "../user/User";

export type Project = {
  borrars?: Array<Borrar>;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string;
  owner?: User;
  startDate: Date | null;
  updatedAt: Date;
};
