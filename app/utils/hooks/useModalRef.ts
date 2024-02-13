import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

export const useModalRef = () => {
  const modalRef = useRef<BottomSheetModal>();

  const present = useCallback(() => modalRef.current?.present(), []);
  const dismiss = useCallback(() => modalRef.current?.close(), []);

  return { modalRef, present, dismiss };
};
