import { useEffect, useState } from "react";
import { Input, Modal, notification } from "antd";
import { updateUserAPI } from "../../services/api.services";

const UpdateUserModal = (props) => {
    const [phone, setPhone] = useState("")
    const [fullName, setFullName] = useState("");
    const [id, setId] = useState("")

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate, loadUser } = props;

    useEffect(() => {
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullName(dataUpdate.fullName)
            setPhone(dataUpdate.phone)
        }
    }, [dataUpdate])

    const handleSubmitBtn = async () => {
        const res = await updateUserAPI(id, fullName, phone)
        if (res.data) {
            notification.success({
                message: "Update User",
                description: "Cập nhật user thành công"
            })
            resetAndCloseModal()
            await loadUser()
        } else {
            notification.error({
                message: "Error create user",
                description: JSON.stringify(res.message)
            })
        }

    }

    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false)
        setFullName("")
        setPhone("")
        setId("")
        setDataUpdate(null)
    }
    return (
        <Modal
            title="Update a User"
            open={isModalUpdateOpen}
            onOk={handleSubmitBtn}
            onCancel={() => { resetAndCloseModal() }}
            maskClosable={false}
            okText={"SAVE"}
        >
            <div style={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
                <div>
                    <span>Id</span>
                    <Input disabled value={id} onChange={(event) => { setEmail(event.target.value) }} />
                </div>
                <div>
                    <span>Full Name</span>
                    <Input value={fullName} onChange={(event) => { setFullName(event.target.value) }} />
                </div>

                <div>
                    <span>
                        Phone
                    </span>
                    <Input value={phone} onChange={(event) => { setPhone(event.target.value) }} />
                </div>
            </div>

        </Modal>
    )
}

export default UpdateUserModal;