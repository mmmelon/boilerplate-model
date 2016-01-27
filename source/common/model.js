Base = function(object){
    if(object._id){
        this._id = object._id;
    }
    this.createdAt = object.createdAt || new Date();
    this.updatedAt = object.updatedAt || new Date();
	this.author = object.author;
}

Base.validate = function(object){
    var errors = [];
    if(!Match.test(object.author, String)){errors = errors.concat(Base.Errors.AuthorEmpty)};
    return errors;
}

Base.Allow = {};

Base.Allow.insert = function({userId,object}){
    return true;
}

Base.Allow.update = function({userId,object}){
    return true;
};
