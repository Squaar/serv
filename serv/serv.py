import flask

class Serv(flask.Flask):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

        self.route('/ping')(self.ping)

    def ping(self):
        return jsonify_co('pong')


def jsonify_co(*args, **kwargs):
    response = flask.jsonify(*args, **kwargs)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response