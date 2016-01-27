Base.Methods = {};

Base.Methods.base_create = function({base,userId}){
	const savedBase = Base.Write.create({object:base});
}

Meteor.methods({
	base_create:function(base){
		check(base,Match.Any);
		this.unblock();
		Base.Methods.base_created({base:base,userId:this.userId});
	}
});
