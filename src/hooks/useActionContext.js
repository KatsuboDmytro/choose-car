import { useContext } from "react";
import { ActionContext } from "../components/table/Table";

export const useActionContext = () => useContext(ActionContext);