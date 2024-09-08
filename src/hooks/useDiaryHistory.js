import { useMemo } from "react";

export function useDiaryHistory() {
  const diary = useMemo(
    () => JSON.parse(window.localStorage.getItem("diary") || "{}"),
    []
  );

  return diary;
}
