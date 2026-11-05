import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SlotRow } from "./SlotRow";
export function SlotTable({ slots, booked, onToggle }) {
    return (_jsxs("table", { children: [_jsx("caption", { children: "Weekly office hours" }), _jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Day" }), _jsx("th", { scope: "col", children: "Time" }), _jsx("th", { scope: "col", children: "Location" }), _jsx("th", { scope: "col", children: "Book" })] }) }), _jsx("tbody", { children: slots.map((slot) => (_jsx(SlotRow, { slot: slot, booked: booked.includes(slot.day), onToggle: onToggle }, slot.day))) })] }));
}
//# sourceMappingURL=SlotTable.js.map