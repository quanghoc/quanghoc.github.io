angular.module('vipr.services', [])

.factory('User', ['$rootScope', '$state', function($rootScope, $state) {
	return {
		isAdmin: function() {
			return $state.includes('admin');
		},
		get: function() {
			var isAdmin = $state.includes('admin');
			var userName = isAdmin ? "root" : "user";
			return {
				"isAdmin": isAdmin,
				"userName": userName
			};
		},
		set: function(userID){
			if (userID == 'admin'){
				$rootScope.user = {
					"isAdmin": true,
					"userName": "root"
				};
			} else if (userID == 'user'){
				$rootScope.user = {
					"isAdmin": false,
					"userName": "user"
				};
			}
		},
		setRole: function(role) {
			if (role == 'admin'){
				$rootScope.user = {
					"isAdmin": true,
					"userName": "root"
				};

				$state.go('adminDashboard');
			} else if (role == 'user'){
				$rootScope.user = {
					"isAdmin": false,
					"userName": "user"
				};

				$state.go('userDashboard');
			}
		}
	};
}])

.factory('VDC', ['$rootScope', '$localStorage', '$state', function($rootScope, $localStorage, $state) {
	var VDCId = 0;

	return {
		get: function(id) {
			var vdclist = [$rootScope.$storage[1].vdc, $rootScope.$storage[2].vdc];
			return (id ? $rootScope.$storage[id].vdc : vdclist);
		},
		getId: function() {
			return $state.params.id || 1;
			// return $state.params.id || 1;
		},
		setId: function(id) {
			VDCId = id;
		}
	};
}])

.factory('Demo', ['$rootScope', '$localStorage', '$state', '$stateParams', '$window', '$timeout', function($rootScope, $localStorage, $state, $stateParams, $window, $timeout) {
	return {
		reset: function(type){
			$rootScope.$storage = ($rootScope.enableLocalStorage ? $localStorage.$reset(VIPRJSON) : VIPRJSON) //if enableLocalStorage then store data obj in local storage

			if(typeof type === "undefined"){
				console.log("LocalStorage updated to version: "+$rootScope.$storage[1].version) //checking that localStorage has been updated
			}else{
				//This is a hack
				var emptyDataStates = [
					'storageSystems_edit',
					'EditVirtualArray',
					'blockVirtualPools_edit',
					'EditObjectVirtualPool',
					'editFileVirtualPools',
					'catalogEdit',
					'editRoleAssignment',
					'EditVirtualDataCenter',
					'userConsistency_edit',
					'storageSystems_create',
					'providers_create',
					'fabric_create',
					'dps_create',
					'clusters_create',
					'hosts_create',
					'vCenters_create',
					'userConsistency_create',
					'GenericOrderCompleted',
					'GenericOrder'
				];
				var toState = (_.contains(emptyDataStates, $state.current.name) ? 'adminDashboard' : $state.current.name);
				$state.go(toState, {}, {reload: true}); //reload state
			}
		}
	};
}])


.factory('CommodityNodes', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].commodityNodes[id] : $rootScope.$storage[VDC.getId()].commodityNodes);
		}
	};
}])

.factory('StorageSystems', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		get: function(id) {
			return (id ? ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].storageSystems, id) : $rootScope.$storage[VDC.getId()].storageSystems);
			// return $rootScope.$storage[VDC.getId()].storageSystems;
		},
		add: function(args) {
			$rootScope.$storage[VDC.getId()].storageSystems.push(args);
		},
		update: function(args) {
			ViPRUtils.upsert($rootScope.$storage[VDC.getId()].storageSystems, args);
		}
	};
}])

