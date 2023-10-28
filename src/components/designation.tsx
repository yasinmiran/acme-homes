export type Designation = "USUALLY_BOOKED" | "LOW_RATE" | "NONE";

export interface DesignationProps {
    designation: Designation;
}

export default function Designation({ designation }: DesignationProps) {

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
        <span className="p-1 md:p-2 border rounded-lg text-xs md:text-sm h-fit w-fit">
            { resolveDesignation() }
        </span>
    );

}