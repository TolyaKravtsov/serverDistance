import { useCallback, useEffect, useState } from "react";

import { Server } from "../../common/Types";

type SortDirection = "asc" | "desc";
type Fields = "name" | "distance";

export const useTableSort = (data?: Server[]) => {
  const [sortDirection, setSortDirection] = useState<SortDirection>("asc");
  const [serverInfo, setServerInfo] = useState<Server[] | undefined>(data);
  const [fieldName, setFieldName] = useState<Fields>("name");

  useEffect(() => {
    setServerInfo(data);
  }, [data]);

  const onSort = useCallback(
    (field: Fields) => {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
      setFieldName(field);
      if (field === "distance") {
        return setServerInfo(
          serverInfo?.sort((a, b) => (sortDirection === "asc" ? a.distance - b.distance : b.distance - a.distance)),
        );
      } else {
        return setServerInfo(
          serverInfo?.sort((a, b) =>
            sortDirection === "asc"
              ? a.name.toLocaleLowerCase().localeCompare(b.name.toLocaleLowerCase())
              : b.name.toLocaleLowerCase().localeCompare(a.name.toLocaleLowerCase()),
          ),
        );
      }
    },
    [serverInfo, sortDirection],
  );

  return { onSort, sortDirection, serverInfo, fieldName };
};
