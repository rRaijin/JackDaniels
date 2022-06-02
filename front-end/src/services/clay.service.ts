import http from '../http-common';


class ClayService {
    getAll() {
        return http.get('/clays');
    }

    get(id: any) {
        return http.get(`/clays/${id}`);
    }

    create(data: any) {
        return http.post('/clays', data);
    }

    update(id: any, data: any) {
        return http.put(`/clays/${id}`, data);
    }

    delete(id: any) {
        return http.delete(`/clays/${id}`);
    }

    deleteAll() {
        return http.delete(`/clays`);
    }

    findByTitle(title: any) {
        return http.get(`/clays?title=${title}`);
    }
}

export default new ClayService();
