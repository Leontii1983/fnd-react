

const CustomSelect = ({options, defaultValue, value, onChange}) => {
    return(
        <div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">{defaultValue}</option>
          { options.map(option => {
              return <option key={option.value} value={option.value}>
                  {option.name}
              </option>
          })}
        </select>
      </div>
    );
}

export default CustomSelect;