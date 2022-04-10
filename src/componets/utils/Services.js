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
    bodyFormData.append("email_id", user.user_role)
    bodyFormData.append("fname", user.user_role)
    bodyFormData.append("lname", user.user_role)
    bodyFormData.append("dob", user.user_role)
    bodyFormData.append("address", user.user_role)
    bodyFormData.append("apt_no", user.user_role)
    bodyFormData.append("pwd", user.user_role)
    bodyFormData.append("proof_url", user.user_role)
    return await api.post(endPoints.register, bodyFormData)
}
