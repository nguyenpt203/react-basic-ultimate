import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.services";
const UserForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassWord] = useState("")

    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, phone, password)
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tạo user thành công"
            })
        }

        console.log(">>> check res:", res.data)
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
                        onClick={handleClickBtn}
                        type='primary'>Create User</Button>
                </div>
            </div>
        </div>
    )
}

export default UserForm;