import {api, endPoints} from "../../App";

export const login = async (user) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", user.user_id)
    bodyFormData.append("password", user.password)
    bodyFormData.append("user_role", user.user_role)
    return await api.post(endPoints.login, bodyFormData)
}

export const register = async (user) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", user.user_id)
    bodyFormData.append("password", user.password)
    bodyFormData.append("user_role", user.user_role)
    bodyFormData.append("email_id", user.email_id)
    bodyFormData.append("fname", user.fname)
    bodyFormData.append("lname", user.lname)
    bodyFormData.append("birth_place", user.birth_place)
    bodyFormData.append("dob", user.dob)
    bodyFormData.append("address", user.address)
    bodyFormData.append("apt_no", user.apt_no)
    bodyFormData.append("pwd", user.pwd)
    bodyFormData.append("proof_url", user.proof_url)
    return await api.post(endPoints.register, bodyFormData)
}

export const approveUser = async (user) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", user.user_id)
    return await api.post(endPoints.approveuser, bodyFormData)
}

export const addDiscount = async (discount) => {
    let bodyFormData = new FormData();
    bodyFormData.append("type", discount.type)
    bodyFormData.append("percent", discount.percent)
    return await api.post(endPoints.addDiscount, bodyFormData)
}
