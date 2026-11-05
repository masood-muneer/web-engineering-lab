import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Greeting } from "./Greeting";
import { SlotTable } from "./SlotTable";
import { StatusMessage } from "./StatusMessage";
import { slots } from "./types";
export default function App() {
    const [booked, setBooked] = useState([]);
    function toggle(day) {
        setBooked((current) => current.includes(day)
            ? current.filter((d) => d !== day)
            : [...current, day]);
    }
    return (_jsxs(_Fragment, { children: [_jsx("a", { href: "#main-content", className: "skip-link", children: "Skip to main content" }), _jsx("header", { children: _jsx(Greeting, { name: "Muhammad Masood" }) }), _jsx("main", { id: "main-content", children: _jsxs("section", { "aria-labelledby": "schedule-heading", id: "schedule", children: [_jsx("h2", { id: "schedule-heading", className: "span-all", children: "Office Hours" }), _jsx(SlotTable, { slots: slots, booked: booked, onToggle: toggle }), _jsx(StatusMessage, { count: booked.length, total: slots.length })] }) }), _jsx("footer", { children: _jsx("address", { children: "Contact your instructor for help." }) })] }));
}
//# sourceMappingURL=App.js.map