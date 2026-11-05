import type { Slot } from "./types";
interface SlotTableProps {
    slots: Slot[];
    booked: string[];
    onToggle: (day: string) => void;
}
export declare function SlotTable({ slots, booked, onToggle }: SlotTableProps): import("react").JSX.Element;
export {};
//# sourceMappingURL=SlotTable.d.ts.map