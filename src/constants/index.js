export const BASE_URL = '/data';

export const API_URLS = {
    PRODUCTS: {
        url: `${BASE_URL}/productos.json`,
        config: {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
        }
    },
    CATEGORIES: {
        url: `${BASE_URL}/categorias.json`,
        config: {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }
    }
}