angular.module('vipr', [
	'ui.router',
	'angular-underscore',
	'ui.bootstrap',
	'localytics.directives',
	'vipr.services',
	'vipr.filters',
	'vipr.directives',
	'vipr.controllers',
	'angular-intro',
	'ngCookies',
	'ngStorage',
	'ui.knob'
])

.run(['$rootScope', '$localStorage', 'Demo', function($rootScope, $localStorage, Demo) {
	// This is similar to jQuery(document).ready
	angular.element(document).ready(function() {
		ECUE.setLeftNav();
	});

	// Bring global JSON variable into localStorage
	// set JSON version
	VIPRJSON[1].version = "1.0";
	VIPRJSON[2].version = VIPRJSON[1].version;

	// set JSON to localStorage
	$rootScope.enableLocalStorage = true; //toggle localStorage
	$rootScope.$storage = ($rootScope.enableLocalStorage ? $localStorage.$default(VIPRJSON) : VIPRJSON) //if enableLocalStorage then store data obj in local storage

	// check JSON version against localStorage
	if(typeof $rootScope.$storage[1].version === "undefined" || $rootScope.$storage[1].version != VIPRJSON[1].version){
		Demo.reset();
	}

	//$rootScope.VIPRJSON = VIPRJSON;
	$rootScope.ViPRnav = ViPRnav;

	$rootScope.$on('guidedTourClick', function(event, args) {
		$rootScope.$broadcast('guidedTourBroadcast', args);
	});
	$rootScope.$on('enableGuidedTour', function(event, args) {
		$rootScope.$broadcast('enableGuidedTourBroadcast', args);
	});

}])

