import DefaultLayout from "./DefaultLayout";
import NoLayout from "./NoLayout";
export const Layouts = {
        Default: DefaultLayout,
        undefined: NoLayout
};
export type LayoutKeys = keyof typeof Layouts; // "Main" | "Admin"

