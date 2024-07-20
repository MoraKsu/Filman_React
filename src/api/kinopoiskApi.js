const token = '6M6GK5M-7GMM2R7-JD7J0W1-4Z5VYBK';

// Запрос к API Кинопоиска на популярные фильмы
export const fetchPopularMovies = async () => {
  const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=250&type=movie&lists=popular-films&rating.kp=7-10', {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'X-API-KEY': token
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const data = await response.json();
  return data.docs;
};

// Запрос к API Кинопоиска на универсальный поиск
export const searchMovies = async (searchParams) => {
  const url = new URL('https://api.kinopoisk.dev/v1.4/movie');
  
  // Append query parameters
  Object.keys(searchParams).forEach(key => {
    if (Array.isArray(searchParams[key])) {
      searchParams[key].forEach(value => {
        url.searchParams.append(`${key}[]`, value);
      });
    } else {
      url.searchParams.append(key, searchParams[key]);
    }
  });

  const response = await fetch(url.toString(), {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': token
    }
  });

  if (!response.ok) {
    throw new Error('Network response was not ok ' + response.statusText);
  }

  const data = await response.json();
  return data.docs;
};

// Запрос к API Кинопоиска на поиск по названию
export const searchMoviesByTitle = async (title) => {
    const url = new URL('https://api.kinopoisk.dev/v1.4/movie/search');
    url.searchParams.append('query', title);
  
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': token
      }
    });
  
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
  
    const data = await response.json();
    return data.docs;
};

// Запрос к API Кинопоиска на 250 популярных фильмов
export const fetchTop250Movies = async () => {
    const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=250&type=movie&lists=top250&rating.kp=7-10', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-API-KEY': token
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data.docs;
};

// Запрос к API Кинопоиска на Мультфильмы
export const fetchCartoons = async () => {
    const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=250&type=cartoon&rating.kp=5-10', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-API-KEY': token
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data.docs;
};

// Запрос к API Кинопоиска на Сериалы
export const fetchSerials = async () => {
    const response = await fetch('https://api.kinopoisk.dev/v1.4/movie?page=1&limit=250&type=tv-series&lists=popular-series&rating.kp=7-10', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-API-KEY': token
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data.docs;
};

// Запрос к API Кинопоиска на отзывы пользователей положительные
export const fetchUserPositiveReview = async () => {
    const response = await fetch('https://api.kinopoisk.dev/v1.4/review?page=1&limit=250&type=%D0%9F%D0%BE%D0%B7%D0%B8%D1%82%D0%B8%D0%B2%D0%BD%D1%8B%D0%B9', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'X-API-KEY': token
        }
    });

    if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
    }

    return response.json();
}