.factory('StorageProviders', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].storageProviders[id] : $rootScope.$storage[VDC.getId()].storageProviders);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('DataProtectionSystems', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].dataProtectionSystems[id] : $rootScope.$storage[VDC.getId()].dataProtectionSystems);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('FabricManagers', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].fabricManagers[id] : $rootScope.$storage[VDC.getId()].fabricManagers);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('Networks', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].networks[id] : $rootScope.$storage[VDC.getId()].networks);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('licenses', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].licenses[id] : $rootScope.$storage[VDC.getId()].licenses);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('Hosts', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(args) {
			//return (id ? $rootScope.$storage[VDC.getId()].hosts[id] : $rootScope.$storage[VDC.getId()].hosts);
			var hosts = {};

			if ((args) && (args.hasOwnProperty("operatingSystem"))) {
				hosts = _.where($rootScope.$storage[VDC.getId()].hosts, args);
			} else if ((args) && (args.hasOwnProperty("id"))) {
				hosts = ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].hosts, args["id"])[0];
			} else {
				hosts = $rootScope.$storage[VDC.getId()].hosts;
			}

			return hosts;
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('Clusters', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].clusters[id] : $rootScope.$storage[VDC.getId()].clusters);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('VMwarevCenter', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function(id) {
			return (id ? $rootScope.$storage[VDC.getId()].VMwarevCenter[id] : $rootScope.$storage[VDC.getId()].VMwarevCenter);
		},
		add: function(args) {
		},
		remove: function(args) {
		}
	};
}])

.factory('VirtualArrays', ['$rootScope', '$localStorage', 'VDC', function($rootScope, $localStorage, VDC) {
	return {
		get: function (id) {
			return (id ? $rootScope.$storage[VDC.getId()].virtualArrays[id] : $rootScope.$storage[VDC.getId()].virtualArrays);
		},
		getBlocks: function (vdcId) {
			var id = vdcId || VDC.getId();
			var res = $.grep($rootScope.$storage[id].virtualArrays, function(n, i) {
				return ((n.protocols.indexOf('FC') > 0) || (n.protocols.indexOf('iSCSI') > 0) || (n.protocols.indexOf('ScaleIO') > 0));
			});

			return res;
		},
		getFiles: function (vdcId) {
			var id = vdcId || VDC.getId();
			var res = $.grep($rootScope.$storage[id].virtualArrays, function(n, i) {
				return ((n.protocols.indexOf('CIFS') > 0) || (n.protocols.indexOf('NFS') > 0));
			});

			return res;
		},
		getCommodity: function (vdcId) {
			// This is a hack
			// It assumed first virtual array with id=0 is a commodity 
			return $rootScope.$storage[vdcId].virtualArrays[0];
		},
		add: function(args) {
			$rootScope.$storage[VDC.getId()].virtualArrays.push(args);
		},
		update: function(args) {
			$rootScope.$storage[VDC.getId()].virtualArrays[args.id] = args;
		},
		remove: function(args) {
		}
	};
}])

.factory('BlockVirtualPools', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		get: function(id) {
			return (id ? ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].blockVirtualPools, id) : $rootScope.$storage[VDC.getId()].blockVirtualPools);
		},
		update: function(args) {
			ViPRUtils.upsert($rootScope.$storage[VDC.getId()].blockVirtualPools, args);
			// $rootScope.$storage[VDC.getId()].blockVirtualPools.push(args);
		},
		remove: function(args) {
		}
	};
}])

.factory('FileVirtualPools', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		get: function(id) {
			return (id ? ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].fileVirtualPools, id) : $rootScope.$storage[VDC.getId()].fileVirtualPools);
		},
		update: function(args) {
			ViPRUtils.upsert($rootScope.$storage[VDC.getId()].fileVirtualPools, args);
		},
		remove: function(args) {
		}
	};
}])

.factory('ObjectVirtualPools', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {

	return {
		get: function(id) {
			return (id ? ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].objectVirtualPools, id) : $rootScope.$storage[VDC.getId()].objectVirtualPools);
		},
		update: function(args) {
			
			// This is a hack because we assume there are only 2 VDCs
			if (args.virtualArrays.length > 1) {
				ViPRUtils.upsert($rootScope.$storage[1].objectVirtualPools, args);
				ViPRUtils.upsert($rootScope.$storage[2].objectVirtualPools, args);
			} else {
				ViPRUtils.upsert($rootScope.$storage[args.virtualArrays[0].vdc].objectVirtualPools, args);
				this.remove({
					"vdc": args.virtualArrays[0].vdc == 1 ? 2 : 1,
					"virtualArray": args.id
				});
			}
		},
		remove: function(args) {
			ViPRUtils.deleteById($rootScope.$storage[args.vdc].objectVirtualPools, args.virtualArray);
		}
	};
}])

