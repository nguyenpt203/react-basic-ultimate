import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';


const UserTable = (props) => {
    const { dataUser } = props
    const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
    const [dataUpdate, setDataUpdate] = useState(null)

    const columns = [
        {
            title: 'Id',
            dataIndex: '_id',
            render: (_, record) => (
                <>
                    <a>{record._id}</a>
                </>
            ),
        },
        {
            title: 'Full Name',
            dataIndex: 'fullName',
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <div style={{ display: 'flex', gap: "25px" }}>
                    <EditOutlined onClick={() => {
                        setIsModalUpdateOpen(true);
                        setDataUpdate(record)
                    }} style={{ cursor: 'pointer', color: 'orange' }} />
                    <DeleteOutlined style={{ cursor: 'pointer', color: 'red' }} />
                </div>
            ),
        },

    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={dataUser}
                rowKey={"_id"} />
            <UpdateUserModal
                isModalUpdateOpen={isModalUpdateOpen}
                setIsModalUpdateOpen={setIsModalUpdateOpen}
                dataUpdate={dataUpdate}
                setDataUpdate={setDataUpdate}
            />
        </>
    )
}

export default UserTable;