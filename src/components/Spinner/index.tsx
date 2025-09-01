import { ScaleLoader } from "react-spinners";

type SpinnerProps = {
    color?: string;
    height ?: string;
    width ?: string;
    margin?: string;
    radius?: string;
    loading?: boolean;
    speedMultiplier?: number;
} 


export default function Spinner({
    color= "#0052f5",
    height= "50px",
    width = "4px",
    margin = "4px",
    radius = "2px",
    loading = true,
    speedMultiplier = 0.8
} : SpinnerProps){
    return (
        <ScaleLoader
            color={color}
            height={height}
            width={width}
            margin={margin}
            radius={radius}
            loading={loading}
            speedMultiplier={speedMultiplier}
        />
    );
}