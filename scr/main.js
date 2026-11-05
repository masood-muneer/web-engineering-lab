"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_js_1 = require("./Utils.js");
const slots = [
    {
        day: "Monday",
        start: "10:00",
        end: "11:00",
        room: "Room 214"
    },
    {
        day: "Wednesday",
        start: "14:00",
        end: "15:00",
        room: "Room 214"
    }
];
const status = (0, Utils_js_1.getRequired)("#status");
const tbody = (0, Utils_js_1.getRequired)("#schedule tbody");
const nextBooking = (0, Utils_js_1.makeCounter)();
tbody.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof Element))
        return;
    const button = target.closest("button[data-day]");
    const row = target.closest("tr");
    if (button === null || row === null)
        return;
    const slot = slots.find((s) => s.day === button.dataset.day);
    if (slot === undefined)
        return;
    status.textContent = `Updating ${slot.day}…`;
    await (0, Utils_js_1.delay)(1000);
    const booked = row.classList.toggle("selected");
    const count = document.querySelectorAll("#schedule tr.selected").length;
    status.textContent = booked
        ? `Booking #${nextBooking()} confirmed: ${(0, Utils_js_1.describeSlot)(slot)}. ${count} of ${slots.length} slots booked.`
        : `Booking for ${slot.day} cancelled. ${count} of ${slots.length} slots booked.`;
});
//# sourceMappingURL=main.js.map