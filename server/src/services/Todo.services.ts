import mysql2 from "mysql2/promise";
import pool from "../config/databa";

// lấy danh sach todo
export const listTodosMysql = async () => {
   
            const products = mysql2.createPool(pool)
            const [rows] = await products.execute("SELECT * FROM hakathon")
            return rows 
        
   
}

// thêm mới todo
export const addTodoMysql = async (name  : string) => {
    const products = mysql2.createPool(pool)
    const rows = await products.execute("INSERT INTO hakathon ( name) VALUES ( ?)",[name])
    return rows
}

// xoá todo
export const deleteTodoMysql = async (id : number) => {
    const products = mysql2.createPool(pool)
    const rows = await products.execute("DELETE FROM hakathon WHERE id = ?",[id])
    return rows
}

// update tạng thái công việc
export  const updateTodoMysqlCompelte = async (id : number) => {
    const products = mysql2.createPool(pool)
    const rows = await products.execute("UPDATE hakathon SET status = 1 WHERE id = ?",[id])
    // console.log(rows)
    return rows
} 
export  const updateTodoMysql = async (id : number) => {
    const products = mysql2.createPool(pool)
    const rows = await products.execute("UPDATE hakathon SET status = 0 WHERE id = ?",[id])
    // console.log(rows)
    return rows
} 