.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
	//delete $httpProvider.defaults.headers.common['X-Requested-With'];
	// $locationProvider.html5Mode(true);

	$urlRouterProvider
		.otherwise('/vdc/1/admin/dashboard/admin-dashboard');

	$stateProvider
		.state('vdc', {
			url: '/vdc/:id',
			template: '<div ui-view/>'
		})
		.state('admin', {
			url: '/admin',
			parent: 'vdc',
			template: '<div ui-view/>'
		})
		.state('Dashboard', {
			url: '/dashboard',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('physicalAssets', {
			url: '/physical-assets',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('virtualAssets', {
			url: '/virtual-assets',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('serviceCatalog', {
			url: '/service-catalog',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('resources', {
			url: '/resources',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('tenantSettings', {
			url: '/tenant-settings',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('security', {
			url: '/security',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('settings', {
			url: '/settings',
			parent: 'admin',
			template: '<div ui-view/>'
		})
		.state('adminDashboard', {
			url: '/admin-dashboard',
			parent: 'Dashboard',
			templateUrl: 'views/admin/dashboard.htm',
			// templateUrl: 'admin-dashboard.htm'
		}).state('logs', {
			url: '/admin-logs',
			parent: 'Dashboard',
			templateUrl: 'views/admin/logs.htm'
		}).state('auditLogs', {
			url: '/admin-audit-logs',
			parent: 'Dashboard',
			templateUrl: 'views/admin/auditlogs.htm'
		})
		.state('storageSystems', {
			url: '/storage-systems',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-systems.htm'
		})
		.state('storageSystems_create', {
			url: '/storage-systems/create/:storageSystemId',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-systems-create.htm'
		})
		.state('storageSystems_edit', {
			url: '/storage-systems/edit/:storageSystemId',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-systems-edit.htm'
		})
		.state('storageSystems_pools', {
			url: '/storage-systems/pools/:storageSystemId',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-systems-storage-pools.htm'
		})
		.state('storageSystems_ports', {
			url: '/storage-systems/ports/:storageSystemId',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-systems-storage-ports.htm'
		})
		.state('providers', {
			url: '/storage-providers',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-providers.htm'
		})
		.state('providers_create', {
			url: 'storage-providers/create',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/storage-providers-add.htm'
		})
		.state('fabric', {
			url: '/fabric-managers',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/fabric-managers.htm'
		})
		.state('fabric_create', {
			url: 'fabric-managers/create',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/fabric-managers-add.htm'
		})
		.state('dps', {
			url: '/data-protection-systems',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/data-protection-systems.htm'
		})
		.state('dps_create', {
			url: '/data-protection-systems/create',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/data-protection-systems-add.htm'
		})
		.state('networks', {
			url: '/networks',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/networks.htm'
		})
		.state('clusters', {
			url: '/clusters',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/clusters.htm'
		})
		.state('clusters_create', {
			url: '/clusters',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/clusters_add.htm'
		})
		.state('hosts', {
			url: '/hosts',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/hosts.htm'
		})
		.state('hosts_create', {
			url: '/hosts/create',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/hosts-add.htm'
		})
		.state('vCenters', {
			url: '/vCenters',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/vcenters.htm'
		})
		.state('vCenters_create', {
			url: '/vCenters',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/vcenters-add.htm'
		})
		.state('virtualArrays', {
			url: '/virtual-arrays',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/virtual-arrays.htm'
		})
		.state('EditVirtualArray', {
			url: '/edit-virtual-array/:varrayId',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/edit-virtual-array.htm'
		})
		// .state('virtualArrays_create', {
		//  url: '/create-virtual-arrays',
		//  parent: 'virtualArrays',
		//  templateUrl: 'views/admin/create-virtual-arrays.htm'
		// })
		.state('blockVirtualPools', {
			url: '/block-virtual-pools',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/block-virtual-pools.htm'
		})
		.state('blockVirtualPools_edit', {
			url: '/edit-block-virtual-pool/:vpoolId',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/create-block-virtual-pool.htm'
		})
		.state('fileVirtualPools', {
			url: '/file-virtual-pools',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/file-virtual-pools.htm'
		})
		.state('editFileVirtualPools', {
			url: '/edit-file-virtual-pools/:vpoolId',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/edit-file-virtual-pools.htm'
		})
		.state('ObjectVirtualPools', {
			url: '/object-virtual-pools',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/object-virtual-pools.htm'
		})
		.state('EditObjectVirtualPool', {
			url: '/edit-object-virtual-pool/:vpoolId',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/edit-object-virtual-pool.htm'
		})
		.state('dataStores', {
			url: '/data-stores',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/data-stores.htm'
		})
		.state('VirtualCASClusters', {
			url: '/cas-clusters',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/cas-clusters.htm'
		})
		.state('EditCASPool', {
			url: '/edit-cas-pool',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/edit-cas-pool.htm'
		})
		.state('EditCASProfile', {
			url: '/edit-cas-profile',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/edit-cas-profile.htm'
		})
		.state('catalogEdit', {
			url: '/catalog-edit',
			parent: 'serviceCatalog',// 'admin',
			templateUrl: 'views/admin/catalog.htm'
		})
		.state('tenants', {
			url: '/tenants',
			parent: 'tenantSettings', //'admin',
			templateUrl: 'views/admin/tenants.htm'
		})
		.state('rolesAssignments', {
			url: '/roles-assignments',
			parent: 'security',
			templateUrl: 'views/admin/roles-assignments.htm'
		})
		.state('editRoleAssignment', {
			url: '/edit-role-assignment',
			parent: 'security',
			templateUrl: 'views/admin/role-assignment-edit.htm'
		})
		.state('authenticationProviders', {
			url: '/authentication-providers',
			parent: 'security',
			templateUrl: 'views/admin/authentication-providers.htm'
		})
		.state('passwords', {
			url: '/local-passwords',
			parent: 'security',
			templateUrl: 'views/admin/local-passwords.htm'
		})
		.state('config', {
			url: '/configuration',
			parent: 'settings',
			templateUrl: 'views/admin/configuration.htm'
		})
		.state('dataServicesNodes', {
			url: '/data-services-nodes',
			parent: 'settings',
			templateUrl: 'views/admin/data-services-nodes.htm'
		})
		.state('urls', {
			url: '/urls',
			parent: 'settings',
			templateUrl: 'views/admin/base-urls.htm'
		})
		.state('upgrade', {
			url: '/upgrade',
			parent: 'settings',
			templateUrl: 'views/admin/upgrade.htm'
		})
		.state('license', {
			url: '/license',
			parent: 'settings',
			templateUrl: 'views/admin/license.htm'
		})
		.state('support', {
			url: '/support-request',
			parent: 'settings',
			templateUrl: 'views/admin/support.htm'
		})

		//User Menu

		.state('user', {
			url: '/user',
			parent: 'vdc',
			template: '<div ui-view></div>',
			controller: 'UserCtrl'
		})
		.state('userDashboard', {
			url: '/dashboard',
			// parent: 'user',
			parent: 'serviceCatalog',
			templateUrl: 'views/user/dashboard.htm'
			// templateUrl: 'user-dashboard.htm'
		})
		.state('catalog', {
			url: '/catalog',
			parent: 'serviceCatalog', // 'user',
			templateUrl: 'views/user/catalog.htm'
		})
		.state('BlockStorageServices', {
			url: '/block-storage-services',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('RemoveVolumeByHost', {
			url: '/block-storage-services/remove-volume-by-host',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-remove-volume-by-host.htm'
		})
		.state('CreateBlockVolume', {
			url: '/block-storage-services/create-block-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-create-block-volume.htm'
		})
		.state('RemoveBlockVolumes', {
			url: '/block-storage-services/remove-block-volumes',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-remove-block-volumes.htm'
		})
		.state('ExpandBlockVolume', {
			url: '/block-storage-services/expand-block-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-expand-block-volume.htm'
		})
		.state('ExportVolumeToAHost', {
			url: '/block-storage-services/export-volume-to-a-host',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-export-volume-to-a-host.htm'
		})
		.state('ExportVplexVolume', {
			url: '/block-storage-services/export-vplex-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-export-vplex-volume.htm'
		})
		.state('UnexportVolume', {
			url: '/block-storage-services/unexport-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-unexport-volume.htm'
		})
		.state('DiscoverUnmanagedVolumes', {
			url: '/block-storage-services/discover-unmanaged-volumes',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-discover-unmanaged-volumes.htm'
		})
		.state('IngestUnmanagedVolumes', {
			url: '/block-storage-services/ingest-unmanaged-volumes',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-ingest-unmanaged-volumes.htm'
		})
		.state('ChangeVolumeVirtualPool', {
			url: '/block-storage-services/change-volume-virtual-pool',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-change-volume-virtual-pool.htm'
		})
		.state('ChangeVirtualPool', {
			url: '/block-storage-services/change-virtual-pool',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-change-virtual-pool.htm'
		})
		.state('ChangeVirtualArray', {
			url: '/block-storage-services/change-virtual-array',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-change-virtual-array.htm'
		})
		.state('BlockProtectionServices', {
			url: '/block-protection-services',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('FailoverBlockVolume', {
			url: '/block-protection-services/failover-block-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-failover-block-volume.htm'
		})
		.state('SwapContinuousCopies', {
			url: '/block-protection-services/swap-continuous-copies',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-swap-continuous-copies.htm'
		})
		.state('CreateBlockSnapshot', {
			url: '/block-protection-services/create-block-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-create-block-snapshot.htm'
		})
		.state('RestoreBlockSnapshot', {
			url: '/block-protection-services/restore-block-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-restore-block-snapshot.htm'
		})
		.state('RemoveBlockSnapshot', {
			url: '/block-protection-services/remove-block-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-remove-block-snapshot.htm'
		})
		.state('CreateFullCopy', {
			url: '/block-protection-services/create-full-copy',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-create-full-copy.htm'
		})
		.state('CreateSnapshotFullCopy', {
			url: '/block-protection-services/create-snapshot-full-copy',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-create-snapshot-full-copy.htm'
		})
		.state('CreateContinuousCopy', {
			url: '/block-protection-services/create-continuous-copy',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-create-continuous-copy.htm'
		})
		.state('RemoveContinuousCopy', {
			url: '/block-protection-services/remove-continuous-copy',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-remove-continuous-copy.htm'
		})
		.state('ExportSnapshotToAHost', {
			url: '/block-protection-services/export-snapshot-to-a-host',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-export-snapshot-to-a-host.htm'
		})
		.state('UnexportSnapshot', {
			url: '/block-protection-services/unexport-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-unexport-snapshot.htm'
		})
		.state('RemoveFullCopy', {
			url: '/block-protection-services/remove-full-copy',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-protection-services-remove-full-copy.htm'
		})
		.state('FileStorageServices', {
			url: '/file-storage-services',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('CreateUnixShare', {
			url: '/file-storage-services/create-linux-share',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-storage-services-create-linux-share.htm'
		})
		.state('CreateWindowsShare', {
			url: '/file-storage-services/create-windows-share',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-storage-services-create-windows-share.htm'
		})
		.state('DiscoverUnmanagedFileSystems', {
			url: '/file-storage-services/discover-unmanaged-file-systems',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-storage-services-discover-unmanaged-filesystems.htm'
		})
		.state('ExpandFileSystem', {
			url: '/file-storage-services/expand-file-systems',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-storage-services-expand-file-systems.htm'
		})
		.state('IngestUnmanagedFileSystems', {
			url: '/file-storage-services/ingest-unmanaged-file-systems',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-storage-services-ingest-unmanaged-filesystems.htm'
		})
		.state('RemoveFileSystem', {
			url: '/file-storage-services/remove-file-systems',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-storage-services-remove-file-systems.htm'
		})
		.state('FileProtectionServices', {
			url: '/file-protection-services',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('CreateFileSnapshot', {
			url: '/file-protection-services/create-file-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-protection-services-create-file-snapshot.htm'
		})
		.state('RemoveFileSnapshot', {
			url: '/file-protection-services/remove-file-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-protection-services-remove-file-snapshot.htm'
		})
		.state('RestoreFileSnapshot', {
			url: '/file-protection-services/restore-file-snapshot',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-protection-services-restore-file-snapshot.htm'
		})
		.state('BlockServicesLinux', {
			url: '/block-services-linux/',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('CreateandMountBlockVolume', {
			url: '/block-services-linux/create-and-mount-block-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-linux-create-and-mount-block-volume.htm'
		})
		.state('ExpandLinuxMount', {
			url: '/block-services-linux/expand-linux-mount',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-linux-expand-linux-mount.htm'
		})
		.state('MountExistingVolumeonLinux', {
			url: '/block-services-linux/mount-existing-volume-on-linux',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-linux-mount-existing-volume-on-linux.htm'
		})
		.state('UnmountandDeleteVolume', {
			url: '/block-services-linux/unmount-and-delete-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-linux-unmount-and-delete-volume.htm'
		})
		.state('UnmountVolumeonLinux', {
			url: '/block-services-linux/unmount-volume-on-linux',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-linux-unmount-volume-on-linux.htm'
		})
		.state('BlockServicesWindows', {
			url: '/block-services-windows',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('CreateandMountVolumeonWindows', {
			url: '/block-services-windows/create-and-mount-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-windows-create-and-mount-volume.htm'
		})
		.state('ExpandVolumeonWindows', {
			url: '/block-services-windows/expand-volume-on-windows',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-windows-expand-volume-on-windows.htm'
		})
		.state('MountVolumeonWindows', {
			url: '/block-services-windows/mount-volume-on-windows',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-windows-mount-volume-on-windows.htm'
		})
		.state('UnmountandDeleteVolumeonWindows', {
			url: '/block-services-windows/unmount-and-delete-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-windows-unmount-and-delete-volume.htm'
		})
		.state('UnmountVolumeonWindows', {
			url: '/block-services-windows/unmount-volume-on-windows',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-windows-unmount-volume-on-windows.htm'
		})
		.state('BlockServicesVMware', {
			url: '/block-services-vmware',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('CreateVolumeandDatastore', {
			url: '/block-services-vmware/create-volume-and-datastore',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-create-volume-and-datastore.htm'
		})
		.state('DeleteDatastoreandVolume', {
			url: '/block-services-vmware/delete-datastore-and-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-delete-datastore-and-volume.htm'
		})
		.state('ExtendDatastorewithNewVolume', {
			url: '/block-services-vmware/extend-datastore-with-new-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-extend-datastore-with-new-volume.htm'
		})
		.state('CreateVolumeforVMware', {
			url: '/block-services-vmware/create-volume-for-vmware',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-create-volume-for-vmware.htm'
		})
		.state('RemoveVolumeforVMware', {
			url: '/block-services-vmware/remove-volume-for-vmware',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-remove-volume-for-vmware.htm'
		})
		.state('CreateVMwareDatastore', {
			url: '/block-services-vmware/create-vmware-datastore',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-create-vmware-datastore.htm'
		})
		.state('DeleteVMwareDatastore', {
			url: '/block-services-vmware/delete-vmware-datastore',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-delete-vmware-datastore.htm'
		})
		.state('ExtendDatastorewithExistingVolume', {
			url: '/block-services-vmware/extend-datastore-with-existing-volume',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-services-for-vmware-vcenter-extend-datastore-with-existing-volume.htm'
		})
		.state('FileServicesVMware', {
			url: '/file-services-vmware',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})
		.state('CreateFilesystemaAndNfsDatastore', {
			url: '/file-services-vmware/create-filesystem-and-nfs-datastore',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-services-for-vmware-vcenter-create-filesystem-and-nfs-datastore.htm'
		})
		.state('CreateVmwareNfsDatastore', {
			url: '/file-services-vmware/create-vmware-nfs-datastore',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-services-for-vmware-vcenter-create-vmware-nfs-datastore.htm'
		})
		.state('DeleteNfsDatastoreAndFilesystem', {
			url: '/file-services-vmware/delete-nfs-datastore-and-filesystem',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-services-for-vmware-vcenter-delete-nfs-datastore-and-filesystem.htm'
		})
		.state('DeleteVmwareNfsDatastore', {
			url: '/file-services-vmware/delete-vmware-nfs-datastore',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-file-services-for-vmware-vcenter-delete-vmware-nfs-datastore.htm'
		})
		.state('DataServices', {
			url: '/data-services',
			parent: 'catalog',
			templateUrl: 'views/user/catalog-page.htm'
		})

		.state('CatalogCreateBucketForDataServices', {
			url: '/data-services/create-bucket-for-data-services',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-data-services-create-bucket-for-data-services.htm'
		})
		.state('CatalogDeleteBucketOfDataServices', {
			url: '/data-services/delete-bucket-of-data-services',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-data-services-delete-bucket-of-data-services.htm'
		})
		.state('IngestFileSystems', {
			url: '/data-services/ingest-file-systems',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-data-services-ingest-file-systems.htm'
		})
		.state('CreateBlockVolumeforaHost', {
			url: '/block-storage-services/create-block-volume-for-a-host',
			parent: 'catalog',
			templateUrl: 'views/user/service-catalog-block-storage-services-create-block-volume-for-a-host.htm'
		})
		.state('GenericOrder', {
			url: '/order/execution/:orderId',
			parent: 'user',
			templateUrl: 'views/user/generic-order-result.htm'
		})
		.state('GenericOrderCompleted', {
			url: '/order/execution/:orderId/completed',
			parent: 'user',
			templateUrl: 'views/user/generic-order-result.htm'
		})
		.state('CommodityNodes', {
			url: '/commodity-nodes',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/commodity-nodes.htm'
		})
		.state('Disks', {
			url: '/commodity-node/:nodeId',
			parent: 'physicalAssets',
			templateUrl: 'views/admin/disks.htm'
		})
		.state('VirtualDataCenters', {
			url: '/virtual-data-centers',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/virtual-data-centers.htm'
		})
		.state('EditVirtualDataCenter', {
			url: '/edit-virtual-data-center/:vdcId',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/edit-virtual-data-center.htm'
		})
		.state('CreateVirtualDataCenter', {
			url: '/create-virtual-data-center',
			parent: 'virtualAssets',
			templateUrl: 'views/admin/create-virtual-data-center.htm'
		})
		.state('SystemHealth', {
			url: '/system-health',
			parent: 'Dashboard',
			templateUrl: 'views/admin/system-health.htm'
		})
		.state('SystemHealthServices', {
			url: '/system-health-services/:name',
			parent: 'Dashboard',
			templateUrl: 'views/admin/system-health-services.htm'
		})
		.state('ObjectAccessKeys', {
			url: '/object-access-keys',
			parent: 'admin',
			templateUrl: 'views/admin/object-access-keys.htm'
		})
		.state('UserPreferences', {
			url: '/user-preferences',
			parent: 'admin',
			templateUrl: 'views/admin/user-preferences.htm'
		})
		.state('DataServicesSettings', {
			url: '/data-services-settings',
			parent: 'user',
			templateUrl: 'views/user/data-services-settings.htm'
		})
		.state('DeleteBucketOfDataServices', {
			url: '/delete-bucket-of-data-services',
			parent: 'user',
			templateUrl: 'views/user/delete-bucket-of-data-services.htm'
		})
		.state('Orders', {
			url: '/orders',
			parent: 'user',
			templateUrl: 'views/user/my-orders.htm'
		})
		.state('MyOrders', {
			url: '/my-orders',
			parent: 'serviceCatalog',// 'Orders',
			templateUrl: 'views/user/my-orders.htm'
		})
		.state('ScheduledOrders', {
			url: '/scheduled-orders',
			parent: 'serviceCatalog',// 'Orders',
			templateUrl: 'views/user/scheduled-orders.htm'
		})
		.state('AllOrders', {
			url: '/all-orders',
			parent: 'serviceCatalog',// 'Orders',
			templateUrl: 'views/user/all-orders.htm'
		})
		.state('Approvals', {
			url: '/approvals',
			parent: 'user',
			templateUrl: 'views/user/approvals.htm'
		})
		.state('userVolumes', {
			url: '/resources/volumes',
			parent: 'resources',
			templateUrl: 'views/user/resources-volumes.htm'
		})
		.state('userSnapshots', {
			url: '/resources/remove-block-snapshots',
			parent: 'resources',
			templateUrl: 'views/user/resources-block_snapshots.htm'
		})
		.state('userExportGroups', {
			url: '/resources/export-groups',
			parent: 'resources',
			templateUrl: 'views/user/resources-export-groups.htm'
		})
		.state('userFilesystems', {
			url: '/resources/filesystems',
			parent: 'resources',
			templateUrl: 'views/user/resources-file-systems.htm'
		})
		.state('userFilesnapshots', {
			url: '/resources/snapshots',
			parent: 'resources',
			templateUrl: 'views/user/resources-file-snapshots.htm'
		})
		.state('userProjects', {
			url: '/tenant-settings/projects',
			parent: 'tenantSettings',
			templateUrl: 'views/user/tenant-settings-projects.htm'
		})
		.state('userConsistency', {
			url: '/tenant-settings/consistency-groups',
			parent: 'tenantSettings',
			templateUrl: 'views/user/tenant-settings-consistency-groups.htm'
		})
		.state('userConsistency_create', {
			url: '/tenant-settings/consistency-groups/create/:consistencyGroupsId',
			parent: 'tenantSettings',
			templateUrl: 'views/user/tenant-settings-consistency-groups-create.htm'
		})
		.state('userConsistency_edit', {
			url: '/tenant-settings/consistency-groups/edit/:consistencyGroupsId',
			parent: 'tenantSettings',
			templateUrl: 'views/user/tenant-settings-consistency-groups-edit.htm'
		})
		.state('userExecutionWindows', {
			url: '/tenant-settings/execution-windows',
			parent: 'tenantSettings',
			templateUrl: 'views/user/tenant-settings-execution-window.htm'
		})
		.state('userApprovalSettings', {
			url: '/tenant-settings/approval-settings',
			parent: 'tenantSettings',
			templateUrl: 'views/user/tenant-settings-approval-settings.htm'
		});

}]);
