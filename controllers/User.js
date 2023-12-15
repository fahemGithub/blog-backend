import express from "express"
// import bcrypt from "bcryptjs"
import UserModel from "../models/User.js"

export const getAllUsers = async(req, res) => {
    res.send("test")
}

export const singUp = async(req, res) => {
    const {name, email, password} = req.body;
    let exisitingUser;
    try {
        exisitingUser = await UserModel.findOne({email})
    } catch (error) {
        console.log(error)
    }
    if (exisitingUser) {
        res.status(400).json({message: "user already exist"})
    }
    // hash password
    // let hashPassword = bcrypt.hashSync(password, 10);
    const user = new UserModel({
        name,
        email,
        password
    })
    try {
        console.log(user, "user")
        await user.save()
    } catch (error) {
        console.log(error)
    }
    return res.status(200).json({user})
}