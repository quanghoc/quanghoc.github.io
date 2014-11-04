angular.module('vipr.controllers', [])

.controller('EnvironmentCtrl', ['$scope', '$rootScope', '$modal', '$localStorage', '$window', '$cookies', '$timeout', 'User', 'VDC', 'Demo', function($scope, $rootScope, $modal, $localStorage, $window, $cookies, $timeout, User, VDC, Demo) {
	// User.setRole('admin');
	$scope.user = {isAdmin: true, userName: "root"}; // by default
	//$scope.user = $rootScope.user;

	$scope.guidedTourEnabled = function() {
	 if (!$scope.enableGuidedTour){
	   return true;
	  }
	};

	$rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
		$scope.currentState = toState.name;
		$scope.oneFS = false;
		if (($rootScope.alert != undefined) && (!$rootScope.alert.showed)) {
			$rootScope.alert.showed = true;
		} else if (($rootScope.alert == undefined) || ($rootScope.alert.showed)) {
			$rootScope.alert = {};
		}

		//exit tour on state change
		$rootScope.$emit('ExitTour');

		//if current state has a tour, then show 'Behind the Scenes' button above using '$scope.guidedTourEnabled' function
		$scope.enableGuidedTour = (guidedTourArray[$scope.currentState] ? true : false);

		//if current state is an interactive tour, then set 'isTour' to true
		if(guidedTourArray[$scope.currentState]){
			$scope.isTour = typeof guidedTourArray[$scope.currentState].isTour !== 'undefined';
		}

		//always start initial tour step to 1
		$scope.currentStep = 1;

		//onclick of 'Behind the Scenes' button, run guided tour
		$scope.runGuidedTour = function() {
			if($scope.isTour){
				$scope.guidedTour($scope.currentStep);
			}else{
				$scope.guidedTour();
			}
		};

		//set the options of the guided tour to that of guidedTourArray object
		if($scope.enableGuidedTour) {
			$scope.IntroOptions = guidedTourArray[$scope.currentState];
		}

		//if Dashboard view and intro dismissed, show tour
		if($scope.currentState == 'adminDashboard' && $cookies.showWelcome === 'false'){
			$timeout(function(){ //call timeout to give introOptions time to get state options.
				$scope.guidedTour();
			})
		}

		// Swap tour for oneFS thumbnail preview if state is...
		$scope.oneFS = $scope.currentState == 'CreateFilesystemaAndNfsDatastore';

		// Legacy code as we no longer need User state
		$scope.user = User.get();

		// Not sure if this is the correct place to get VDC as it's triggered each $stateChangeSuccess event
		$scope.vdcId = VDC.getId();

    // This callback will set the viewport height showing the scrollbars
    // and generate a placeholder above the highlighted area, preventing the use of mouse wheel and scrollbars
		$scope.ChangeEvent = function (targetElement) {
				$scope.$emit('ChangeEvent');
		};
	
	    $scope.ExitEvent = function () {
				$scope.$emit('ExitEvent');
	    };
	
	    // Recreate scrollTo event to match the setTimeout speed and hide the overflow
	    $scope.BeforeChangeEvent = function (targetElement) {
					$scope.$emit('BeforeChangeEvent');
	    };

	});

 // Reset demo by clearing the localStorage
	$scope.resetLocalStorage = function(){
		Demo.reset("state");
	};

	// Open oneFS preview image
	$scope.openOneFS = function() {
		$scope.showFSModal = $modal.open({
			templateUrl: 'views/onefs-modal.htm',
			windowClass: 'modal-onefs'
		});
	};
}])

// Legacy code as we no longer need User state
.controller('UserCtrl', ['$scope', '$rootScope', 'User', 'VDC', function($scope, $rootScope, User, VDC) {
	User.set('user');
}])

