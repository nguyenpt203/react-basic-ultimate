// () => {}
// component = html + css + js
// fragment

import './style.css';
const MyComponent = () => {
    const fullName = "Phùng Thái Nguyên";
    const age = 21;

    return (
        <>
            <div className="abc">{fullName}</div>
            <div className="child" style={{ borderRadius: '20px' }}>{age}</div>
        </>
    )
}

export default MyComponent