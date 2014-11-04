// We will not use VIPRJSON[0]
// VIPRJSON[1] is for vdc1 and VIPRJSON[2] for vdc2, etc...
var VIPRJSON = [{},{},{}];

VIPRJSON[1].vdc = {
	"id": 1,
	"name": "vdc1",
	"description": "vdc1",
	"virtualIP": "192.168.19.171",
	"local": true
};

VIPRJSON[1].consistencyGroups = [
	{
		"id": 0,
		"name": "CG1"
	},
	{
		"id": 1,
		"name": "CG2"
	}
];

VIPRJSON[1].commodityNodes = [
	{
		"id": 0,
		"name": "sandy-boston",
		"capacity": 29.3,
		"management": {
			"FQName": "sandy-boston.ecs.demo",
			"IPv4": "192.168.19.126",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab6"
		},
		"data": {
			"FQName": "sandy-boston.ecs.demo",
			"IPv4": "192.168.19.126",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab6"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	},
	{
		"id": 1,
		"name": "ogden-boston",
		"capacity": 29.3,
		"management": {
			"FQName": "ogden-boston.ecs.demo",
			"IPv4": "192.168.19.127",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab7"
		},
		"data": {
			"FQName": "ogden-boston.ecs.demo",
			"IPv4": "192.168.19.127",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab7"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	},
	{
		"id": 2,
		"name": "orem-boston",
		"capacity": 29.3,
		"management": {
			"FQName": "orem-boston.ecs.demo",
			"IPv4": "192.168.19.128",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab8"
		},
		"data": {
			"FQName": "orem-boston.ecs.demo",
			"IPv4": "192.168.19.128",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab8"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	},
	{
		"id": 3,
		"name": "provo-boston",
		"capacity": 29.3,
		"management": {
			"FQName": "provo-boston.ecs.demo",
			"IPv4": "192.168.19.129",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab9"
		},
		"data": {
			"FQName": "provo-boston.ecs.demo",
			"IPv4": "192.168.19.129",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab9"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	}
];

VIPRJSON[1].storageProviders = [
	{
		"id": 0,
		"name": "lglap095",
		"host": "lglap095.lss.emc.com",
		"type": "Hitachi HiCommand",
		"status": true,
		"manage": true,
		"version": "7.6.1",
		"storageSystem": "HUS VM@10.247.55.186, VSP@10.247.55.244"
	},
	{
		"id": 1,
		"name": "lglba178",
		"host": "lglba178.lss.emc.com",
		"type": "SMI-S",
		"status": true,
		"manage": false,
		"version": "V4.6.1.3",
		"storageSystem": ""
	},
	{
		"id": 2,
		"name": "lppa010",
		"host": "lppa010.lss.emc.com",
		"type": "VPLEX",
		"status": true,
		"manage": false,
		"version": "5.2.1.02.00.03",
		"storageSystem": "VPLEX+FNM00133900454:FNM00134400075"
	},
	{
		"id": 3,
		"name": "lppa011",
		"host": "lppa011.lss.emc.com",
		"type": "VPLEX",
		"status": true,
		"manage": false,
		"version": "5.2.1.02.00.03",
		"storageSystem": "VPLEX+FNM00133900454:FNM00134400075"
	},
	{
		"id": 4,
		"name": "lppa015",
		"host": "lppa015.lss.emc.com",
		"type": "Block Storage Powered by ScaleIO",
		"status": true,
		"manage": false,
		"version": "1.21.0.20",
		"storageSystem": "SCALEIO+186b25384a332+Domain1"
	},
	{
		"id": 5,
		"name": "lppa019",
		"host": "lppa019.lss.emc.com",
		"type": "Third-party block",
		"status": true,
		"manage": false,
		"version": "-",
		"storageSystem": "DEFAULT_emc_vipr_fc+10783488196"
	},
	{
		"id": 6,
		"name": "lppa046",
		"host": "lppa046.lss.emc.com",
		"type": "SMI-S",
		"status": true,
		"manage": false,
		"version": "V4.6.2.3",
		"storageSystem": "CLARIION+APM00140431582, SYMMETRIX+000195700999"
	}
];

VIPRJSON[1].dataProtectionSystems = [
	{
		"id": 0,
		"name": "RecoverPoint",
		"host": "recoverpoint.vlab.local",
		"type": "EMC RecoverPoint",
		"version": "4.0.SP2.P1(m.29)",
		"pairing": "None",
		"lastDiscovery": "an hour ago",
		"lastSuccessfulDiscovery": "an hour ago",
		"discoveryStatus": "Completed",
		"compatibilityStatus": "Compatible"
	}
];

VIPRJSON[1].fabricManagers = [
	{
		"id": 0,
		"name": "Cisco-MDS- Fabric Manager",
		"host": "cisco-mds.vlab.local",
		"type": "Cisco MDS",
		"status": true,
		"registered": true,
		"version": "5.0(1a)",
		"uptime": "15 days, 9 hours, 28 minutes, 14 seconds"
	}
];

VIPRJSON[1].networks = [
	{
		"id": 0,
		"name": "ScaleIONetwork",
		"type": "ScaleIO",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 1,
		"name": "IP-Network",
		"type": "IP",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 2,
		"name": "iSCSI-Network",
		"type": "IP",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 3,
		"name": "VSAN_11",
		"type": "FibreChannel",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 4,
		"name": "VSAN_12",
		"type": "FibreChannel",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	}
];

VIPRJSON[1].hosts = [
	{
		"id": 0,
		"name": "192.168.1.180",
		"host": "192.168.1.180",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 1,
		"name": "192.168.1.181",
		"host": "192.168.1.181",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 2,
		"name": "192.168.1.182",
		"host": "192.168.1.182",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 3,
		"name": "Hyper-V-Cluster-vLab.local",
		"host": "hyper-v.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 4,
		"name": "iSCSI-Host",
		"host": "lp01.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 5,
		"name": "NFS-Host",
		"host": "192.168.1.120",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 6,
		"name": "RainPole Datacenters/esx01.vlab.local",
		"host": "esx01.vlab.local",
		"operatingSystem": "Esx",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 7,
		"name": "RainPole Datacenters/esx02.vlab.local",
		"host": "esx02.vlab.local",
		"operatingSystem": "Esx",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 8,
		"name": "WinHost1",
		"host": "winhost1.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 9,
		"name": "WinHost2",
		"host": "winhost2.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	}
];

VIPRJSON[1].clusters = [
	{
		"id": 0,
		"name": "Hyper-V-Cluster-vLab.local",
		"discovered": 1,
		"vcenter": "",
		"datacenter": [
			{
				"id": "",
				"name": ""
			}
		],
		"hosts": [
			{
				"id": "",
				"name": ""
			}
		]
	},
	{
		"id": 1,
		"name": "RainPole Cçister [RainPole Datacenter]",
		"discovered": 0,
		"vcenter": "vCenter",
		"datacenter": [
			{
				"id": "1",
				"host": "RainPole Datacenter"
			}
		],
		"hosts": [
			{
				"id": 5,
				"host": "esx01.vlab.local"
			},
			{
				"id": 6,
				"host": "esx02.vlab.local"
			}
		]
	},
	{
		"id": 2,
		"name": "ws_cluster",
		"discovered": 0,
		"hosts": [
			{
				"id": "8",
				"host": "Winhost2"
			}
		]
	}
];

VIPRJSON[1].VMwarevCenter = [
{
    "id": 0,
    "name": "vCenter",
    "host": "vc01.vlab.local",
    "version": "5.5.0",
    "datacenters": "RainPole Datacenter",
    "lastDiscovery": "13 hours ago",
    "lastSuccessfulDiscovery": "13 hours ago",
    "discoveryStatus": "Completed",
    "compatibilityStatus": "Compatible"
}
];

VIPRJSON[1].virtualArrays = [
	{
		"id": 0,
		"name": "CommodityvPool_vdc1",
		"protectionBlock": "None",
		"protectionObject": "UnProtected",
		"protocols": "None",
		"systemTypes": "None",
		"raidLevels": "None",
		"driveTypes": "None",
		"hasCommodity": true
	},
	{
		"id": 1,
		"name": "VA-File",
		"protectionBlock": "None",
		"protectionObject": "None",
		"protocols": "CIFS, NFS",
		"systemTypes": "EMC Isilon, NetApp, EMC VNX",
		"raidLevels": "RAID1, RAID5",
		"driveTypes": "Near Line Serial Attached SCSI, Serial Attached SCSI, Solid State Drive"		
	},
	{
		"id": 2,
		"name": "VA-Block",
		"protectionBlock": "VMAX SRDF ( VSA-Block )",
		"protectionObject": "None",
		"protocols": "FC, iSCSI",
		"systemTypes": "EMC VMAX, EMC VNX Block",
		"raidLevels": "RAID1, RAID5",
		"driveTypes": "Near Line Serial Attached SCSI, Serial Attached SCSI, Solid State Drive"
	},
	{
		"id": 3,
		"name": "Boston (cs)",
		"protectionBlock": "EMC RecoverPoint ( Boston (cs), Hopkinton (br), Santa Clara (hds) ) VMAX SRDF ( Hopkinton (br) ) EMC VPLEX ( Boston (cs), Hopkinton (br) )",
		"protectionObject": "Protected",
		"protocols": "CIFS, FC, NFS, iSCSI",
		"systemTypes": "EMC Isilon, NetApp, EMC VMAX, EMC VNX Block, EMC VNX File",
		"raidLevels": "RAID1, RAID5, RAID6",
		"driveTypes": "Fibre Channel, Near Line Serial Attached SCSI, Serial Attached SCSI, Serial ATA, Solid State Drive"
	},
	{
		"id": 4,
		"name": "Hopkinton (br)",
		"protectionBlock": "EMC RecoverPoint ( Boston (cs), Hopkinton (br), Santa Clara (hds) ) VMAX SRDF ( Boston (cs), Hopkinton (br) ) EMC VPLEX ( Boston (cs), Hopkinton (br) )",
		"protectionObject": "Protected",
		"protocols": "CIFS, FC, NFS, ScaleIO, iSCSI",
		"systemTypes": "EMC Isilon, NetApp, Block Storage Powered by ScaleIO, EMC VMAX, EMC VNX Block, EMC VNX File",
		"raidLevels": "RAID1, RAID5, RAID6",
		"driveTypes": "Fibre Channel, Near Line Serial Attached SCSI, Serial Attached SCSI, Serial ATA, Solid State Drive"
	},
	{
		"id": 5,
		"name": "Santa Clara (hds)",
		"protectionBlock": "EMC RecoverPoint ( Boston (cs), Hopkinton (br), Santa Clara (hds) )",
		"protectionObject": "None",
		"protocols": "FC",
		"systemTypes": "Hitachi, EMC VMAX",
		"raidLevels": "RAID1, RAID5, RAID6",
		"driveTypes": "Fibre Channel, Serial ATA, Solid State Drive"
	}
];

VIPRJSON[1].blockVirtualPools = [
	{
		"id": 0, 
		"name": "Base_Block_Pool",
		"desc": "Base Block Virtual Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "10",
		"resources": "3"
	},
	{
		"id": 1, 
		"name": "High_Performance_Block_Pool",
		"desc": "High Performance Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "5",
		"resources": "1"
	},
	{
		"id": 2, 
		"name": "iSCSI_Block_Pool",
		"desc": "iSCSI Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "iSCSI",
		"pools": "2",
		"resources": "0"
	},
	{
		"id": 3, 
		"name": "ScaleIO-Pool",
		"desc": "ScaleIO-Pool",
		"provisioning": "thin",
		"assignment": "manual",
		"protocols": "ScaleIO",
		"pools": "1",
		"resources": "1"
	},
	{
		"id": 4, 
		"name": "SRDF_Protected_Block_Pool",
		"desc": "SRDF Protected Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "2",
		"resources": "0"
	},
	{
		"id": 5, 
		"name": "VPLEX_Virtual_Pool",
		"desc": "VPLEX Protected Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "10",
		"resources": "0"
	}
];

VIPRJSON[1].fileVirtualPools = [
	{
		"id": 0,
		"name": "Isilon Storage",
		"desc": "Isilon smartpool",
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "NFS",
		"pools": "1",
		"resources": "4"
	},
	{
		"id": 1,
		"name": "Netapp Storage",
		"desc": "Netapp Storage",
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "CIFS, NFS",
		"pools": "1",
		"resources": "1"
	},
	{
		"id": 2,
		"name": "VNX File Storage",
		"desc": "VNX File Storage",
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "NFS",
		"pools": "1",
		"resources": "1"
	}
];

VIPRJSON[1].objectVirtualPools = [
	{
		"id": 0,
		"name": "GlobalObjPool1",
		"description": "GlobalObjPool1",
		"virtualArrays": [
			{
				"vdc": 1,
				"virtualArray": 0
			},
			{
				"vdc": 2,
				"virtualArray": 0
			}
		]
	},
	{
		"id": 1,
		"name": "GlobalObjPool2",
		"description": "GlobalObjPool2",
		"virtualArrays": [
			{
				"vdc": 1,
				"virtualArray": 0
			},
			{
				"vdc": 2,
				"virtualArray": 0
			}
		]
	}
	// {
	// 	"id": 2,
	// 	"name": "GlobalObjPool3",
	// 	"description": "GlobalObjPool3",
	// 	"virtualArrays": [
	// 		{
	// 			"vdc": 1,
	// 			"virtualArray": 0
	// 		}
	// 	]
	// }
];

VIPRJSON[1].orderTypes = [
	{
		"id": 0,
		"title": "Create Block Volume for a Host",
		"summary": "Create block volume and export it for a host",
		"iconURL": "icon_array_host_add.png",
		"status": 1,
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"host": 1,
			"virtualArray": 2,
			"virtualPool": 3,
			"name": 5,
			"size": 8
		},
		"uiref": "CreateBlockVolumeforaHost"
	},
	{
		"id": 1,
		"title": "Remove Volume by Host",
		"summary": "Removes an unmounted block volume assigned to a host and all of its exports. The volume will no longer be available from any host.",
		"iconURL": "icon_array_host_remove.png",
		"precheckSteps": 3,
		"executionSteps": 5,
		"action": "delete",
		"resource": "volume",
		"resources": {
			"host": 0,
			"volumes": 1
		},
		"status": -1
	},
	{
		"id": 2,
		"title": "Create Block Volume",
		"summary": "Create a block volume",
		"iconURL": "icon_db_create.png",
		"status": 1,
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"virtualArray": 0,
			"virtualPool": 1,
			"name": 3,
			"size": 6
		},
		"status": 1,
		"uiref": "CreateBlockVolume"
	},
	{
		"id": 3,
		"title": "Remove Block Volumes",
		"summary": "Removes block volumes and related exports.",
		"iconURL": "icon_db_remove.png",
		"precheckSteps": 3,
		"executionSteps": 5,
		"action": "delete",
		"resource": "volume",
		"resources": {
			"volumes": 1
		},
		"status": -1
	},
	{
		"id": 4,
		"title": "Expand Block Volume",
		"summary": "Expand storage on a block volume.",
		"iconURL": "icon_host_add.png",
		"action": "update",
		"resource": "volume",
		"resources": {
			"volume": 1
		},
		"status": 1
	},
	{
		"id": 5,
		"title": "Export Volume to a Host",
		"summary": "Export a block volume to a host",
		"iconURL": "icon_host_add.png",
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "exportGroups",
		"resources": {
			"host": 1,
			"volumes": 3
		},
		"uiref": "ExportVolumeToAHost"
	},
	{
		"id": 6,
		"title": "Export VPLEX Volume",
		"summary": "Export a VPLEX volume to a host or cluster",
		"iconURL": "icon_host_add.png",
		"status": 1
	},
	{
		"id": 7,
		"title": "Unexport Volume",
		"summary": "Remove a volume from an export. The volume will still be accessible using another export.",
		"iconURL": "icon_host_remove.png",
		"action": "delete",
		"resource": "exportGroups",
		"resources": {
			"volume": 1,
			"exportGroup": 2
		},
		"status": -1,
		"uiref": "UnexportVolume"
	},
	{
		"id": 8,
		"title": "Discover Unmanaged Volumes",
		"summary": "Discovers volumes on arrays that were not created by ViPR",
		"iconURL": "Service_Discover_Unmanaged_Volumes.png",
		"status": 1
	},
	{
		"id": 9,
		"title": "Ingest Unmanaged Volumes",
		"summary": "Import unmanaged volumes to bring them under management of ViPR",
		"iconURL": "Service_Ingest_Unmanaged_Volumes.png",
		"status": 1
	},
	{
		"id": 10,
		"title": "Change Volume Virtual Pool",
		"summary": "Move a volume from one virtual pool to another",
		"iconURL": "icon_host_add.png",
		"status": 1
	},
	{
		"id": 11,
		"title": "Change Virtual Pool",
		"summary": "Move a set of volumes from one virtual pool to another",
		"iconURL": "icon_host_add.png",
		"action": "update",
		"resource": "volume",
		"resources": {
			"volume": 1
		},
		"status": 1
	},
	{
		"id": 12,
		"title": "Change Virtual Array",
		"summary": "Move a VPLEX local volume to a different virtual array (virtual arrays must have connectivity via VPLEX)",
		"iconURL": "Service_Change_Virtual_Array.png",
		"status": 1
	},
	{
		"id": 13,
		"title": "Failover block volume",
		"summary": "Perform a Disaster Recovery Failover operation using RecoverPoint or VMAX SRDF",
		"iconURL": "Service_Failover_Block_Volume.png",
		"status": 1
	},
	{
		"id": 14,
		"title": "Swap Continuous Copies",
		"summary": "Swap Failover Copies using RecoverPoint or VMAX SRDF",
		"iconURL": "Remove_Continuous_copy.png",
		"status": -1
	},
	{
		"id": 15,
		"title": "Create Block Snapshot",
		"summary": "Create block snapshot for a volume",
		"iconURL": "Service_Create_Block_Snapshot.png",
		"status": 1
	},
	{
		"id": 16,
		"title": "Restore Block Snapshot",
		"summary": "Restore block snapshot to a volume",
		"iconURL": "Service_Restore_Block_Snapshot.png",
		"status": 1
	},
	{
		"id": 17,
		"title": "Remove Block Snapshot",
		"summary": "Remove block snapshot",
		"iconURL": "Service_Remove_Block_Snapshot.png",
		"status": -1
	},
	{
		"id": 18,
		"title": "Create Full Copy",
		"summary": "Create a full copy of a volume",
		"iconURL": "Service_Create_Full_Copy.png",
		"status": 1
	},
	{
		"id": 19,
		"title": "Remove Full Copy",
		"summary": "Remove a full copy of a volume",
		"iconURL": "Service_Remove_Full_Copy.png",
		"status": -1
	},
	{
		"id": 20,
		"title": "Create Snapshot Full Copy",
		"summary": "Create a full copy of a snapshot",
		"iconURL": "Service_Create_Snapshot_Full_Copy.png",
		"status": 1
	},
	{
		"id": 21,
		"title": "Create Continuous Copy",
		"summary": "Create a continuous copy of a volume",
		"iconURL": "Service_Create_Continuous_Copy.png",
		"status": 1
	},
	{
		"id": 22,
		"title": "Remove Continuous Copy",
		"summary": "Remove a continuous copy of a volume",
		"iconURL": "Remove_Continuous_copy.png",
		"status": -1
	},
	{
		"id": 23,
		"title": "Export Snapshot to a Host",
		"summary": "Export a snapshot of a block volume to a host",
		"iconURL": "icon_host_add_snapshot.png",
		"status": 1
	},
	{
		"id": 24,
		"title": "Unexport Snapshot",
		"summary": "Remove a volume snapshot from an export. The volume will still be accessible using another export.",
		"iconURL": "icon_host_remove_snapshot.png",
		"status": -1
	},
	{
		"id": 25,
		"title": "Create Windows Share",
		"summary": "Create new file system and CIFS share",
		"iconURL": "icon_folder_CIFS_add.png",
		"action": "create",
		"resource": "fileSystems",
		"resources": {
			"name": 3,
			"size": 5,
			"virtualArray": 0,
			"virtualPool": 1,
			"project": 2
		},
		"status": 1,
		"uiref": "CreateWindowsShare"
	},
	{
		"id": 26,
		"title": "Create Unix Share",
		"summary": "Create new file system and NFS export",
		"iconURL": "icon_folder_NFS_add.png",
		"action": "create",
		"resource": "fileSystems",
		"resources": {
			"name": 3,
			"size": 4,
			"virtualArray": 0,
			"virtualPool": 1,
			"project": 2,
			"hosts": 6
		},
		"status": 1,
		"uiref": "CreateUnixShare"
	},
	{
		"id": 27,
		"title": "Expand File System",
		"summary": "Expand a file system",
		"iconURL": "icon_NASstorage_expand.png",
		"action": "update",
		"resource": "fileSystems",
		"resources": {
			"name": 1,
			"size": 2,
			"project": 0
		},
		"status": 1,
		"uiref": "ExpandFileSystem"
	},
	{
		"id": 28,
		"title": "Remove File System",
		"summary": "Remove a file system",
		"iconURL": "icon_NASstorage_remove.png",
		"action": "delete",
		"resource": "fileSystems",
		"resources": {
			"fileSystems": 1
		},
		"status": -1,
		"uiref": "RemoveFileSystem"
	},
	{
		"id": 29,
		"title": "Discover Unmanaged File Systems",
		"summary": "Discovers file systems on arrays that were not created by ViPR",
		"iconURL": "Service_Discover_Unmanaged_Filesystems.png",
		"status": 1
	},
	{
		"id": 30,
		"title": "Ingest Unmanaged File Systems",
		"summary": "Import unmanaged file systems to bring them under management of ViPR",
		"iconURL": "Service_Ingest_Unmanaged_Filesystems.png",
		"status": 1
	},
	{
		"id": 31,
		"title": "Create File Snapshot",
		"summary": "Create file snapshot for a file system",
		"iconURL": "Service_Create_File_Snapshot.png",
		"status": 1
	},
	{
		"id": 32,
		"title": "Restore File Snapshot",
		"summary": "Restore file snapshot to a file system",
		"iconURL": "Service_Restore_File_Snapshot.png",
		"status": 1
	},
	{
		"id": 33,
		"title": "Remove File Snapshot",
		"summary": "Remove file snapshot",
		"iconURL": "Service_Remove_File_Snapshot.png",
		"status": -1
	},
	{
		"id": 34,
		"title": "Create and Mount Block Volume",
		"summary": "Create, mount and format a block volume on a Linux host.",
		"iconURL": "icon_provision_linux_add.png",
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"host": 0,
			"virtualArray": 1,
			"virtualPool": 2,
			"name": 4,
			"size": 6
		},
		"status": 1,
		"uiref": "CreateandMountBlockVolume"
	},
	{
		"id": 35,
		"title": "Unmount and Delete Volume",
		"summary": "Unmount and delete block volume from a Linux host.",
		"iconURL": "icon_provision_linux_remove.png",
		"action": "delete",
		"resource": "volume",
		"resources": {
			"host": 0,
			"volumes": 1
		},
		"status": -1,
		"uiref": "UnmountandDeleteVolume"
	},
	{
		"id": 36,
		"title": "Mount Existing Volume on Linux",
		"summary": "Mount and format a previously created block volume on a Linux host.",
		"iconURL": "icon_storage_linux_add.png",
		"status": 1
	},
	{
		"id": 37,
		"title": "Unmount Volume on Linux",
		"summary": "Unmount a block volume from a Linux host leaving storage intact.",
		"iconURL": "icon_storage_linux_remove.png",
		"action": "update",
		"resource": "volume",
		"resources": {
			"volume": 1
		},
		"status": 1
	},
	{
		"id": 38,
		"title": "Expand Linux Mount",
		"summary": "Expand a Linux host by expanding a mounted block volume.",
		"iconURL": "icon_storage_linux_expand.png",
		"status": 1
	},
	{
		"id": 39,
		"title": "Create and Mount Volume",
		"summary": "Create, mount and format a block volume on a Windows host.",
		"iconURL": "icon_provision_windows_add.png",
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"host": 1,
			"virtualArray": 3,
			"virtualPool": 3,
			"name": 5,
			"size": 7
		},
		"status": 1,
		"uiref": "CreateandMountVolumeonWindows"
	},
	{
		"id": 40,
		"title": "Unmount and Delete Volume",
		"summary": "Unmount and delete block volume from a Windows host.",
		"iconURL": "icon_provision_windows_remove.png",
		"action": "delete",
		"resource": "volume",
		"resources": {
			"host": 1,
			"volumes": 2
		},
		"status": 1,
		"uiref": "UnmountandDeleteVolumeonWindows"
	},
	{
		"id": 41,
		"title": "Expand Volume on Windows",
		"summary": "Expand a block volume mounted on a Windows host.",
		"iconURL": "icon_storage_windows_expand.png",
		"action": "update",
		"resource": "volume",
		"resources": {
			"volume": 2
		},
		"status": 1
	},
	{
		"id": 42,
		"title": "Mount Volume on Windows",
		"summary": "Mount and format a previously created block volume on a Windows host.",
		"iconURL": "icon_storage_windows_add.png",
		"status": 1
	},
	{
		"id": 43,
		"title": "Unmount Volume on Windows",
		"summary": "Unmount a block volume from a Windows host leaving storage intact.",
		"iconURL": "icon_storage_windows_remove.png",
		"status": -1
	},
	{
		"id": 44,
		"title": "Create Volume and Datastore",
		"summary": "Create block volume and VMware Datastore.",
		"iconURL": "icon_provision_VMware_add.png",
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"host": 4,
			"virtualArray": 5,
			"virtualPool": 6,
			"name": 8,
			"size": 10
		},
		"status": 1,
		"uiref": "CreateVolumeandDatastore"
	},
	{
		"id": 45,
		"title": "Delete Datastore and Volume",
		"summary": "Delete a VMware Datastore and block volume.",
		"iconURL": "icon_provision_VMware_remove.png",
		"action": "delete",
		"resource": "volume",
		"resources": {
			"host": 1,
			"volumes": 2
		},
		"status": 1,
		"uiref": "UnmountandDeleteVolumeonWindows"
	},
	{
		"id": 46,
		"title": "Extend Datastore with New Volume",
		"summary": "Extend a VMware Datastore with a new block volume.",
		"iconURL": "icon_provision_VMware_expand.png",
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"host": 3,
			"virtualArray": 5,
			"virtualPool": 6,
			"name": 8,
			"size": 10
		},
		"status": 1,
		"uiref": "ExtendDatastorewithNewVolume"
	},
	{
		"id": 47,
		"title": "Create Volume for VMware",
		"summary": "Create a new block volume for VMware.",
		"iconURL": "icon_array_VMware_add.png",
		"precheckSteps": 1,
		"executionSteps": 4,
		"action": "create",
		"resource": "volume",
		"resources": {
			"host": 3,
			"virtualArray": 4,
			"virtualPool": 5,
			"name": 7,
			"size": 10
		},
		"status": 1,
		"uiref": "CreateVolumeforVMware"
	},
	{
		"id": 48,
		"title": "Remove Volume for VMware",
		"summary": "Remove block volume for VMware.",
		"iconURL": "icon_array_VMware_remove.png",
		"action": "delete",
		"resource": "volume",
		"resources": {
			"host": 3,
			"volumes": 4
		},
		"status": 1,
		"uiref": "RemoveVolumeforVMware"
	},
	{
		"id": 49,
		"title": "Create VMware Datastore",
		"summary": "Create a VMware Datastore with an existing block volume.",
		"iconURL": "icon_storage_VMware_add.png",
		"status": 1
	},
	{
		"id": 50,
		"title": "Delete VMware Datastore",
		"summary": "Delete a VMware Datastore leaving storage intact.",
		"iconURL": "icon_storage_VMware_remove.png",
		"status": -1
	},
	{
		"id": 51,
		"title": "Extend Datastore with Existing Volume",
		"summary": "Extend a VMware Datastore with an existing block volume.",
		"iconURL": "icon_storage_VMware_expand.png",
		"action": "update",
		"resource": "volume",
		"resources": {
			"volume": 5
		},
		"status": 1
	},
	{
		"id": 52,
		"title": "Create FileSystem and NFS Datastore",
		"summary": "Create VMware Datastore with newly provisioned FileSystem and NFS export",
		"iconURL": "icon_provision_vmware_nfs_add.png",
		"action": "create",
		"resource": "fileSystems",
		"resources": {
			"name": 8,
			"size": 9,
			"virtualArray": 5,
			"virtualPool": 6,
			"project": 7,
			"hosts": 10
		},
		"status": 1,
		"uiref": "CreateFilesystemaAndNfsDatastore"
	},
	{
		"id": 53,
		"title": "Create VMware NFS Datastore",
		"summary": "Create a VMware Datastore using existing NFS storage",
		"iconURL": "icon_storage_VMware_add.png",
		"status": 1
	},
	{
		"id": 54,
		"title": "Delete NFS Datastore and FileSystem",
		"summary": "Delete a VMware Datastore and associated file system and NFS export",
		"iconURL": "icon_provision_vmware_nfs_remove.png",
		"action": "delete",
		"resource": "fileSystems",
		"resources": {
			"fileSystems": 1
		},
		"status": -1,
		"uiref": "DeleteNfsDatastoreAndFilesystem"
	},
	{
		"id": 55,
		"title": "Delete VMware NFS Datastore",
		"summary": "Delete a VMware NFS Datastore leaving the associated storage intact",
		"iconURL": "icon_storage_VMware_remove.png",
		"status": -1
	},
	{
		"id": 56,
		"title": "Create Bucket for Data Services",
		"summary": "Creates a new bucket for Data Services",
		"iconURL": "icon_create_bucket.png",
		"status": 1
	},
	{
		"id": 57,
		"title": "Delete Bucket of Data Services",
		"summary": "Delete a bucket from Data Services",
		"iconURL": "icon_delete_bucket.png",
		"status": 1
	},
	{
		"id": 58,
		"title": "Ingest File Systems",
		"summary": "Ingest data from a file share into an existing bucket",
		"iconURL": "icon_ingest_filesystems.png",
		"status": 1
	}
];

VIPRJSON[2].orderTypes = VIPRJSON[1].orderTypes;

VIPRJSON[1].orders = [
	{
		"id":0,
		"date":"2014-10-07T20:07:21.110Z",
		"orderTypeId":0,
		"details":[
			{
				"name":"Storage Type:",
				"value":"Exclusive"
			},
			{
				"name":"Host:",
				"value":"WinHost1"
			},
			{
				"name":"Virtual Array:",
				"value":"VA-Block"
			},
			{
				"name":"Virtual Pool:",
				"value":"High_Performance_Block_Pool"
			},
			{
				"name":"Project:",
				"value":"Engineering"
			},
			{
				"name":"Name:",
				"value":"test-1"
			},
			{
				"name":"Consistency Group:"
			},
			{
				"name":"Number Of Volumes:",
				"value":"1"
			},
			{
				"name":"Size (GB):",
				"value":"20"
			},
			{
				"value":-1,
				"name":"HLU:"
			}
		]
	}
];

VIPRJSON[2].orders = [
	{
		"id": 0,
		"date": new Date(),
		"status": 1,// -1 = failure; 0 = in process; 1 = success
		"orderTypeId": 0,
		"details": {
			"storageType": "Exclusive",
			"host": "Windows Host Simulator 1",
			"virtualArray": "VSA-Block",
			"virtualPool": "VMAX#618 High Performance SSD",
			"project": "Provider Tenant Project",
			"name": "test-1",
			"size": 3
		}
	}
	// 	"history": [
	// 		{"size": 100},
	// 		{"size": 200},
	// 		{"virtualPool": "something else"}
	// 	]
	// },
	// {
	// 	"id": 1,
	// 	...
	// }
	// {
	// 	"id": 1,
	// 	"date": new Date(),
	// 	"orderTypeId": 4, // this is to UPDATE VOLUME
	// 	"details": {
	// 		"project": "Marketing",
	// 		"name": "test-1",
	// 		"volumeId": 0,
	// 		"size": 100
	// 	}
	// }
]; 

// VIPRJSON[1].resourceMap = {
// 	"volumes": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
// 	"blockSnapshots": [],
// 	"exportGroups": [],
// 	"fileSystems": [],
// 	"fileSnapshots": []
// };

// VIPRJSON[1].actionMap = {
// 	"create": [0, 2, 8, 9],
// 	"delete": [1, 3],
// 	"update": [4, 5, 6, 7, 10]
// }
VIPRJSON[1].exportGroups = [
	{
		"id": 0,
		"fromOrderId": 1,
		"name": "WinHost1",
		"virtualArrays": ["VA-Block"]
	},
	{
		"id": 1,
		"fromOrderId": 5,
		"name": "192.168.1.180",
		"virtualArrays": ["Boston (cs)"]
	},
	{
		"id": 2,
		"fromOrderId": 5,
		"name": "RainPole Datacenters/esx01.vlab.local",
		"virtualArrays": ["VA-Block"]
	}
];

VIPRJSON[1].volumes = [
	{
		"id": 0,
		"fromOrderId": 0,
		"name": "sapdb",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	},
	{
		"id": 1,
		"fromOrderId": 1,
		"name": "oracledb",
		"virtualArray": "Boston (cs)",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "192.168.1.180",
		"size": 3
	},
	{
		"id": 2,
		"fromOrderId": 2,
		"name": "mysqldb",
		"virtualArray": "RainPole Datacenters/esx01.vlab.local",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "RainPole Datacenters/esx01.vlab.local",
		"size": 3
	},
	{
		"id": 3,
		"fromOrderId": 3,
		"name": "rainpole",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	},
	{
		"id": 4,
		"fromOrderId": 4,
		"name": "testdev1",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	},
	{
		"id": 5,
		"fromOrderId": 4,
		"name": "testdev2",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	}
];

VIPRJSON[1].fileSystems = [
	{
		"id": 0,
		"name": "rainpolestore1",
		"size": "12.0",
		"virtualArray": 'VA-File',
		"virtualPool": 'High_Performance_File_Pool',
		"protocols": "NFS"
	},
	{
		"id": 1,
		"name": "share1",
		"size": "3.0",
		"virtualArray": 'Boston (cs)',
		"virtualPool": 'Low_Performance_File_Pool',
		"protocols": "CIFS"
	}
];

VIPRJSON[2].vdc = {
	"id": 2,
	"name": "vdc2",
	"description": "vdc2",
	"virtualIP": "192.168.19.178",
	"local": false
};

VIPRJSON[2].consistencyGroups = [
	{
		"id": 0,
		"name": "cg2_name_1"
	},
	{
		"id": 1,
		"name": "cg2_name_2"
	}
];

VIPRJSON[2].commodityNodes = [
	{
		"id": 0,
		"name": "sandy-newyork",
		"capacity": 29.3,
		"management": {
			"FQName": "sandy-newyork.ecs.demo",
			"IPv4": "192.168.19.136",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab6"
		},
		"data": {
			"FQName": "sandy-newyork.ecs.demo",
			"IPv4": "192.168.19.136",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab6"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	},
	{
		"id": 1,
		"name": "ogden-newyork",
		"capacity": 29.3,
		"management": {
			"FQName": "ogden-newyork.ecs.demo",
			"IPv4": "192.168.19.137",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab7"
		},
		"data": {
			"FQName": "ogden-newyork.ecs.demo",
			"IPv4": "192.168.19.137",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab7"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	},
	{
		"id": 2,
		"name": "orem-newyork",
		"capacity": 29.3,
		"management": {
			"FQName": "orem-newyork.ecs.demo",
			"IPv4": "192.168.19.138",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab8"
		},
		"data": {
			"FQName": "orem-newyork.ecs.demo",
			"IPv4": "192.168.19.138",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab8"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	},
	{
		"id": 3,
		"name": "provo-newyork",
		"capacity": 29.3,
		"management": {
			"FQName": "provo-newyork.ecs.demo",
			"IPv4": "192.168.19.139",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab9"
		},
		"data": {
			"FQName": "provo-newyork.ecs.demo",
			"IPv4": "192.168.19.139",
			"IPv6": "fe80:0:0:0:21e:67ff:fe9f:1ab9"
		},
		"disks": [
			{
				"name": "/dev/sda1",
				"capacity": 2
			},
			{
				"name": "/dev/sdb1",
				"capacity": 2
			},
			{
				"name": "/dev/sdc1",
				"capacity": 2
			},
			{
				"name": "/dev/sdd1",
				"capacity": 2
			},
			{
				"name": "/dev/sde1",
				"capacity": 2
			},
			{
				"name": "/dev/sdf1",
				"capacity": 2
			},
			{
				"name": "/dev/sdg1",
				"capacity": 2
			},
			{
				"name": "/dev/sdh1",
				"capacity": 2
			},
			{
				"name": "/dev/sdi1",
				"capacity": 2
			},
			{
				"name": "/dev/sdj1",
				"capacity": 2
			},
			{
				"name": "/dev/sdk1",
				"capacity": 2
			},
			{
				"name": "/dev/sdl1",
				"capacity": 2
			},
			{
				"name": "/dev/sdm1",
				"capacity": 2
			},
			{
				"name": "/dev/sdn1",
				"capacity": 2
			},
			{
				"name": "/dev/sdo1",
				"capacity": 2
			}
		]
	}
];

VIPRJSON[2].storageSystems = [
	{
		"id": 0,
		"name": "SYMMETRIX+000195700949",
		"registered": true,
		"host": "lglba144.lss.emc.com",
		"type": "EMC VMAX",
		"status": true,
		"pools": [],
		"ports": []
	},
	{
		"id": 1,
		"name": "SYMMETRIX+000195700949",
		"registered": true,
		"host": "lglba144.lss.emc.com",
		"type": "EMC VMAX",
		"status": true,
		"pools": [],
		"ports": []
	},
	{
		"id": 2,
		"name": "SYMMETRIX+000195700949",
		"registered": true,
		"host": "lglba144.lss.emc.com",
		"type": "EMC VMAX",
		"status": true,
		"pools": [],
		"ports": []
	}
];

VIPRJSON[2].dataProtectionSystems = [
	{
		"id": 0,
		"name": "RecoverPoint",
		"host": "recoverpoint.vlab.local",
		"type": "EMC RecoverPoint",
		"version": "4.0.SP2.P1(m.29)",
		"pairing": "None",
		"lastDiscovery": "an hour ago",
		"lastSuccessfulDiscovery": "an hour ago",
		"discoveryStatus": "Completed",
		"compatibilityStatus": "Compatible"
	}
];

VIPRJSON[2].storageProviders = [
	{
		"id": 0,
		"name": "ScaleIO-MDM-Provider",
		"host": "scaleio-mdm.vlab.local",
		"type": "Block Storage Powered by ScaleIO",
		"status": true,
		"manage": true,
		"version": "1.21.1.11",
		"storageSystem": " "
	},
	{
		"id": 1,
		"name": "SMI-S Provider",
		"host": "smi-s.vlab.local",
		"type": "SMI-S",
		"status": true,
		"manage": false,
		"version": "V4.6.1.1",
		"storageSystem": "CLARIION+APM12380127239, CLARIION+APM12391522735, CLARIION+APM12381623880, CLARIION+APM12346547795, CLARIION+APM00140431582, SYMMETRIX"
	},
	{
		"id": 2,
		"name": "VPLEX",
		"host": "vplex.vlab.local",
		"type": "VPLEX",
		"status": true,
		"manage": false,
		"version": "5.2.0.00.0.05",
		"storageSystem": "VPLEX+FNM0013090300:FNM00130900301"
	}
];

VIPRJSON[2].fabricManagers = [
	{
		"id": 0,
		"name": "Cisco-MDS- Fabric Manager",
		"host": "cisco-mds2.vlab.local",
		"type": "Cisco MDS",
		"status": true,
		"registered": true,
		"version": "5.0(1a)",
		"uptime": "15 days, 9 hours, 28 minutes, 14 seconds"
	}
];

VIPRJSON[2].networks = [
	{
		"id": 1,
		"name": "IP-Network",
		"type": "IP",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 2,
		"name": "iSCSI-Network",
		"type": "IP",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 3,
		"name": "VSAN_11",
		"type": "FibreChannel",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	},
	{
		"id": 4,
		"name": "VSAN_12",
		"type": "FibreChannel",
		"ports": [
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			},
			{
				"identifier": "",
				"ipAddress": "",
				"name": "",
				"storageSystem": "",
				"host": ""
			}
		]
	}
];

VIPRJSON[2].hosts = [
	{
		"id": 0,
		"name": "192.168.1.180",
		"host": "192.168.1.180",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 1,
		"name": "192.168.1.181",
		"host": "192.168.1.181",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 2,
		"name": "192.168.1.182",
		"host": "192.168.1.182",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 3,
		"name": "Hyper-V-Cluster-vLab.local",
		"host": "hyper-v.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 4,
		"name": "iSCSI-Host",
		"host": "lp01.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 4,
		"name": "NFS-Host",
		"host": "192.168.1.120",
		"operatingSystem": "Other",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 0
	},
	{
		"id": 5,
		"name": "RainPole Datacenters/esx01.vlab.local",
		"host": "esx01.vlab.local",
		"operatingSystem": "Esx",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 6,
		"name": "RainPole Datacenters/esx02.vlab.local",
		"host": "esx02.vlab.local",
		"operatingSystem": "Esx",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 7,
		"name": "WinHost1",
		"host": "winhost1.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	},
	{
		"id": 8,
		"name": "WinHost2",
		"host": "winhost2.vlab.local",
		"operatingSystem": "Windows",
		"initiators": [
			{
				"nodeName": "",
				"portName": "",
				"protocol": ""
			}
		],
		"status": 1,
		"discoverable": 1
	}
];

VIPRJSON[2].clusters = [
	{
		"id": 0,
		"name": "Hyper-V-Cluster-vLab.local",
		"discovered": 1,
		"vcenter": "",
		"datacenter": [
			{
				"id": "",
				"name": ""
			}
		],
		"hosts": [
			{
				"id": "",
				"name": ""
			}
		]
	},
	{
		"id": 1,
		"name": "RainPole Cluster [RainPole Datacenter]",
		"discovered": 0,
		"vcenter": "vCenter",
		"datacenter": [
			{
				"id": "1",
				"host": "RainPole Datacenter"
			}
		],
		"hosts": [
			{
				"id": 5,
				"host": "esx01.vlab.local"
			},
			{
				"id": 6,
				"host": "esx02.vlab.local"
			}
		]
	},
	{
		"id": 2,
		"name": "ws_cluster",
		"discovered": 0,
		"hosts": [
			{
				"id": "8",
				"host": "Winhost2"
			}
		]
	}
];

VIPRJSON[2].VMwarevCenter = [
	{
		"id": 0,
		"name": "vCenter",
		"host": "vc02.vlab.local",
		"version": "5.5.0",
		"datacenters": "RainPole Datacenter",
		"lastDiscovery": "13 hours ago",
		"lastSuccessfulDiscovery": "13 hours ago",
		"discoveryStatus": "Completed",
		"compatibilityStatus": "Compatible"
	}
];

VIPRJSON[2].virtualArrays = [
	{
		"id": 0,
		"name": "CommodityvPool_vdc2",
		"protectionBlock": "None",
		"protectionObject": "UnProtected",
		"protocols": "None",
		"systemTypes": "None",
		"raidLevels": "None",
		"driveTypes": "None",
		"hasCommodity": true
	},
	{
		"id": 1,
		"name": "VA-File",
		"protectionBlock": "None",
		"protectionObject": "None",
		"protocols": "CIFS, FC, NFS, iSCSI",
		"systemTypes": "EMC Isilon, NetApp, EMC VMAX, EMC VNX Block",
		"raidLevels": "RAID1, RAID5",
		"driveTypes": "Near Line Serial Attached SCSI, Serial Attached SCSI, Solid State Drive"		
	},
	{
		"id": 2,
		"name": "VA-Block",
		"protectionBlock": "VMAX SRDF ( VSA-Block )",
		"protectionObject": "None",
		"protocols": "FC, iSCSI",
		"systemTypes": "EMC VMAX, EMC VNX Block",
		"raidLevels": "RAID1, RAID5",
		"driveTypes": "Near Line Serial Attached SCSI, Serial Attached SCSI, Solid State Drive"
	}
];


VIPRJSON[2].blockVirtualPools = [
	{
		"id": 0, 
		"name": "Base_Block_Pool",
		"desc": "Base Block Virtual Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "10",
		"resources": "3"
	},
	{
		"id": 1, 
		"name": "High_Performance_Block_Pool",
		"desc": "High Performance Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "5",
		"resources": "1"
	},
	{
		"id": 2, 
		"name": "iSCSI_Block_Pool",
		"desc": "iSCSI Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "iSCSI",
		"pools": "2",
		"resources": "0"
	},
	{
		"id": 3, 
		"name": "ScaleIO-Pool",
		"desc": "ScaleIO-Pool",
		"provisioning": "thin",
		"assignment": "manual",
		"protocols": "ScaleIO",
		"pools": "1",
		"resources": "1"
	},
	{
		"id": 4, 
		"name": "SRDF_Protected_Block_Pool",
		"desc": "SRDF Protected Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "2",
		"resources": "0"
	},
	{
		"id": 5, 
		"name": "VPLEX_Virtual_Pool",
		"desc": "VPLEX Protected Virtual Block Storage Pool",
		"provisioning": "thin",
		"assignment": "automatic",
		"protocols": "FC",
		"pools": "10",
		"resources": "0"
	}
];

VIPRJSON[2].fileVirtualPools = [
	{
		"id": 0,
		"name": "Isilon Storage",
		"desc": "Isilon smartpool",
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "NFS",
		"pools": "1",
		"resources": "4"
	},
	{
		"id": 1,
		"name": "Netapp Storage",
		"desc": "Netapp Storage",
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "CIFS, NFS",
		"pools": "1",
		"resources": "1"
	},
	{
		"id": 2,
		"name": "VNX File Storage",
		"desc": "VNX File Storage",
		"provisioning": "Thick",
		"assignment": "automatic",
		"protocols": "NFS",
		"pools": "1",
		"resources": "1"
	}
];

VIPRJSON[2].objectVirtualPools = [
	{
		"id": 0,
		"name": "GlobalObjPool1",
		"description": "GlobalObjPool1",
		"virtualArrays": [
			{
				"vdc": 1,
				"virtualArray": 0
			},
			{
				"vdc": 2,
				"virtualArray": 0
			}
		]
	},
	{
		"id": 1,
		"name": "GlobalObjPool2",
		"description": "GlobalObjPool2",
		"virtualArrays": [
			{
				"vdc": 1,
				"virtualArray": 0
			},
			{
				"vdc": 2,
				"virtualArray": 0
			}
		]
	}
];

VIPRJSON[2].volumes = [
	{
		"id": 0,
		"fromOrderId": 0,
		"name": "test-1",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	},
	{
		"id": 1,
		"fromOrderId": 1,
		"name": "test-2",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "192.168.1.180",
		"size": 3
	},
	{
		"id": 2,
		"fromOrderId": 2,
		"name": "test-3",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "RainPole Datacenters/esx01.vlab.local",
		"size": 3
	},
	{
		"id": 3,
		"fromOrderId": 3,
		"name": "test-4",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	},
	{
		"id": 4,
		"fromOrderId": 4,
		"name": "test-5",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	},
	{
		"id": 5,
		"fromOrderId": 4,
		"name": "test-6",
		"virtualArray": "VA-Block",
		"virtualPool": "High_Performance_Block_Pool",
		"host": "WinHost1",
		"size": 3
	}
];

VIPRJSON[2].exportGroups = [
	{
		"id": 0,
		"fromOrderId": 1,
		"name": "WinHost1",
		"virtualArrays": ["VA-Block"]
	},
	{
		"id": 1,
		"fromOrderId": 5,
		"name": "192.168.1.180",
		"virtualArrays": ["Boston (cs)"]
	},
	{
		"id": 2,
		"fromOrderId": 5,
		"name": "RainPole Datacenters/esx01.vlab.local",
		"virtualArrays": ["VA-Block"]
	}
];

VIPRJSON[2].fileSystems = [
	{
		"id": 0,
		"name": "rainpolestore1",
		"size": "12.0",
		"virtualArray": 'VA-File',
		"virtualPool": 'High_Performance_File_Pool',
		"protocols": "NFS"
	},
	{
		"id": 1,
		"name": "share1",
		"size": "3.0",
		"virtualArray": 'Boston (cs)',
		"virtualPool": 'Low_Performance_File_Pool',
		"protocols": "CIFS"
	}
];

VIPRJSON[1].licenses = [{
	"name": "ViPR Object",
	"status": 0,
	"serial": "ABCD12345",
	"expiry": "Permanent license issued on 01/10/2014.",
	"notice": "ACTIVATED TO License Site Number: ABCD12345"
}, {
	"name": "ViPR Controller",
	"status": 0,
	"serial": "ABCD12345",
	"expiry": "Permanent license issued on 01/10/2014.",
	"notice": "ACTIVATED TO License Site Number: ABCD12345",
	"capacity": "30",
	"usage": "0.3 PB used of 1.0 PB",
	"showCapacity": true
}, {
	"name": "ViPR Unstructured",
	"status": 0,
	"serial": "ABCD12345",
	"expiry": "Permanent license issued on 01/10/2014.",
	"notice": "ACTIVATED TO License Site Number: ABCD12345",
	"capacity": 0,
	"usage": "0 used of 1.0 PB",
	"showCapacity": true
}, {
	"name": "ViPR HDFS",
	"status": 0,
	"serial": "ABCD12345",
	"expiry": "Permanent license issued on 01/10/2014.",
	"notice": "ACTIVATED TO License Site Number: ABCD12345",
}, {
	"name": "ViPR CAS",
	"status": 0,
	"serial": "ABCD12345",
	"expiry": "Permanent license issued on 01/10/2014.",
	"notice": "ACTIVATED TO License Site Number: ABCD12345",
}];

VIPRJSON[2].licenses = VIPRJSON[1].licenses;