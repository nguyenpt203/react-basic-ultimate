import { Button, Input } from "antd";
import { useState } from "react";

const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassWord] = useState("")

    const handleClick = () => {
        console.log(">>> check state", { fullName, email, phone, password })
    }
    return (
        <div className="user-form" style={{ margin: '20px 0' }}>
            <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>
                        Phone
                    </span>
                    <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
                <div>
                    <span>Password</span>
                    <Input.Password value={password} onChange={(event) => { setPassWord(event.target.value) }} />
                </div>
                <div>
                    <Button
                        onClick={handleClick}
                        type='primary'>Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;