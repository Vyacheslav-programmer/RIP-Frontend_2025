import {FormGroup, Input, Label} from "reactstrap";
import {InputType} from "reactstrap/types/lib/Input"

type Props = {
    label: string
    placeholder?: string
    value: number
    setValue?: (value: number) => void
    disabled: boolean
    required?: boolean
    error?: boolean
    valid?: boolean
    type?: string
    className?: string
}

const CustomInput = ({label, placeholder="", value, setValue, disabled, required=true, error=false, valid=false, type="string", className="w-100"}:Props) => {
    return (
        <FormGroup>
            <Label>{label}</Label>
            <Input
                placeholder={placeholder}
                className={className}
                type={type as InputType}
                value={value}
                onChange={(e) => setValue && setValue(Number(e.target.value))}
                invalid={error}
                disabled={disabled}
                required={required}
                valid={valid}
            />
        </FormGroup>
    );
};

export default CustomInput
