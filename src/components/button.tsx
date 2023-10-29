import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

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
            disabled={ inactive }
            className={
                classNames(
                    "rounded-md px-3 py-2 text-sm disabled:opacity-40 font-semibold shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50", {
                        "bg-gray-200 text-dim-gray pointer-events-none": inactive
                    }
                )
            }
        >
            { children }
        </button>
    );

}