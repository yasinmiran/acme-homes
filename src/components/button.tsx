import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
> {
    inactive?: boolean;
    secondary?: boolean;
}

export default function Button(props: ButtonProps) {

    const { children, inactive, ...rest } = props;

    return (
        <button
            { ...rest }
            type="button"
            className={
                `rounded-md px-3 py-2 text-sm font-semibold shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 ${
                    inactive ? "bg-gray-300/75 text-dim-gray" : ""
                }`
            }
        >
            { children }
        </button>
    );

}