/**
 * Minimal mock of tailwind-merge and clsx for shadcn UI components.
 * In a full project, you would `npm install clsx tailwind-merge` 
 * and define this as: `return twMerge(clsx(inputs))`
 */
export function cn(...inputs: (string | undefined | null | false)[]) {
    return inputs.filter(Boolean).join(" ");
}