.controller('TopCtrl', ['$scope', '$rootScope', 'User', '$modal', '$window', 'ViPRModal', '$cookies', function($scope, $rootScope, User, $modal, $window, ViPRModal, $cookies) {
	$rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
		$scope.user = User.get();
	});
	
	$scope.openUrl = function(url) {
		// $window.open(url);
		$window.location.href = url;
	};

	$scope.close = function() {
		$scope.$close();
	};

	$scope.openUseCase = function(id, startDelay) {
		ViPRModal.set({
			useCaseId: id,
			startDelay: startDelay
		});
		$scope.useCaseModal = $modal.open({
			templateUrl: 'views/use-case-modal.htm', 
			windowClass: 'modal-youtube'
		});
	};
	
	$scope.showWelcomeMsg = function(){
		$scope.welcomeModal = $modal.open({
			templateUrl: 'views/welcome.htm',
			size: 'lg',
			windowClass: 'splashscreen',
			controller: 'WelcomeCtrl'
		});
	};
	
	$scope.hideWelcomeMsg = function(){
		$scope.$close();
	};
	
	var sw = $cookies.showWelcome ? $cookies.showWelcome : 'true';
	//console.log("show welcome = " + sw);
	if(sw.toLowerCase()!=="false"){
		//console.log("show welcome pop-up");
		$scope.showWelcomeMsg();
	}
	
}])

.controller('WelcomeCtrl', ['$scope', 'WelcomeModal', '$modal', '$cookies', function($scope, WelcomeModal, $modal, $cookies) {
	//$scope.showWelcome = WelcomeModal.get().showWelcome;
	$scope.showWelcome = true;
	
	$scope.toggleShow = function(){
		$scope.showWelcome = !$scope.showWelcome;
	};
	
	$scope.hideWelcomeMsg = function(){
		$cookies.showWelcome = $scope.showWelcome; //will convert to string as cookies only strings
		//WelcomeModal.set({"showWelcome": $scope.showWelcome});
		//console.log("show welcome field = " + $scope.showWelcome);
		$scope.$close();
	};
}])

.controller('VideoPlayerCtrl', ['$scope', 'ViPRModal', function($scope, ViPRModal) {
	$scope.useCaseId = ViPRModal.get().useCaseId;
	$scope.startDelay = ViPRModal.get().startDelay;
}])

.controller('NavigationCtrl', ['$scope', '$rootScope', 'User', '$state', function($scope, $rootScope, User, $state) {
	$scope.ViPRnav = $rootScope.ViPRnav;
	$scope.user = User.get();
	$rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
		$scope.user = User.get();
	});
	$scope.isActiveMenu = function(path){
		// console.log("URL testing for " + path);
		return $state.includes(path);
		// if( $state.current.name.indexOf(path)>-1 ){
		// 	return true;
		// } else {
		// 	return false;
		// }
	};
	$scope.canIGo = function(evt,uid,kids){
		if(kids && kids.length > 0){
			// do nothing and allow menu to open
		} else {
			$state.go(uid);
			//evt.stopImmediatePropagation();
		}
	};
}])

.controller('DashboardCtrl', ['$scope', '$rootScope', 'Dashboard', function($scope, $rootScope, Dashboard) {
	$scope.data = Dashboard.get();
	// Set an argument to enable the guided tour just in case
	$scope.enable = true;

	// When the receive the guidedTourBroadcast...
    $scope.$on('guidedTourBroadcast', function(event) {
    	// Check if the guided tour is enabled by checking $scope.enable value inside the controller...
	    if ($scope.enable){
    		// Then call angular-intro method
	    	$scope.guidedTour(); }
    });

    // Emits the signal to EnvironmentCtrl telling enableGuidedTour has 'true' as argument
    $scope.enableGuide = function() {
        $scope.$emit('enableGuidedTour',$scope.enable);
    };

    // Auto-enable GuidedTour when the controller is loaded
    $scope.enableGuide();

	// We're supposed to calculate all capacity but it's too complicated
	// This is just a hack
	$scope.data.capacity = {
		block: 114.2,
		file: 202.0,
		freeBlockFile: 213.7,
		unstructured: 50.0
	};

    $scope.resetDemo = function(){
        console.log('works')
    }

}])

.controller('ClustersCtrl', ['$scope', '$rootScope', 'Clusters', function($scope, $rootScope, Clusters) {
	$scope.Clusters = Clusters.get();
}])

.controller('CommodityNodesCtrl', ['$scope', '$rootScope', '$state', 'CommodityNodes', function($scope, $rootScope, $state, CommodityNodes) {
	$scope.commodityNodes = CommodityNodes.get();
	$scope.totalItems = $scope.commodityNodes.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.itemExpand = [];

}])

