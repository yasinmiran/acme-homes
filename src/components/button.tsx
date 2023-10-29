import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

export interface ButtonProps extends PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
> {
    secondary?: boolean;
}

export default function Button(props: ButtonProps) {

    const { children, ...rest } = props;

    return (
        <button
            { ...rest }
            type="button"
            className={
                classNames(
                    "rounded-md px-3 py-2 text-sm font-semibold shadow-sm bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50",
                    {
                        "bg-gray-300/75 text-dim-gray disabled:pointer-events-none": rest.disabled
                    }
                )
            }
        >
            { children }
        </button>
    );

}