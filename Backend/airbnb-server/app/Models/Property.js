'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Property extends Model {
    user() {
        return this.belongsTo('App/Models/User') // Um imóvel pertence a um usuário
    }

    images() {
        return this.hasMany('App/Models/Image') // Um imóvel possui várias imagens
    }
}

module.exports = Property