.controller('CommodityNodeCtrl', ['$scope', '$rootScope', '$state', 'CommodityNodes', '$stateParams', function($scope, $rootScope, $state, CommodityNodes, $stateParams) {
	$scope.commodityNode = CommodityNodes.get($stateParams.nodeId);
	$scope.totalItems = $scope.commodityNode.disks.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.itemExpand = [];
}])

.controller('HealthCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'ViPRUtils', function($scope, $rootScope, $state, $stateParams, ViPRUtils) {
	$scope.itemExpand = [];
	$scope.serviceName =	$stateParams.name;
}])

.controller('storageSystemsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'StorageSystems', 'ViPRUtils', function($scope, $rootScope, $state, $stateParams, StorageSystems, ViPRUtils) {
	$scope.storageSystems = StorageSystems.get();
	$scope.totalItems = $scope.storageSystems.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.sortField = 'name';
	$scope.reverse = false;

	$scope.itemExpand = [];
	
	$scope.storageArrayType = 4;

	$scope.storageArrayTypes = [
		{id: 0, name: "EMC Isilon", port: 8080},
		{id: 1, name: "EMC VNX File", port: 443 },
		{id: 2, name: "NetApp", port: 443},
		{id: 3, name: "EMC XtremIO", port: 443},
		{id: 4, name: "Storage Provider for EMC VMAX, VNX Block", port: 5989},
		{id: 5, name: "Storage Provider for EMC VPLEX", port: 443},
		{id: 6, name: "Storage Provider for Hitachi storage systems", port: 2001},
		{id: 7, name: "Storage Provider for Third-party block storage systems", port: 22},
		{id: 8, name: "Block Storage Powered by ScaleIO", port: 22}
	];

	$scope.smisProvider = [
		{ port: 5989}
	];

	$scope.add = function() {
		StorageSystems.add({
			"id": ViPRUtils.generateUID(),
			"name": $scope.storageSystem.name,
			"registered": true,
			"type": $scope.storageArrayTypes[$scope.storageArrayType].name,
			"host": $scope.storageSystem.host,
			"status": true,
			"pools": [],
			"ports": [],
			"selectedport": $scope.storageSystems.portnumber,
			"user": $scope.storageSystem.user,
			"password": $scope.storageSystem.password,
			"passwordmatch": $scope.storageSystem.passwordmatch,
			"smisProviderIpAddress": $scope.storageSystem.smisProviderIpAddress,
			"smisProviderPortNumber": $scope.storageSystem.smisProviderPortNumber,
			"smisProviderUserName": $scope.storageSystem.smisProviderUserName,
			"providerpassword": $scope.storageSystem.providerpassword,
			"providerpasswordmatch": $scope.storageSystem.providerpasswordmatch
		});
		$rootScope.alert = {
			showed: false,
			success: true,
			message: "You have successfully added " + $scope.storageSystem.name + " in storage systems."
		};
		$state.go('storageSystems');
	};
	
	$scope.colSort = function(name){
		$scope.sortField = name;
		$scope.reverse = !$scope.reverse;
	};
	
	$scope.isActiveSort = function(name){
		if( $scope.sortField == name ){
			if($scope.reverse){
				return "sorting_desc";
			} else {
				return "sorting_asc";
			}
		} else {
			return "sorting";
		}
	};

}])

.controller('EditStorageSystemCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'StorageSystems', function($scope, $rootScope, $state, $stateParams, StorageSystems) {
	$scope.storageSystem = StorageSystems.get($stateParams.storageSystemId)[0];
	// $scope.totalItems = $scope.storageSystem.length;

	$scope.submit = function() {
		StorageSystems.update($scope.storageSystem);
		$state.go('storageSystems');
	};
}])

.controller('storageProvidersCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'StorageProviders', function($scope, $rootScope, $state, $stateParams, StorageProviders) {
	$scope.providers = StorageProviders.get();
	$scope.totalItems = $scope.providers.length;
	// console.log($scope.providers);
}])

.controller('DataProtectionSystemsCtrl', ['$scope', '$rootScope', '$state', 'DataProtectionSystems', function($scope, $rootScope, $state, DataProtectionSystems) {
	$scope.DataProtectionSystems = DataProtectionSystems.get();
	$scope.totalItems = $scope.DataProtectionSystems.length;
	$scope.sortField = 'name';
	$scope.reverse = false;
	$scope.itemExpand = [];
}])

