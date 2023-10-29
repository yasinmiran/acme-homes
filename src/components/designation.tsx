import * as classNames from "classnames";

export type Designation = "USUALLY_BOOKED" | "LOW_RATE" | "NONE";

export interface DesignationProps {
    designation: Designation;
    className?: string;
}

export default function Designation({ designation, className }: DesignationProps) {

    if (designation == "NONE") {
        return null;
    }

    const resolveDesignation = () => {
        switch (designation) {
            case "USUALLY_BOOKED":
                return "Usually booked";
            case "LOW_RATE":
                return "Low rate";
            default:
                return null;
        }
    }

    return (
        <span
            className={ classNames(
                "p-1.5 border rounded-lg text-xs md:text-sm h-fit w-fit",
                {
                    "bg-light-blue border border-dark-blue": designation === "USUALLY_BOOKED",
                    "bg-light-purple border border-dim-purple": designation === "LOW_RATE"
                },
                className
            ) }
        >
            { resolveDesignation() }
        </span>
    );

}