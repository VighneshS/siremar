import {api, endPoints} from "../../App";
import utils from "./Utilities";

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

export const addDiscount = async (discount) => {
    let bodyFormData = new FormData();
    bodyFormData.append("type", discount.type)
    bodyFormData.append("percent", discount.percent)
    return await api.post(endPoints.addDiscount, bodyFormData)
}

export const getFlights = async () => {
    return await api.get(endPoints.getflights)
}

export const getBookedTickets = async (transportType) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", utils.getCurrentUser())
    bodyFormData.append("transport_type", transportType)
    return await api.post(endPoints.gettickets, bodyFormData)
}

export const getUserAppointments = async () => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", utils.getCurrentUser())
    return await api.post(endPoints.get_user_appointments, bodyFormData)
}

export const getMoveOuts = async (user_id) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id)
    return await api.post(endPoints.getmoveOuts, bodyFormData)
}

export const getDiscounts = async () => {
    return await api.get(endPoints.displayDiscounts)
}

export const getUsers = async () => {
    return await api.get(endPoints.getUsers)
}

export const bookTickets = async (booking) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", utils.getCurrentUser())
    bodyFormData.append("transport_id", booking.transport_id)
    bodyFormData.append("transport_type", booking.transport_type)
    bodyFormData.append("source", booking.source)
    bodyFormData.append("destination", booking.destination)
    bodyFormData.append("date", booking.date)
    bodyFormData.append("time", booking.time)
    return await api.post(endPoints.booktickets, bodyFormData)
}

export const approveUser = async (user_id) => {
    let bodyFormData = new FormData();
    bodyFormData.append("user_id", user_id)
    return await api.post(endPoints.approveuser, bodyFormData)
}

export const approveMoveOut = async (id) => {
    let bodyFormData = new FormData();
    bodyFormData.append("id", id)
    return await api.post(endPoints.approveMoveout, bodyFormData)
}
