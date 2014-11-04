var ViPRnav = [
	{
		userType: "admin",
		nav: [
		{
			"id": "Dashboard",
			"name": "Dashboards",
			"iconClass": "icon vipricon-dashboard",
			"iconURL": "icons/svg/Dashboard.svg",
			"kids": [
			{
				"id": "adminDashboard",
				"name": "Dashboard"
			},
			{
				"id": "SystemHealth",
				"name": "System Health"
			},
			{
				"id": "logs",
				"name": "Logs"
			},
			{
				"id": "auditLogs",
				"name": "Audit Log"
			}
			]
		},
		{
			"id": "physicalAssets",
			"name": "Physical Assets",
			"iconClass": "icon vipricon-physicalassets",
			"iconURL": "icons/svg/Report.svg",
			"kids": [
			{
				"id": "CommodityNodes",
				"name": "Commodity Nodes"
			},
			{
				"id": "storageSystems",
				"name": "Storage Systems"
			},
			{
				"id": "providers",
				"name": "Storage Providers"
			},
			{
				"id": "dps",
				"name": "Data Protection Systems"
			},
			{
				"id": "fabric",
				"name": "Fabric Managers"
			},
			{
				"id": "networks",
				"name": "Networks",
				"divider":true
			},
			{
				"id": "hosts",
				"name": "Hosts"
			},
			{
				"id": "clusters",
				"name": "Clusters"
			},
			{
				"id": "vCenters",
				"name": "vCenters"
			}
			]
		},
		{
			"id": "virtualAssets",
			"name": "Virtual Assets",
			"iconClass": "icon vipricon-virtualassets",
			"iconURL": "icons/svg/Operations.svg",
			"kids": [
			{
				"id": "virtualArrays",
				"name": "Virtual Arrays",
				"divider":true
			},
			{
				"id": "blockVirtualPools",
				"name": "Block Virtual Pools"
			},
			{
				"id": "fileVirtualPools",
				"name": "File Virtual Pools"
			},
			{
				"id": "ObjectVirtualPools",
				"name": "Object Virtual Pools",
				"divider":true
			},
			{
				"id": "dataStores",
				"name": "Data Stores"
			},
			{
				"id": "VirtualCASClusters",
				"name": "Virtual CAS Clusters"
			},
			{
				"id": "VirtualDataCenters",
				"name": "Virtual Data Centers"
			}
			]
		},
		{
			"id": "serviceCatalog",
			"name": "Service Catalog",
			"iconClass": "icon vipricon-catalog",
			"iconURL": "icons/svg/Discovery.svg",
			"kids": [
			{
				"id": "userDashboard",
				"name": "Recently Used",
				"divider":true
			},
			{
				"id": "catalog",
				"name": "View Catalog"
			},
			{
				"id": "catalogEdit",
				"name": "Edit Catalog",
				"divider":true
			},
			{
				"id": "MyOrders",
				"name": "My Orders"
			},
			{
				"id": "AllOrders",
				"name": "All Orders"
			},
			{
				"id": "ScheduledOrders",
				"name": "Scheduled Orders"
			}
			]
		},
		{
			"id": "resources",
			"name": "Resources",
			"iconClass": "icon vipricon-resources",
			"iconURL": "icons/svg/resources.svg",
			"kids": [
			{
				"id": "userVolumes",
				"name": "Volumes"
			},
			{
				"id": "userSnapshots",
				"name": "Block Snapshots"
			},
			{
				"id": "userExportGroups",
				"name": "Export Groups",
				"divider":true
			},
			{
				"id": "userFilesystems",
				"name": "File Systems"
			},
			{
				"id": "userFilesnapshots",
				"name": "File Snapshots"
			}
			]
		},
		{
			"id": "tenantSettings",
			"name": "Tenant Settings",
			"iconClass": "icon vipricon-tenant",
			"iconURL": "icons/svg/Admin.svg",
			"kids": [
			{
				"id": "tenants",
				"name": "Tenants",
				"divider":true
			},
			{
				"id": "userProjects",
				"name": "Projects"
			},
			{
				"id": "userConsistency",
				"name": "Consistency Groups",
				"divider":true
			},
			{
				"id": "userExecutionWindows",
				"name": "Execution Windows"
			},
			{
				"id": "userApprovalSettings",
				"name": "Approval Settings"
			}
			]
		},
		{
			"id": "security",
			"name": "Security",
			"iconClass": "icon vipricon-security",
			"iconURL": "icons/svg/Admin.svg",
			"kids": [
			{
				"id": "rolesAssignments",
				"name": "VDC Role Assignments"
			},
			{
				"id": "authenticationProviders",
				"name": "Authentication Providers"
			},
			{
				"id": "passwords",
				"name": "Local Passwords"
			}
			]
		},
		{
			"id": "settings",
			"name": "Settings",
			"iconClass": "icon vipricon-settings",
			"iconURL": "icons/svg/Admin.svg",
			"kids": [
			{
				"id": "config",
				"name": "Configuration",
				"divider":true
			},
			{
				"id": "dataServicesNodes",
				"name": "Data Services Nodes"
			},
			{
				"id": "urls",
				"name": "Object Base URLs",
				"divider":true
			},
			{
				"id": "upgrade",
				"name": "Upgrade"
			},
			{
				"id": "license",
				"name": "License"
			},
			{
				"id": "support",
				"name": "Support Request"
			}
			]
		}
		]
	},
	{
		userType: "user",
		nav: [
		{
			"id": "userDashboard",
			"name": "Home",
			"iconClass": "icon vipricon-home",
			"iconURL": "icons/svg/Home.svg"
		},
		{
			"id": "catalog",
			"name": "Catalog",
			"iconClass": "icon vipricon-catalog",
			"iconURL": "icons/svg/catalog.svg"
		},
		{
			"id": "Orders",
			"name": "Orders",
			"iconClass": "icon vipricon-orders",
			"iconURL": "icons/svg/orders.svg",
			"kids": [
			{
				"id": "MyOrders",
				"name": "My Orders"
			},
			{
				"id": "AllOrders",
				"name": "All Orders"
			},
			{
				"id": "ScheduledOrders",
				"name": "Scheduled Orders"
			},
			{
				"id": "Approvals",
				"name": "Approvals"
			}
			]
		},
		{
			"id": "user.resources",
			"name": "Resources",
			"iconClass": "icon vipricon-resources",
			"iconURL": "icons/svg/resources.svg",
			"kids": [
			{
				"id": "user.volumes",
				"name": "Volumes"
			},
			{
				"id": "user.snapshots",
				"name": "Block Snapshots"
			},
			{
				"id": "user.exportgroups",
				"name": "Export Groups",
				"divider":true
			},
			{
				"id": "user.filesystems",
				"name": "File Systems"
			},
			{
				"id": "user.filesnapshots",
				"name": "File Snapshots"
			}
			]
		},
		{
			"id": "user.tenant",
			"name": "Tenant Settings",
			"iconClass": "icon vipricon-tenant",
			"iconURL": "icons/svg/tenant.svg",
			"kids": [
			{
				"id": "user.projects",
				"name": "Projects"
			},
			{
				"id": "user.consistency",
				"name": "Consistency Groups",
				"divider":true
			},
			{
				"id": "user.executionwindows",
				"name": "Execution Windows"
			},
			{
				"id": "user.approvalsettings",
				"name": "Approval Settings"
			}
			]
		}
		]
	}
];
