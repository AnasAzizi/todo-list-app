import React, { useState } from "react";
import { Checkbox, Button, Modal, Input } from "antd";
import { useDispatch } from "react-redux";
import { setCheck, removeTodo, editTodo } from "../features/TodoSlice";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ExclamationCircleOutlined } from "@ant-design/icons";

const { confirm } = Modal;

const TodoItem = ({ title, done, id }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleChange = () => {
    dispatch(setCheck(id));
  };

  const handleDeleteConfirm = () => {
    confirm({
      title: "Are you sure you want to delete this todo?",
      icon: <ExclamationCircleOutlined />,
      content: "This action cannot be undone.",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        dispatch(removeTodo(id));
      },
    });
  };

  const handleEdit = () => {
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (newTitle) {
      dispatch(editTodo({ id, title: newTitle }));
    }
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-white dark:bg-gray-800 rounded-md shadow-md w-full md:min-w-[770px] mx-auto">
        <Checkbox checked={done} onChange={handleChange}>
          <span
            className={
              done
                ? "line-through text-gray-400 dark:text-white text-xl ml-2"
                : "text-black dark:text-white text-xl ml-2"
            }
          >
            {title}
          </span>
        </Checkbox>
        <div className="flex gap-2">
          <Button
            onClick={handleEdit}
            className="w-11 h-11 p-0 m-0 text-blue-500"
          >
            <MdModeEdit className="inline-block size-5" />
          </Button>
          <Button
            type="danger"
            onClick={handleDeleteConfirm}
            className="w-11 h-11 p-0 m-0 bg-white  border hover:border-red-500 border-gray-300 text-red-500 "
          >
            <MdDelete className="inline-block size-6" />
          </Button>
        </div>

        <Modal
          title="Edit Todo"
          open={isModalOpen}
          onOk={handleSave}
          onCancel={handleCancel}
          okText="Save"
          cancelText="Cancel"
        >
          <Input
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder="Edit your todo"
          />
        </Modal>
      </div>
    </>
  );
};

export default TodoItem;