.factory('Dashboard', ['$rootScope',
	'VDC', 
	'CommodityNodes', 
	'StorageSystems', 
	'StorageProviders', 
	'DataProtectionSystems',
	'FabricManagers',
	'Networks',
	'Hosts',
	'Clusters',
	'VMwarevCenter',
	'VirtualArrays',
	'BlockVirtualPools',
	'FileVirtualPools',
	'ObjectVirtualPools',
	function($rootScope,
		VDC, 
		CommodityNodes, 
		StorageSystems,
		StorageProviders,
		DataProtectionSystems,
		FabricManagers,
		Networks,
		Hosts,
		Clusters,
		VMwarevCenter,
		VirtualArrays,
		BlockVirtualPools,
		FileVirtualPools,
		ObjectVirtualPools
	) {
	return {
		get: function() {
			var data = {
				commodityNodesCount: CommodityNodes.get() ? CommodityNodes.get().length : 0,
				storageSystemsCount: StorageSystems.get() ? StorageSystems.get().length : 0,
				storageProvidersCount: StorageProviders.get() ? StorageProviders.get().length : 0,
				dataProtectionSystemsCount: DataProtectionSystems.get() ? DataProtectionSystems.get().length : 0,
				fabricManagersCount: FabricManagers.get() ? FabricManagers.get().length : 0,
				networksCount: Networks.get() ? Networks.get().length : 0,
				hostsCount: Hosts.get() ? Hosts.get().length : 0,
				clustersCount: Clusters.get() ? Clusters.get().length : 0,
				VMwarevCenterCount: VMwarevCenter.get() ? VMwarevCenter.get().length : 0,
				virtualArraysCount: VirtualArrays.get() ? VirtualArrays.get().length : 0,
				blockVirtualPoolsCount: BlockVirtualPools.get() ? BlockVirtualPools.get().length : 0,
				fileVirtualPoolsCount: FileVirtualPools.get() ? FileVirtualPools.get().length : 0,
				objectVirtualPoolsCount: ObjectVirtualPools.get() ? ObjectVirtualPools.get().length : 0
			};
			return data;
		}
	};
}])

