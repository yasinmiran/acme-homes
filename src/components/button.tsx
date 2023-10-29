import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import classNames from "classnames";

export interface ButtonProps extends PropsWithChildren<
    ButtonHTMLAttributes<HTMLButtonElement>
> {
    secondary?: boolean;
}

export default function Button(props: ButtonProps) {

    const { secondary, children, ...rest } = props;

    return (
        <button
            { ...rest }
            type="button"
            className={
                classNames(
                    "rounded-md px-3 py-2 text-sm font-semibold shadow-sm",
                    {
                        "bg-dark-blue text-white hover:bg-dim-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dim-blue": !secondary,
                        "bg-white text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50": !!secondary,
                        "bg-gray-300 text-dim-gray cursor-not-allowed disabled:pointer-events-none": rest.disabled
                    })
            }
        >
            { children }
        </button>
    );

}