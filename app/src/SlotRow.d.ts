import type { Slot } from "./types";
interface SlotRowProps {
    slot: Slot;
    booked: boolean;
    onToggle: (day: string) => void;
}
export declare function SlotRow({ slot, booked, onToggle }: SlotRowProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=SlotRow.d.ts.map