.factory('Order', ['$timeout', '$rootScope', '$localStorage', 'VDC', 'Volumes', 'OrderTypes', 'ViPRUtils', 'ExportGroups', 'FileSystems', function($timeout, $rootScope, $localStorage, VDC, Volumes, OrderTypes, ViPRUtils, ExportGroups, FileSystems) {
	return {
		create: function(args) {
			$rootScope.$storage[VDC.getId()].orders.push(args);
			// console.log('$rootScope.$storage[VDC.getId()].orders:');
			// console.log($rootScope.$storage[VDC.getId()].orders);

			var orderType = OrderTypes.get(args.orderTypeId),
					trigger = orderType.action + ' ' + orderType.resource,
					resourceJson = {
						details: args.details
					};
			 //console.log(trigger);
			 //console.log(orderType);

			resourceJson.id = ViPRUtils.generateUID();
			resourceJson.fromOrderId = args.id;

			//console.log(trigger);

			switch (trigger) {
				case "create volume": 
					console.log('switch: create volume');
					var volumesData = {
						"id": resourceJson.id,
						"fromOrderId": resourceJson.fromOrderId,
						"virtualArray": resourceJson.details[orderType.resources.virtualArray].value,
						"virtualPool": resourceJson.details[orderType.resources.virtualPool].value,
						"name": resourceJson.details[orderType.resources.name].value,
						"size": resourceJson.details[orderType.resources.size].value
					};

					if(orderType.resources.host){
						volumesData.host = resourceJson.details[orderType.resources.host].value;
					}

					Volumes.create(volumesData);

					//create exportGroups
					if(orderType.resources.host){
						console.log('switch: create exportGroups');
						ExportGroups.create({
							"id": resourceJson.id,
							"fromOrderId": resourceJson.fromOrderId,
							"name": resourceJson.details[orderType.resources.host].value,
							"virtualArrays": resourceJson.details[orderType.resources.virtualArray].value
						});
					}
					break;
				case "update volume": 
					console.log('switch: update volume');
					Volumes.update(args.details[orderType.resources.volume].value, args.details);
					break;
				case "delete volume":
					//delete exportGroups
					console.log('switch: delete exportGroups');
					var volumes = resourceJson.details[orderType.resources.volumes].value;

					_.each(volumes, function (bool, volName) {
						if(bool){ //check if volume is set to true (selected vs unselected)
							if(ExportGroups.get({'name':args.details[orderType.resources.host].value})[0]){//it may be undefined after previous iteration deleted it
								var exportGroupId = ExportGroups.get({'name':args.details[orderType.resources.host].value})[0].id; //get id
								var virtualArrayToDelete = Volumes.get({'name':volName})[0].virtualArray; //get virtual array
								ExportGroups.delete(exportGroupId, virtualArrayToDelete);
							}
						}
					});

					//delete volumes
					//IMPORTANT: this has to be run after exportGroup or exportGroup will not be able to find volume, since it was deleted here.
					console.log('switch: delete volume');
					Volumes.delete(args.details[orderType.resources.volumes].value);

					break;
				case "create blockSnapshots": 
					console.log('switch: create blockSnapshots');
					break;
				case "update blockSnapshots": 
					console.log('switch: update blockSnapshots');
					break;
				case "delete blockSnapshots": 
					console.log('switch: delete blockSnapshots');
					break;
				case "create exportGroups": 
					console.log('switch: create exportGroups');
					var exportGroups = ExportGroups.get();
					var virtualArrays = [];
					var simpleList = [];
					var namesList, vArraysList, hostName, nameCheck;

					//get virtualArray via volume name and push to 'virtualArrays' array
					var volumes = resourceJson.details[orderType.resources.volumes].value;

					_.each(volumes, function (bool, volName) {
						if(bool){ //check if volume is set to true (selected vs unselected)
							virtualArrays.push(Volumes.get({'name':volName})[0].virtualArray)
						}
					});

					//check for duplicates by first creating a simple list...
					_.each(exportGroups, function(element, i, list){
						simpleList.push({'name':list[i].name, 'virtualArrays': ViPRUtils.stringArray(list[i].virtualArrays)})
					});

					//...then checking against that simpleList to see if names are duplicates
					namesList = _.where(simpleList, {'name': resourceJson.details[orderType.resources.host].value});

					//...then checking against namesList to see if virtualArrays are duplicates
					vArraysList = _.where(namesList, {'virtualArrays': ViPRUtils.stringArray(virtualArrays)});

					//if namesList is a duplicate, but vArraysList is not then modify hostName
					if(namesList.length >= 1 && vArraysList.length < 1) {
						hostName = resourceJson.details[orderType.resources.host].value + ',' + ViPRUtils.stringArray(virtualArrays).replace(/\s+/g, '');

						//perform a check on duplicates in hostName that were modified before this one
						nameCheck = _.where(exportGroups, {'name': resourceJson.details[orderType.resources.host].value + ',' + ViPRUtils.stringArray(virtualArrays).replace(/\s+/g, '')});

						//if this modified name doesn't match another modified name, then create exportGroup, else do nothing
						if (nameCheck.length < 1) {
							ExportGroups.create({
								"id": resourceJson.id,
								"fromOrderId": resourceJson.fromOrderId,
								"name": hostName,
								"virtualArrays": virtualArrays
							});
						} else { //else added only for testing
							console.log("Duplicate item not added")
						}

					//if namesList is a duplicate, and vArraysList is a duplicate, then do nothing
					}else if(namesList.length >= 1 && vArraysList.length >= 1){
						console.log("Duplicate item not added")
					}else if(namesList.length == 0){ //else create exportGroup
						ExportGroups.create({
							"id": resourceJson.id,
							"fromOrderId": resourceJson.fromOrderId,
							"name": resourceJson.details[orderType.resources.host].value,
							"virtualArrays": virtualArrays
						});
					}
					break;
				case "delete exportGroups": 
					console.log('switch: delete exportGroups');
					var volume = resourceJson.details[orderType.resources.volume].value;

					if(ExportGroups.get({'name':args.details[orderType.resources.exportGroup].value})[0]){//it may be undefined after previous iteration deleted it
						var exportGroupId = ExportGroups.get({'name':args.details[orderType.resources.exportGroup].value})[0].id; //get id
						var virtualArrayToDelete = Volumes.get({'name':volume})[0].virtualArray; //get virtual array
						ExportGroups.delete(exportGroupId, virtualArrayToDelete);
					}

					break;
				case "create fileSystems": 
					console.log('switch: create fileSystems');
					var dup = _.where(FileSystems.get(), {name: resourceJson.details[orderType.resources.name].value});

					var fileSystemData = {
						"id": resourceJson.id,
						"fromOrderId": resourceJson.fromOrderId,
						"name": resourceJson.details[orderType.resources.name].value,
						"size": resourceJson.details[orderType.resources.size].value,
						"virtualArray": resourceJson.details[orderType.resources.virtualArray].value,
						"virtualPool": resourceJson.details[orderType.resources.virtualPool].value
					};

					if(dup.length >= 1){
						FileSystems.update(FileSystems.get({'id': dup[0].id}), fileSystemData);
					}else{
						FileSystems.create(fileSystemData);
					}

					break;
				case "update fileSystems": 
					console.log('switch: update fileSystems');
					FileSystems.update(FileSystems.get({'name': resourceJson.details[orderType.resources.name].value}), {
						"size": resourceJson.details[orderType.resources.size].value
					});
					break;
				case "delete fileSystems": 
					console.log('switch: delete fileSystems');
					FileSystems.delete(args.details[orderType.resources.fileSystems].value);
					break;
				case "create fileSnapshots": 
					console.log('switch: create fileSnapshots');
					break;
				case "update fileSnapshots": 
					console.log('switch: update fileSnapshots');
					break;
				case "delete fileSnapshots": 
					console.log('switch: delete fileSnapshots');
					break;
			} 

			return;
		},
		get: function (id) {
			return (id ? ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].orders, id)[0] : $rootScope.$storage[VDC.getId()].orders);
			// return (id ? $rootScope.$storage[VDC.getId()].orders[id] : $rootScope.$storage[VDC.getId()].orders);
		},
		update: function(args) {
			// $rootScope.$storage[VDC.getId()].orders[args.id] = args;
		},
		getLen: function(){
			// console.log($rootScope.$storage[VDC.getId()].orders);

			return $rootScope.$storage[VDC.getId()].orders.length;
		}
	};
}])

