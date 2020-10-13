export const customStyles = {
    option: (provided, state) => ({
        ...provided,
        textAlign: 'left',
        borderBottom: '1px dotted #181922',
        color: state.isSelected ? '#a3ff12' : '#181922',
        backgroundColor: state.isSelected ? '#181922' : 'none',
        padding: 10,
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

export const genders = [
    { value: 'مرد', label: 'مرد' },
    { value: 'زن', label: 'زن' },
];

export const startYears = [
    { value: '1360', label: '1360' },
    { value: '1361', label: '1361' },
    { value: '1362', label: '1362' },
    { value: '1363', label: '1363' },
    { value: '1364', label: '1364' },
    { value: '1365', label: '1365' },
    { value: '1366', label: '1366' },
    { value: '1367', label: '1367' },
    { value: '1368', label: '1368' },
    { value: '1369', label: '1369' },
    { value: '1370', label: '1370' },
    { value: '1371', label: '1371' },
    { value: '1372', label: '1372' },
    { value: '1373', label: '1373' },
    { value: '1374', label: '1374' },
    { value: '1375', label: '1375' },
    { value: '1376', label: '1376' },
    { value: '1377', label: '1377' },
    { value: '1378', label: '1378' },
    { value: '1379', label: '1379' },
    { value: '1380', label: '1380' },
    { value: '1381', label: '1381' },
    { value: '1382', label: '1382' },
    { value: '1383', label: '1383' },
    { value: '1384', label: '1384' },
    { value: '1385', label: '1385' },
    { value: '1386', label: '1386' },
    { value: '1387', label: '1387' },
    { value: '1388', label: '1388' },
    { value: '1389', label: '1389' },
    { value: '1390', label: '1390' },
    { value: '1391', label: '1391' },
    { value: '1392', label: '1392' },
    { value: '1393', label: '1393' },
    { value: '1394', label: '1394' },
    { value: '1395', label: '1395' },
    { value: '1396', label: '1396' },
    { value: '1397', label: '1397' },
    { value: '1398', label: '1398' },
    { value: '1399', label: '1399' },
];