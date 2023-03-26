import { Borrar as TBorrar } from "../api/borrar/Borrar";

export const BORRAR_TITLE_FIELD = "id";

export const BorrarTitle = (record: TBorrar): string => {
  return record.id || String(record.id);
};
