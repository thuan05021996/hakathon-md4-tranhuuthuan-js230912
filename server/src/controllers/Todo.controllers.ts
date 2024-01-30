// import { React } from 'react';
import express, { Request, Response } from "express";
import { addTodoMysql, deleteTodoMysql, listTodosMysql, updateTodoMysql, updateTodoMysqlCompelte } from "../services/Todo.services";

// listTodos
export const listTodos = async (req: Request, res: Response) => {
    
    try {
        const result = await listTodosMysql();
        // console.log(result)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

// addTodo 
export const addTodo = async (req: Request, res: Response) => {
    const { name } = req.body
    try {
        const result = await addTodoMysql(name);
        res.status(201).json(
            {
                message : "Thêm mới thành công",
                result,
            }
        )
    } catch (error) {
        console.log(error)
    }
}
// xoá todo theo id
export const deleteTodo = async (req :Request, res : Response) => {
    const {id} = req.params
    try {
        const result = await deleteTodoMysql(id as unknown as number)
        res.status(200).json({
            message : "Xóa thanh cong"
        })
    }catch (error) {
        console.log(error)
    }
}
//  thay đổi trạng thái công việc
export const updateTodo = async (req :Request, res : Response) => {
    console.log(req.body)
    const {id,name,status} = req.body;
    if(status == 0){
        try {
            const result = await updateTodoMysqlCompelte(id as unknown as number)
            res.status(200).json({
                message : "Sửa thành công"
            })
        } catch (error) {
            console.log(error)
        }
    } else {
        try {
            const result = await updateTodoMysql(id as unknown as number)
            res.status(200).json({
                message : "Sửa thành công"
            })
        } catch (error) {
            console.log(error)
        }
    }

    // console.log(id)
    // try {
    //     const result = await updateTodoMysql(id as unknown as number)
    // } catch (error) {
    //     console.log(error)
    // }
}