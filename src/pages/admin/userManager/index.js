import React, { useEffect, useState } from 'react'
import { Input, Modal, Popconfirm, Space, Table, Tag, message } from 'antd';
import { DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons';
import { userMangerService } from '../../../service/userService';
import { Link } from 'react-router-dom';




const UserManager = () => {

    const [user, setUser] = useState([]);
    const fetchUser =  () => {
        userMangerService.getListUser().then((res)=>{
            // console.log(res)
            setUser(res.data.content)
        }).catch((err)=>{
            // console.log(err)
        })
      };
      
      useEffect(() => {
        fetchUser();
      }, []);


    //   delete .............
    const [deleteUser, setDeleteUser] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleOk = () =>{
        userMangerService.getDeleteUser(deleteUser.id).then((res)=>{
            message.success("User deleted!");
            // console.log(deleteUser.id, 'xoá thành công')
        }).catch((err)=>{
            console.log(err)
        }).finally(()=>{
            setIsModalOpen(false);
            fetchUser();
        })
    }



    // search ..........
    const [searchText, setSearchText] = useState("");
    const [gridData, setGridData] = useState([]);
    let [filteredValue] = useState();
    useEffect(() => {
        if (user) {
            filteredValue = user.filter((value) => {
                return value.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setGridData(filteredValue);
        }
    }, [user]);

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === "") {
            setGridData(user);
        } else {
            filteredValue = user.filter((value) => {
                return value.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setGridData(filteredValue);
        }
    };
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: () => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    onChange={handleSearch}
                    value={searchText}
                    allowClear
                    placeholder="Search User"
                    style={{ width: 200 }}
                />
            </div>
        ),
    });
    // search ..........


    const columns = [
        {
            title: 'STT',
            dataIndex: 'id',
            key: 'id',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Tên tài khoản',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Ngày sinh',
            dataIndex: 'birthday',
            key: 'birthday',
        },
        {
            title: 'Vai trò',
            dataIndex: 'role',
            key: 'role',
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, record) =>
                <div className='flex'>

                    {/*  */}
                    <div className='mr-3'>
                        {/* <Popconfirm
                            title="Delete the task"
                            description="Are you sure to delete this task?"
                            onConfirm={confirm}
                            onCancel={cancel}
                            okText="Yes"
                            cancelText="No"
                        >
                            <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} />
                        </Popconfirm> */}
                        <button
                            onClick={()=>{
                                setIsModalOpen(true);
                                setDeleteUser(record)
                            }}>
                         <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} />
                        </button>
                    </div>
                    {/*  */}
                    <div>
                        <button ><EditOutlined style={{ fontSize: '20px', color: 'blue' }} />
                        </button>
                    </div>
                </div>,
        },
    ];
    const data = [
        {
            key: '1',
            stt: '1',
            name: 'John Brown',
            email: 'nhatsang@gmail.com',
            ngaySinh: '01/06/1998',
            vaiTro: 'Admin',
        },

    ];
    return (
        <div>
            <div className='flex justify-between mb-5'>
                <h1 className='text-2xl font-medium'>List user manager</h1>
                <button className='border border-black p-2 rounded-lg text-base'>
                    <Link to={"/admin/create-user"}>Create User</Link>
                </button>
            </div>


            <Table columns={columns} dataSource={gridData} pagination={{ pageSize: 15, }} scroll={{ y: 1000 }}/>
            <Modal
                title=""
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                width={400}
            >
                <span className="flex">
                {" "}
                <p>Are you sure to delete this user: </p>
                {/* <p className="text-red-500  pl-1"> {deleteUser?.name}</p> */}
                </span>
            </Modal>
        </div>
    )
}

export default UserManager
