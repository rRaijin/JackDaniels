import http from '../http-common';


class ClayService {
    getAll() {
        return http.get('/clays');
    }

    get(id) {
        return http.get(`/clays/${id}`);
    }

    create(data) {
        return http.post('/clays', data);
    }

    update(id, data) {
        return http.put(`/clays/${id}`, data);
    }

    delete(id) {
        return http.delete(`/clays/${id}`);
    }

    deleteAll() {
        return http.delete(`/clays`);
    }

    findByTitle(title) {
        return http.get(`/clays?title=${title}`);
    }
}

export default new ClayService();