.controller('licensesCtrl', ['$scope', '$rootScope', '$state', 'licenses', function($scope, $rootScope, $state, licenses) {
	$scope.licenses = licenses.get();
	$scope.totalItems = $scope.licenses.length;
	$scope.sortField = 'name';
	$scope.reverse = false;
	$scope.itemExpand = [];
}])

.controller('fabricManagersCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'FabricManagers', function($scope, $rootScope, $state, $stateParams, FabricManagers) {
	$scope.fabricManagers = FabricManagers.get();
	$scope.totalItems = $scope.fabricManagers.length;
	// console.log($scope.fabricManagers);
}])

.controller('NetworksCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'Networks', function($scope, $rootScope, $state, $stateParams, Networks) {
	$scope.networks = Networks.get();
	$scope.totalItems = $scope.networks.length;
}])

.controller('HostsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'Hosts', function($scope, $rootScope, $state, $stateParams, Hosts) {
	$scope.hosts = Hosts.get();
	$scope.totalItems = $scope.hosts.length;
	$scope.rpp = 10;
	
}])

.controller('VMwarevCenterCtrl', ['$scope', '$rootScope', '$state', 'VMwarevCenter', function($scope, $rootScope, $state, VMwarevCenter) {
	$scope.VMwarevCenters = VMwarevCenter.get();
	$scope.totalItems = $scope.VMwarevCenters.length;
	$scope.sortField = 'name';
	$scope.reverse = false;

	$scope.itemExpand = [];
}])

.controller('VDCCtrl', ['$scope', '$rootScope', '$state', 'VDC', function($scope, $rootScope, $state, VDC) {
	$scope.data = VDC.get();
	$scope.itemExpand = [];
}])

.controller('EditVDCCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'VDC', function($scope, $rootScope, $state, $stateParams, VDC) {
	$scope.vdc = VDC.get($stateParams.vdcId);

	$scope.cancel = function() {
		$state.go('VirtualDataCenters');
	};
}])

.controller('virtualArraysCtrl', ['$scope', '$rootScope', '$state', 'VirtualArrays', '$modal', function($scope, $rootScope, $state, VirtualArrays, $modal) {
	$scope.virtualArrays = VirtualArrays.get();
	$scope.totalItems = $scope.virtualArrays.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.sortField = 'name';
	$scope.reverse = false;
	$scope.itemExpand = [];
	
	$scope.virtualArray = {};

	$scope.showAddModal = function(){
		$scope.addModal = $modal.open({templateUrl: 'views/admin/virtual-arrays_add-modal.htm', controller: 'virtualArraysCtrl'});
	};
	
	$scope.hideAddModal = function(){
		$scope.$close();
	};
	
	$scope.add = function(){
		VirtualArrays.add({
			id: $scope.totalItems,
			name: $scope.virtualArray.name || "New Virtual Array",
			protectionBlock: "None",
			protectionObject: "None",
			protocols: "FC, iSCSI, CIFS, NFS",
			systemTypes: "EMC VNX Block, EMC Isilon, EMC XtremIO, ScaleIO",
			raidLevels: "RAID10, RAID5, RAID6",
			driveTypes: "Near Line Serial Attached SCSI, Serial Attached SCSI, Solid State Drive"
		});
		$state.go('EditVirtualArray', {varrayId: $scope.totalItems});
		$scope.$close();
	};
}])

.controller('editVirtualArrayCtrl', ['$scope', '$rootScope', '$state', 'VirtualArrays', '$stateParams', function($scope, $rootScope, $state, VirtualArrays, $stateParams) {
	$scope.virtualArray = VirtualArrays.get($stateParams.varrayId);
	// console.log($scope.virtualArray);

	$scope.update = function() {
		VirtualArrays.update($scope.virtualArray);
		//console.log(VirtualArrays.get($scope.virtualArray.id));
		$state.go('virtualArrays');
	};
	
	$scope.cancel = function(){
		$state.go('virtualArrays');
	};
}])

