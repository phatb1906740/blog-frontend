import createHttp from "./http.service";

class ArticleService {
    constructor() {
        this.http = createHttp("/api");
    }
    async getAll() {
        return (await this.http.get("/article")).data;
    }
    async create(data) {
        return (await this.http.post("/article", data)).data;
    }
    async get(id) {
        return (await this.http.get(`/article/${id}`)).data;
    }
    async update(id, data) {
        return (await this.http.put(`/article/${id}`, data)).data;
    }
    async delete(id) {
        return (await this.http.delete(`/article/${id}`)).data;
    }
    async login(data) {
        return (await this.http.post("/user/login", data)).data;
    }

    async signin(data) {
        return (await this.http.post("/user/signin", data)).data;
    }
}
export default new ArticleService();