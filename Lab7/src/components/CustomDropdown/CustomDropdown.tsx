import {useState} from "react";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";

type DropdownProps = {
    label: string,
    options: Record<number, string>,
    selectedItem: number,
    setSelectedItem: (value:number) => void
    disabled?: boolean
}

const CustomDropdown = ({label, options, selectedItem, setSelectedItem, disabled=false}:DropdownProps) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div className="d-flex align-items-center gap-3 w-100">
            <span>{label}</span>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} className="w-100" disabled={disabled}>
                <DropdownToggle color="primary"  className="w-100" caret>{options[selectedItem]}</DropdownToggle>
                <DropdownMenu className="w-100">
                    {Object.entries(options).map(([key, value]) => (
                        <DropdownItem active={key == selectedItem.toString()} key={key} onClick={() => setSelectedItem(key as unknown as number)}>{value}</DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}

export default CustomDropdown