.factory('ExportGroups', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		create: function(args) {
			$rootScope.$storage[VDC.getId()].exportGroups.push(args);
			return;
		},
		get: function (args) {
			var exportGroups = {};

			if ((args) && (args.hasOwnProperty("name"))) {
				exportGroups = _.where($rootScope.$storage[VDC.getId()].exportGroups, args);
			} else if ((args) && (args.hasOwnProperty("id"))) {
				exportGroups = ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].exportGroups, args["id"])[0];
			} else if ((args) && (args.hasOwnProperty("virtualArray"))) {

				var exportGroupArray = [];
				_.each($rootScope.$storage[VDC.getId()].exportGroups, function(obj){ //check each exportGroup for a match in virtualArray
					if(_.indexOf(obj.virtualArrays, args.virtualArray) >= 0){ //if there is a match, then add it to exportGroups
						exportGroupArray.push(obj)
					}
					exportGroups = exportGroupArray;
				});

			}else {
				exportGroups = $rootScope.$storage[VDC.getId()].exportGroups;
			}

			return exportGroups;
		},
		delete: function(id, args) {
			var exportGroup = _.where($rootScope.$storage[VDC.getId()].exportGroups, {'id':id})[0]; //get exportGroup

			exportGroup.virtualArrays = _.without(exportGroup.virtualArrays, args); //remove virtualArray from exportGroup

			if(exportGroup.virtualArrays.length < 1){//if 'virtualArrays' array is empty then delete the entire object
				ViPRUtils.deleteById($rootScope.$storage[VDC.getId()].exportGroups, id);
			}
		}
	};
}])

