import CustomDropdown from "components/CustomDropdown/CustomDropdown.tsx";

export const CustomDropdownBoolean = ({label, selectedItem, setSelectedItem, disabled}) => {
    const options = {
        false: "Нет",
        true: "Да"
    }

    return (
        <div className="w-25 mb-3">
            <CustomDropdown label={label} options={options} selectedItem={selectedItem} setSelectedItem={setSelectedItem} disabled={disabled} className={"w-100"}/>
        </div>
    )
}

