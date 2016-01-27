Base.create = function({name,author}){
	var newObject = new Base({author:author,createdAt:new Date(),updatedAt:new Date()});
	var validationErrors = Base.validate(newObject);
	if(validationErrors.length){
		return {errors:validationErrors};
	}
	if(!Base.Allow.insert({userId:author,object:newObject})){
		return {errors:[Base.Errors.Validation.NoAllowed]};
	}
	Meteor.call("base_create",newObject);
	return {base:newObject};
}
