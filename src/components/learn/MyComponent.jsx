// () => {}
// component = html + css + js

import './style.css';
const MyComponent = () => {
    return (
        <>
        // fragment
            <div className="abcs">Phung Thai Nguyen</div>
            <div className="child" style={{ borderRadius: '20px' }}>child</div>
        </>
    )
}

export default MyComponent