.factory('Volumes', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		create: function(args) {
			$rootScope.$storage[VDC.getId()].volumes.push(args);
			return;
		},
		get: function (args) {
			var volumes = {};

			// console.log(args);

			if ((args) && (args.hasOwnProperty("host"))) {
				volumes = _.where($rootScope.$storage[VDC.getId()].volumes, args);
				// console.log('Volumes.get volumes:');
				// console.log($rootScope.$storage[VDC.getId()].volumes);
				// console.log(args);
				// console.log(volumes);
			} else if ((args) && (args.hasOwnProperty("name"))) {
				volumes = _.where($rootScope.$storage[VDC.getId()].volumes, args);
			} else if ((args) && (args.hasOwnProperty("virtualArray"))) { //if exportGroups need to be returned from selected Volumes in a form
				if(_.where($rootScope.$storage[VDC.getId()].volumes, {'name':args.virtualArray})[0]){
					volumes = _.where($rootScope.$storage[VDC.getId()].volumes, {'name':args.virtualArray})[0].virtualArray; //get selected volume and return virtualArray
				}
			} else if ((args) && (args.hasOwnProperty("id"))) {
				volumes = ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].volumes, args["id"])[0];
			} else if (args == "exportGroups") {
				volumes = $rootScope.$storage[VDC.getId()].exportGroups;
			}else {
				volumes = $rootScope.$storage[VDC.getId()].volumes;
			}

			return volumes;
		},
		delete: function(args) {
			// console.log('delete volume');
			var volumeNames = [],
					id;

			if (args) {
				volumeNames = ViPRUtils.getKeybyValue(args, true)
				// console.log('volumeNames:');
				// console.log(volumeNames);

				volumeNames.forEach(function(val, i) {
					// console.log(val);
					// console.log(_.where($rootScope.$storage[VDC.getId()].volumes, {"name": val}));
					id = _.where($rootScope.$storage[VDC.getId()].volumes, {"name": val})[0].id;
					// console.log(id);
					
					ViPRUtils.deleteById($rootScope.$storage[VDC.getId()].volumes, id);
				});

				// console.log($rootScope.$storage[VDC.getId()].volumes);
			}
		},
		update: function(volumeName, details) {
			// console.log('update volume');
			// console.log(volumeName);
			// console.log(details);

			var id = _.where($rootScope.$storage[VDC.getId()].volumes, {"name": volumeName})[0].id;
			// console.log(id);
			var currentVolume = this.get({"id": id});
			// console.log('currentVolume:');
			// console.log(currentVolume);

			var searchValues = [
				['host', 'Host'],
				['virtualArray', 'Target Virtual Array'],
				['virtualPool', 'Target Virtual Pool'],
				['size', 'Size']
			];
			var updateFields = ViPRUtils.fieldArrayToObject(details, searchValues)
			// console.log('updateFields:');
			// console.log(updateFields);
			ViPRUtils.updateObject(currentVolume, updateFields);

			// console.log($rootScope.$storage[VDC.getId()].volumes);
		}
	};
}])

.factory('FileSystems', ['$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		create: function(args) {
			$rootScope.$storage[VDC.getId()].fileSystems.push(args);
			return;
		},
		get: function (args) {
			var fileSystems = {};

			if ((args) && (args.hasOwnProperty("name"))) {
				fileSystems = _.where($rootScope.$storage[VDC.getId()].fileSystems, args)[0];
			} else if ((args) && (args.hasOwnProperty("id"))) {
				fileSystems = _.where($rootScope.$storage[VDC.getId()].fileSystems, args)[0];
			}else {
				fileSystems = $rootScope.$storage[VDC.getId()].fileSystems;
			}
			return fileSystems;
		},
		update: function(orig, args) {
			ViPRUtils.updateObject(orig, args);
		},
		delete: function(args) {
			var fileSystemNames = [], id;

			if (args) {
				fileSystemNames = ViPRUtils.getKeybyValue(args, true);
				fileSystemNames.forEach(function(val, i) {
					id = _.where($rootScope.$storage[VDC.getId()].fileSystems, {"name": val})[0].id;
					ViPRUtils.deleteById($rootScope.$storage[VDC.getId()].fileSystems, id);
				});
			}
		}
	};
}])