.controller('BlockVirtualPoolsCtrl', ['$scope', '$rootScope', '$state', 'VirtualArrays', 'BlockVirtualPools', 'ViPRUtils', function($scope, $rootScope, $state, VirtualArrays, BlockVirtualPools, ViPRUtils) {
	$scope.UID = ViPRUtils.generateUID();
	$scope.blockVirtualPools = BlockVirtualPools.get();
	$scope.totalItems = $scope.blockVirtualPools.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.sortField = 'name';
	$scope.reverse = false;
	$scope.selected = [];
	
	$scope.colSort = function(name){
		$scope.sortField = name;
		$scope.reverse = !$scope.reverse;
	};
	
	$scope.isActiveSort = function(name){
		if( $scope.sortField == name ){
			if($scope.reverse){
				return "sorting_desc";
			} else {
				return "sorting_asc";
			}
		} else {
			return "sorting";
		}
	};
}])

.controller('EditBlockVirtualPoolsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', '$modal', 'VirtualArrays', 'BlockVirtualPools', function($scope, $rootScope, $state, $stateParams, $modal, VirtualArrays, BlockVirtualPools) {
	var blockVirtualPoolTemp = {
		"id": $stateParams.vpoolId,
		"provisioning": "Thin",
		"assignment": "automatic"
	};
	$scope.opened = [];

	$scope.blockVirtualPool = angular.copy(BlockVirtualPools.get($stateParams.vpoolId)[0] || blockVirtualPoolTemp);
	$scope.blockVirtualArrays = VirtualArrays.getBlocks();

	$scope.add = function(){
		BlockVirtualPools.update($scope.blockVirtualPool);
		$state.go('blockVirtualPools');
	};
	
	$scope.cancel = function(){
		$state.go('blockVirtualPools');
	};

	$scope.showRpCopyDialogModal = function() {
		$scope.rpCopyDialogModal = $modal.open({templateUrl: 'rpCopyDialog', controller: 'EditBlockVirtualPoolsCtrl'});
	};
	
	$scope.hideModal = function(){
		$scope.$close();
	};

}])

.controller('FileVirtualPoolsCtrl', ['$scope', '$rootScope', '$state', 'VirtualArrays', 'FileVirtualPools', 'ViPRUtils', function($scope, $rootScope, $state, VirtualArrays, FileVirtualPools, ViPRUtils) {
	$scope.UID = ViPRUtils.generateUID();
	$scope.fileVirtualPools = FileVirtualPools.get();
	$scope.totalItems = $scope.fileVirtualPools.length;
}])

.controller('EditFileVirtualPoolsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'VirtualArrays', 'FileVirtualPools', function($scope, $rootScope, $state, $stateParams, VirtualArrays, FileVirtualPools) {
	var fileVirtualPoolTemp = {
		"id": $stateParams.vpoolId,
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "NFS",
		"pools": "1",
		"resources": "1"
	};
	$scope.opened = [];

	$scope.fileVirtualPool = angular.copy(FileVirtualPools.get($stateParams.vpoolId)[0] || fileVirtualPoolTemp);
	$scope.fileVirtualArrays = VirtualArrays.getFiles();

	$scope.add = function(){
		FileVirtualPools.update($scope.fileVirtualPool);
		$state.go('fileVirtualPools');
	};
	
	$scope.cancel = function(){
		$state.go('fileVirtualPools');
	};
}])

.controller('ObjectVirtualPoolsCtrl', ['$scope', '$rootScope', '$state', 'VirtualArrays', 'ObjectVirtualPools', 'ViPRUtils', function($scope, $rootScope, $state, VirtualArrays, ObjectVirtualPools, ViPRUtils) {
	$scope.UID = ViPRUtils.generateUID();
	$scope.objectVirtualPools = ObjectVirtualPools.get();
	$scope.totalItems = $scope.objectVirtualPools.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;

	$scope.itemExpand = [];
}])

.controller('EditObjectVirtualPoolCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'VDC', 'VirtualArrays', 'ObjectVirtualPools', 'ViPRUtils', function($scope, $rootScope, $state,  $stateParams, VDC, VirtualArrays, ObjectVirtualPools, ViPRUtils) {
	var objectVirtualPoolTemp = {
		"id": $stateParams.vpoolId,
		"virtualArrays": [
			{
				"vdc": VDC.getId() * 1, // Must convert to integer because angular binding won't work with string
				"virtualArray": 0
			}
		]
	};

	// Must use angular.copy here to avoid direct reference back to the ViPRJSON object
	$scope.objectVirtualPool = angular.copy(ObjectVirtualPools.get($stateParams.vpoolId)[0] || objectVirtualPoolTemp);
	$scope.origObjectVirtualPool = angular.copy($scope.objectVirtualPool);

	$scope.vdcList = VDC.get();

	// This is a hack because we assume there are only 2 VDCs
	$scope.vdcList[0].virtualArrays = [VirtualArrays.getCommodity(1)];
	$scope.vdcList[1].virtualArrays = [VirtualArrays.getCommodity(2)];

	$scope.save = function() {
		var duplicateError = (($scope.objectVirtualPool.virtualArrays.length > 1) && ($scope.objectVirtualPool.virtualArrays[0].vdc == $scope.objectVirtualPool.virtualArrays[1].vdc));
		if (($scope.objectVirtualPool.virtualArrays.length > 1) && (duplicateError)) {
			$scope.error = "The object virtual pool cannot have the same two virtual data centers";
		} else {
			$scope.error = false;
			ObjectVirtualPools.update($scope.objectVirtualPool);
			$state.go('ObjectVirtualPools');
		}
	};
	
	$scope.insert = function() {
		$scope.objectVirtualPool.virtualArrays.push({
			"vdc": VDC.getId() == 1 ? 2 : 1,
			"virtualArray": 0
		});
	};

	// TODO: cancel does not reset state back to original objectVirtualPool
	$scope.cancel = function() {
		$scope.objectVirtualPool = angular.copy($scope.origObjectVirtualPool);
		$state.go('ObjectVirtualPools');
	};
}])


.controller('GenericOrderFormCtrl', ['$scope', '$rootScope', '$timeout', '$state', 'Order', 'OrderTypes', 'Hosts', 'ViPRUtils', function($scope, $rootScope, $timeout, $state, Order, OrderTypes, Hosts, Volumes, ViPRUtils) {
	$scope.data = {
		"id": Order.getLen(),
		"date": new Date(),
		"details": []
	};
	$scope.hosts = Hosts.get();
	$scope.getHosts = Hosts.get;

	$scope.submit = function() {
		Order.create($scope.data);
		$state.go('GenericOrder', {orderId: $scope.data.id});
	};

	$scope.cancel = function(){
		$state.go('catalog');
	};
}])

.controller('GenericOrderResultCtrl', ['$scope', '$rootScope', '$timeout', '$state', '$stateParams', 'Order', 'OrderTypes', function($scope, $rootScope, $timeout, $state, $stateParams, Order, OrderTypes) {
	$scope.data = Order.get($stateParams.orderId);
	$scope.orderType = OrderTypes.get($scope.data.orderTypeId);
	var delay = ($state.current.name == 'GenericOrderCompleted') ? 0 : ($scope.orderType.delay || 3);

	$scope.steps = {
		delay: delay,
		precheckSteps: $scope.orderType.precheckSteps || 2,
		executionSteps: $scope.orderType.executionSteps || 4
	};
	$scope.fulfilled = false;
	$scope.itemExpand = [];

	$timeout(function() {
		$scope.fulfilled = true;
	}, $scope.steps.executionSteps * delay * 1000);
}])

.controller('BlockCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'VirtualArrays', 'Volumes', 'BlockVirtualPools', 'ExportGroups', function($scope, $rootScope, $state, $stateParams, VirtualArrays, Volumes, BlockVirtualPools, ExportGroups) {
	$scope.data.blockVirtualArrays = VirtualArrays.getBlocks();
	$scope.data.blockVirtualPools = BlockVirtualPools.get();
	$scope.volumes = Volumes.get();
	$scope.getVolumes = Volumes.get;
	$scope.getExportGroups = ExportGroups.get;
}])

.controller('FileCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'VirtualArrays', 'FileVirtualPools', 'FileSystems', function($scope, $rootScope, $state, $stateParams, VirtualArrays, FileVirtualPools, FileSystems) {
	$scope.data.fileVirtualArrays = VirtualArrays.getFiles();
	$scope.data.fileVirtualPools = FileVirtualPools.get();
	$scope.data.fileSystems = FileSystems.get();
}])

