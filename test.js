import http from 'k6/http';
import { check } from 'k6';

export let options = {
    // Configuração de carga
    stages: [
        { duration: '30s', target: 100 }, // Vai atingir 100 usuários em 30 segundos
    ],
};

export default function () {
    const res = http.get('http://localhost:5173/');

    // Verifica se a resposta tem status 200 e se o corpo tem mais de 1000 bytes
    check(res, {
        'is status 200': (r) => r.status === 200,
        'body size is greater than 1000': (r) => r.body.length > 1000,
    });
}

