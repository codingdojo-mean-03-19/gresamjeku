const Player = require('mongoose').model('Player');
const {Http} = require('@status/codes');

module.exports = {
    index(_request, response) {
        Player.find({})
            .then(players => response.json(players))
            .catch(error => response.status(Http.InternalServerError).json(error));
    },
    create(request, response) {
        Player.create(request.body)
            .then(player => response.json(player))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })
    },
    destroy(request, response) {
        const {player_id: playerId} = request.params;
        Player.findByIdAndRemove(playerId)
            .then(player => response.json(player))
            .catch(error => response.status(Http.ResetContent).json(error));
    },
    update(request, response) {
        const { player_id: playerId} = request.params;
        Player.findByIdAndUpdate(playerId, request.body, {new:true})
            .then(player => response.json(player))
            .catch(error => {
                const errors = Object.keys(error.errors).map(key => error.errors[key].message);
                response.status(Http.UnprocessableEntity).json(errors);
            })

    },
};