.controller('MyOrdersCtrl', ['$scope', '$rootScope', '$state', 'Order', 'OrderTypes', '$stateParams', function($scope, $rootScope, $state, Order, OrderTypes, $stateParams) {
	// console.log('MyOrdersCtrl');
	$scope.orders = Order.get();
	var orderTypeIds = $scope.orders.map(function(item) {
		return item.orderTypeId;
	});
	$scope.recentServices = orderTypeIds.filter(function(item, pos) {
    return orderTypeIds.indexOf(item) == pos;
	});

	$scope.orderTypes = OrderTypes.get();
	$scope.orderType = function(id){
		var oT = $scope.orderTypes[id];
		//console.log(oT);
		return oT;
	};

	$scope.totalItems = $scope.orders.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.sortField = 'id';
	$scope.reverse = true;
	//$scope.itemExpand = [];
	$scope.selected = [];
	
	$scope.colSort = function(name){
		$scope.sortField = name;
		$scope.reverse = !$scope.reverse;
	};
	
	$scope.isActiveSort = function(name){
		if( $scope.sortField == name ){
			if($scope.reverse){
				return "sorting_desc";
			} else {
				return "sorting_asc";
			}
		} else {
			return "sorting";
		}
	};
	
}])

.controller('VolumesCtrl', ['$scope', '$rootScope', '$state', 'Volumes', '$stateParams', 'ExportGroups', 'FileSystems', function($scope, $rootScope, $state, Volumes, $stateParams, ExportGroups, FileSystems) {
	$scope.volumes = Volumes.get();
	$scope.exportGroups = ExportGroups.get();
	$scope.fileSystems = FileSystems.get();
	$scope.totalItems = $scope.volumes.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.sortField = 'date';
	$scope.reverse = false;
	$scope.selected = [];

	$scope.colSort = function(name){
		$scope.sortField = name;
		$scope.reverse = !$scope.reverse;
	};

	$scope.isActiveSort = function(name){
		if( $scope.sortField == name ){
			if($scope.reverse){
				return "sorting_desc";
			} else {
				return "sorting_asc";
			}
		} else {
			return "sorting";
		}
	};

}])

.controller('ConsistencyGroupsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'ConsistencyGroups', 'ViPRUtils', function($scope, $rootScope, $state, $stateParams, ConsistencyGroups, ViPRUtils) {
	$scope.consistencyGroups = ConsistencyGroups.get();
	$scope.totalItems = $scope.consistencyGroups.length;
	$scope.rpp = 10;
	$scope.currentPage = 1;
	$scope.sortField = 'name';
	$scope.reverse = false;

	$scope.itemExpand = [];

	$scope.add = function() {
		ConsistencyGroups.add({
			"id": ViPRUtils.generateUID(),
			"name": $scope.consistencyGroup.name
		});
		$rootScope.alert = {
			showed: false,
			success: true,
			message: "You have successfully added " + $scope.consistencyGroup.name + " in consistency groups."
		};
		$state.go('userConsistency');
	};

	$scope.colSort = function(name){
		$scope.sortField = name;
		$scope.reverse = !$scope.reverse;
	};

	$scope.isActiveSort = function(name){
		if( $scope.sortField == name ){
			if($scope.reverse){
				return "sorting_desc";
			} else {
				return "sorting_asc";
			}
		} else {
			return "sorting";
		}
	};

}])

.controller('EditConsistencyGroupsCtrl', ['$scope', '$rootScope', '$state', '$stateParams', 'ConsistencyGroups', function($scope, $rootScope, $state, $stateParams, ConsistencyGroups) {
	$scope.consistencyGroup = ConsistencyGroups.get($stateParams.consistencyGroupsId);

	$scope.submit = function() {
		ConsistencyGroups.update($scope.consistencyGroup);
		$state.go('userConsistency');
	};
}])

// Turn this on when we need to see all state params
.controller('DebuggerCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
	// This will show all params when state change
	// $rootScope.$on('$stateChangeSuccess', function(evt, toState, toParams, fromState, fromParams) {
	// 	console.log(toParams);
	// 	console.log(fromParams);
	// });
}])

// Sample controller
.controller('NewSampleCtrl', ['$scope', '$rootScope', '$state', function($scope, $rootScope, $state) {
	$scope.name = 'Your variable';
}]);
