import config from '../config'

export default class ArticleServices {

    constructor($http, $q) {
        'ngInject';

        this._$http = $http;
        this._$q = $q;
    };

    save(article) {
        const request = {};

        if (article.slug) {
            request.url = `${config.apiUrl}/${config.articlesRoute}/${article.slug}`;
            request.method = 'PUT';
            delete article.slug;
        } else {
            request.url = `${config.apiUrl}/${config.articlesRoute}`;
            request.method = 'POST';
        }

        request.data = { article };
        return this._$http(request)
            .then(res => res.data.article);
    };

    get(slug) {
        const deferred = this._$q.defer();

        if (!slug.replace(' ', '')) {
            deferred.reject('Article slug is empty');
            return deferred.promise;
        }

        this._$http({
            url: `${config.apiUrl}/${config.articlesRoute}/${slug}`,
            method: 'GET'
        })
        .then(res => deferred.resolve(res.data.article))
        .catch(err => deferred.reject(err));

        return deferred.promise;
    };

    delete(slug) {
        return this._$http({
            url: `${config.apiUrl}/${config.articlesRoute}/${slug}`,
            method: 'DELETE'
        });
    };

    query(params) {
        const request = {
            url: `${config.apiUrl}/${config.articlesRoute}`,
            method: 'GET',
            params: params.filters ? params.filters : null
        };
        return this._$http(request).then((res) => res.data);
    };

};