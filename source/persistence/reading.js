Bases = new Mongo.Collection("Bases");

Base.Query = {};

Base.Query.findAll = function(){
	return Bases.find();
}

Base.Query.oneByIdCursor = function({id}){
	return Bases.find({_id:id});
}

Base.Query.oneById = function({id}){
	return Bases.findOne(id);
}
