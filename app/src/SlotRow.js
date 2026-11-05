import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function SlotRow({ slot, booked, onToggle }) {
    const action = booked ? "Cancel" : "Select";
    return (_jsxs("tr", { className: booked ? "selected" : undefined, children: [_jsx("th", { scope: "row", children: slot.day }), _jsxs("td", { children: [_jsx("time", { dateTime: slot.start, children: slot.start }), _jsx("time", { dateTime: slot.end, children: slot.end })] }), _jsx("td", { children: slot.room }), _jsx("td", { children: _jsx("button", { type: "button", "aria-label": `${action} ${slot.day}`, onClick: () => onToggle(slot.day), children: action }) })] }));
}
//# sourceMappingURL=SlotRow.js.map