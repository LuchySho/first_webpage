var File = function(url, object){
	File.list = Array.isArray(File.list)? File.list : [];
	File.progress = File.progress || 0;
	this.progress = 0;
	this.object = object;
	this.url = url;
};