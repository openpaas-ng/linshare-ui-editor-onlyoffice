// openpaas does not send back JWT token in response header,
// so we need to create a new plugin for vue-auth
// It sends back the tokek which is in jwt/generate response

export default {
  request(req, token) {
    this.options.http._setHeaders.call(this, req, {
      Authorization: `Bearer ${token}`,
      "WWW-No-Authenticate": "linshare"
    });
  },

  response(res) {
    if (res.request.responseURL.endsWith("authentication/jwt")) {
      return res.data.token;
    }
  }
};
