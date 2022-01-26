import './MyLabel.css'

export interface MyLabelProps {
    /**
    *  Label contents
    */
    label: string;
    /*
    *  How large should the label be?
    */
    size: 'normal'|'h1'|'h2'|'h3';
    /*
    *  Capitalaztion?
    */
    allCaps?: boolean;
    /*
    *  basic colors
    */
    color?: 'primary'|'secondary'|'tertiary';
    /*
    * Custom font Color
    */
   fontColor?: string;
}

export const MyLabel = ({
    allCaps = false,
    color = 'primary',
    label = 'No Label',
    size = 'normal',
    fontColor
}: MyLabelProps) => {
    
    return (
        <span 
            className={ ` label ${ size } text-${color}` }
            style={{ color: fontColor }}
        >
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}