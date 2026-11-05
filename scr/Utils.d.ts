export interface Slot {
    day: string;
    start: string;
    end: string;
    room: string;
}
export declare const delay: (ms: number) => Promise<void>;
export declare function makeCounter(): () => number;
export declare function getRequired<T extends Element>(selector: string, root?: ParentNode): T;
export declare function describeSlot(slot: Slot): string;
//# sourceMappingURL=Utils.d.ts.map