import  express  from 'express';
import { addTodo, deleteTodo, listTodos, updateTodo } from '../controllers/Todo.controllers';
const todoRoutes = express.Router();

// lấy tất cả bản ghi
todoRoutes.get("", listTodos)

// thêm công việc
todoRoutes.post("",addTodo)

// xoá 
todoRoutes.delete("/:id", deleteTodo)

// sửa trạng thái công việc
todoRoutes.put("/:id", updateTodo)

export default todoRoutes