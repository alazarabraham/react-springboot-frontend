const ApiUrl = "http://localhost:8080/api/students"
class StudentService {
    getPrograms() {
        return fetch(ApiUrl, {
            method: "get",
            headers: {
                'Accept': "application/json",
                "Content-Type": "application/json"
            }
        }).then((response => response.json()));
    }
}
export default new StudentService();