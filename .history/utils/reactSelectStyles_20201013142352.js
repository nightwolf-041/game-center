export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        textAlign: 'left',
        borderBottom: '1px dotted #181922',
        color: state.isSelected ? '#a3ff12' : '#181922',
        backgroundColor: state.isSelected ? '#181922' : 'none',
        padding: 10,
        ':hover': {
            backgroundColor: '#1819223a',
        },
    }),
    placeholder: () => ({
        color: '#ffffffb4',
        fontSize: '0.8rem',
        marginBottom: '0.5rem',
    }),
    control: () => ({
        height: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignitems: 'center',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const color = '#ffffffb4';

        return {...provided, opacity, transition, color };
    },
    multiValue: (styles) => ({
        ...styles,
        backgroundColor: '#ffffffb4',
    }),
    multiValueLabel: (styles) => ({
        ...styles,
        color: '#181922',
    }),
    multiValueRemove: (styles) => ({
        ...styles,
        color: 'red',
        alignItems: 'center',
        borderRadius: '2px',
        display: 'flex',
        paddingLeft: '4px',
        paddingRight: '4px',
        boxSizing: 'border-box',
        cursor: 'pointer',
    }),
};

export const RTLCustomStyles = {
    option: (provided, state) => ({
        ...provided,
        textAlign: 'right',
        borderBottom: '1px dotted #181922',
        color: state.isSelected ? '#a3ff12' : '#181922',
        backgroundColor: state.isSelected ? '#181922' : 'none',
        padding: 10,
        ':hover': {
            backgroundColor: '#1819223a',
        },
    }),
    placeholder: () => ({
        color: '#ffffffb4',
        fontSize: '0.8rem',
        marginBottom: '0.5rem',
    }),
    control: () => ({
        height: '2rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignitems: 'center',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        const color = '#ffffffb4';

        return {...provided, opacity, transition, color };
    },
};