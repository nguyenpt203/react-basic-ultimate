import { useState } from "react";
import { Input, Modal, notification } from "antd";
import { createUserAPI } from "../../services/api.services";

const UpdateUserModal = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassWord] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(true);
    const handleSubmitBtn = async () => {
        const res = await createUserAPI(fullName, email, phone, password)
        if (res.data) {
            notification.success({
                message: "Create User",
                description: "Tạo user thành công"
            })
            resetAndCloseModal()
            // await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullName("")
        setEmail("")
        setPhone("")
        setPassWord("")
    }
    return (
        <Modal
            title="Update a User"
            open={isModalOpen}
            onOk={() => { handleSubmitBtn() }}
            onCancel={() => { resetAndCloseModal() }}
            maskClosable={false}
            okText={"SAVE"}
        >
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

            </div>

        </Modal>
    )
}

export default UpdateUserModal;