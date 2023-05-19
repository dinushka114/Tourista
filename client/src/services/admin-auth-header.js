export default function adminAuthHeader() {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin && admin.token) {
        return { "Authorization": admin.token }
    } else {
        return {}
    }
}