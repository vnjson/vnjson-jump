function jump(pathname){
  let path = pathname.split('.');
	this.index = 0;
	//label
	if(path.length===1){
		this.currentLabelName = path[0];
		this.exec();
	}
	//scene.label
	if(path.length===2){
			this.currentSceneName = path[0];
			this.currentLabelName = path[1];
			let { scenes, order, loader } = this.sceneLoadConfig;
			if(order==='once'){
				var arr = scenes.filter(item=>{ return item.name===path[0];})
				loader(arr[0], _=>{
						this.exec();
				});
			}else{
						this.exec();
			};
	};
};
