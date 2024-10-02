import { create } from "zustand";

const useOTPconfirmModal = create((set) => ({
    isOpen: false,
    email:"",
    onOpen: (email) => set({ isOpen: true, email }),
    onClose: () => set({ isOpen: false, email: "" }),
}));

export default useOTPconfirmModal;