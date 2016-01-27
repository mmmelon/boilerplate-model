Base.Write = {};

if(Meteor.isServer){
    Bases._ensureIndex( { "removedAt": 1 }, { expireAfterSeconds: 5184000 } );
}

Base.Write.create = function({object}){
    Bases.insert(object);
}