.factory('OrderTypes', ['$timeout', '$rootScope', '$localStorage', 'VDC', function($timeout, $rootScope, $localStorage, VDC) {
	return {
		get: function (id) {
			return (id != undefined ? $rootScope.$storage[VDC.getId()].orderTypes[id] : $rootScope.$storage[VDC.getId()].orderTypes);
		}
		// getLen: function(){
		// 	return $rootScope.$storage[VDC.getId()].orderTypes.length;
		// }
	};
}])

.factory('ConsistencyGroups', ['$timeout', '$rootScope', '$localStorage', 'VDC', 'ViPRUtils', function($timeout, $rootScope, $localStorage, VDC, ViPRUtils) {
	return {
		get: function (id) {
			return (id ? ViPRUtils.getArrayById($rootScope.$storage[VDC.getId()].consistencyGroups, id)[0] : $rootScope.$storage[VDC.getId()].consistencyGroups);
		},
		add: function(args) {
			$rootScope.$storage[VDC.getId()].consistencyGroups.push(args);
		},
		update: function(args) {
			ViPRUtils.upsert($rootScope.$storage[VDC.getId()].consistencyGroups, args);
		}
	};
}])

.factory('ViPRUtils', ['$rootScope', function($rootScope) {

	return {
		generateUID: function() {
			return new Date().getTime();
		},
		getArrayById: function(arr, id) {
			var res = $.grep(arr, function(n, i) {
				return (n.id == id);
			});

			return res;
		},
		getIndexById: function(arr, id) {
			var res = -1;
			var i = 0;

			while ((res < 0) && (i < arr.length)) {
				if (arr[i].id == id)
					res = i;
				i++;
			}

			return res;
		},
		upsert: function(arr, val) {
			var pos = this.getIndexById(arr, val.id);

			if (pos < 0)
				arr.push(val);
			else
				arr[pos] = val;

			return arr;
		},
		deleteById: function(arr, id) {
			var pos = this.getIndexById(arr, id);

			if (pos >= 0)
				arr.splice(pos, 1);

			return arr;
		},
		keysToArray: function(obj) {
			var res = [];
			for (key in obj) {
				res.push(key);
			}

			return res;
		},
		fieldArrayToObject: function(arr, searchValues) {
			var data = {};

			arr.forEach(function(arrVal, i) {
				searchValues.forEach(function(searchVal, j) {
					if (arrVal.name.indexOf(searchVal[1]) > -1) {
						data[searchVal[0]] = arrVal.value;
					}
				});
			});

			return data;
		},
		getKeybyValue: function(obj, value) {
			var res = [];
				for (var prop in obj) {
					if (obj.hasOwnProperty(prop)) {
						if (obj[prop] === value)
							res.push(prop);
					}
				}
			return res;
		},
		updateObject: function(obj, updateObj) {
			for (var key in updateObj) {
				obj[key] = updateObj[key];
			}
		},
		stringArray : function (arr) {
			if (arr instanceof Array) {
				var aggregate = '';
				var inList = [];
				arr.forEach(function (inputVal, i) {
					if (!_.contains(inList, inputVal)) {
						inList.push(inputVal);
						if (i != 0) {
							aggregate += ', '
						}
						aggregate += inputVal;
					}
				});
			} else {
				var aggregate = arr;
			}
			return aggregate;
		}
	};
}])

.factory('ViPRModal', ['$rootScope', function($rootScope) {
	var obj = {};

	return {
		get: function() {
			return obj;
		},
		set: function(args) {
			obj = args;
		}
	};
}])

.factory('WelcomeModal', ['$rootScope', function($rootScope) {
	var obj = {};

	return {
		get: function() {
			return obj;
		},
		set: function(args) {
			obj = args;
		}
	};
}])

.factory('MyService', ['$http', function($http) {

// Put private variables and functions here
// var x = "some value";
// ...

// Put public functions here within return {}
	return {
		get: function() {
		},
		set: function() {
		}
	};
}]);
