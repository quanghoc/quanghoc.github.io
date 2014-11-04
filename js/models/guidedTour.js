var guidedTourArray = {
	adminDashboard: {
		scrollToElement: true,
		disableInteraction: false,
		steps: [
			{
				element: '#physicalAssetsPanel',
				intro: "Adding physical assets to ViPR is the first step to setup your virtual data center. You can discover storage systems such as EMC VMAX, VNX, VPLEX, Isilon, ScaleIO or third party arrays such as NetApp and Hitachi.",
				position: 'left'
			},
			{
				element: '#virtualAssetsPanel',
				intro: "Virtual assets provide a more abstract view of the storage environment. You need to add storage systems to the virtual array, and configure the networks, storage ports, and storage pools assigned to the virtual array. Then you can define virtual pools as physical storage tiers with defined performance and protection characteristics.",
				position: 'top'
			},
			{
				element: '#ECUEleftNav',
				intro: "You can navigate to specific page via left navigation or use the Dashboard page.",
				position: 'right'
			},
			{
				element: '#ECUEleftNav .rootNav:nth-child(4)',
				intro: "To provision storage, click on <strong>Service Catalog</strong> icon and go to <strong>View Catalog</strong>.",
				position: 'right'
			},
			{
				element: '#vdcSwitch',
				intro: "You can switch between Virtual Data Centers (VDCs). In this case, there are two VDCs: vdc1 and vdc2.",
				position: 'bottom-middle-aligned'
			},
			{
				element: '#requestAQuote',
				intro: "You can click here to request a quote for ViPR and our representative will contact you.",
				position: 'bottom-middle-aligned'
			}
		]
	},
	virtualArrays: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h1',
				intro: "A virtual array is an abstraction of underlying storage infrastructure and defines a logical location where data center administrators can place storage in a ViPR virtual data center. It provides a more abstract view of the storage environment for use in applying policies or provisioning.",
				position: 'right'
			},
			{
				element: '#DataTables_Table_0',
				intro: "We have several <strong>block</strong> and <strong>file</strong> virtual arrays and one <strong>commodity (CommodityvPool)</strong> virtual array already defined here.",
				position: 'bottom'
			},
			{
				element: '#virtualArrays .button-bar .btn:first-child',
				intro: "You can click <strong>Add</strong> to add a new virtual array.",
				position: 'right'
			}
		]		
	},
	CommodityNodes: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h3',
				intro: 'EMC ViPR enables customers to bring their own commodity hardware to enable <strong>Object, Block and HDFS</strong>. You can benefit from both the low cost of commodity hardware while not compromising enterprise storage capabilities such as geo replication, data snapshots, and more.',
				position: 'bottom'
			},
			{
				element: '#fabricnodes',
				intro: 'This demo has a two-site deployment configuration (one ECS per site): <strong>boston (vdc1)</strong> and <strong>new-york (vdc2)</strong>. Each ECS has 4 nodes with 15 disks per node.',
				position: 'bottom'
			},
			{
				element: '#DataTables_Table_0 tbody tr:first-child',
				intro: 'You can click on each node to view more details.',
				position: 'bottom'
			}
		]		
	},
	VirtualDataCenters: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h1',
				intro: 'A virtual data center represents the span of control of a ViPR Controller. It is a logical construct that can map to a physical data center or a part of one. A single virtual data center exists for each ViPR Controller.',
				position: 'right'
			},
			{
				element: '#DataTables_Table_0',
				intro: 'This demo has two virtual data centers: <strong>vdc1</strong> and <strong>vdc2</strong>.',
				position: 'bottom'
			},
			{
				element: '#vdcSwitch',
				intro: "To switch between virtual data centers, click this menu.",
				position: 'left'
			}
		]		
	},
	fileVirtualPools: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h1',
				intro: 'Virtual pools are abstractions of underlying physical storage tiers with defined performance and protection characteristics.',
				position: 'right'
			},
			{
				element: '#DataTables_Table_0',
				intro: 'There are already some file virtual pools defined in this demo. You can create a virtual pool with other criteria such as thick/thin, file protocols, drive type or system type.',
				position: 'bottom'
			},
			{
				element: '#virtualPools .button-bar button:first-child',
				intro: 'To create a virtual pool for file storage, click <strong>Add</strong> and specify the criteria in the next page.',
				position: 'right'
			}
		]		
	},
	ObjectVirtualPools: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h1',
				intro: 'Object virtual pools store object data. Storage on underlying ViPR-managed file arrays or commodity nodes backs them.',
				position: 'right'
			},
			{
				element: '#DataTables_Table_0',
				intro: 'An object virtual pool can reside in a single virtual data center or it can span multiple virtual data centers.',
				position: 'bottom'
			},
			{
				element: '#objectVirtualPool .button-bar button:first-child',
				intro: 'To create a virtual pool for object storage, click <strong>Add</strong> and specify the criteria in the next page.',
				position: 'right'
			}
		]		
	},
	storageSystems: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h1',
				intro: 'After the ViPR Controller vApp is deployed, the first step in setting up the ViPR virtual data center is to add storage arrays, referred to as storage systems in ViPR.',
				position: 'right'
			},
			{
				element: '#DataTables_Table_0',
				intro: 'ViPR natively supports the discovery of EMC VPLEX, VMAX, VNX, Isilon, NetApp, and Hitachi Data Systems (HDS) arrays. In addition, ViPR can discover many different block arrays via array support through OpenStack (non-native support).',
				position: 'bottom'
			},
			{
				element: '#storageArray .button-bar button:first-child',
				intro: 'When a System Administrator adds storage systems to ViPR, ViPR discovers the arrays\' physical ports and storage pools and brings them under ViPR management. Click <strong>Add</strong> to get started.',
				position: 'right'
			}
		]		
	},
	catalog: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: '#breadcrumbs li',
				intro: 'The ViPR Service Catalog provides access to a set of predefined services, which includes high level operations to carry out common provisioning activities such as creating a block storage volume and exporting it to a host or cluster, as well as <strong>building block</strong> services, to perform more granular operations such as creating a ViPR volume, or exporting the storage to a host in separate operations.',
			 position: 'right'
			},
			{
				element: '#catalog ul li:first-child',
				intro: 'Each <strong>category</strong> consists of multiple <strong>services</strong>. For example, if you click on <strong>Block Storage Services</strong>, you can see a list of services such as Create Block Volume for a Host, Expand Block Volume, Create Block Volume and Export Volume to Host.',
				position: 'right'
			},
			{
				element: '#ECUEleftNav .rootNav:nth-child(4)',
				intro: 'Only ViPR System Administrator can add, edit or delete services. This demo has disabled this functionality. However, you can click on the <strong>Service Catalog</strong> icon and go to <strong>Edit Catalog</strong> page to review the interface.',
				position: 'right'
			}
		]		
	},
	blockVirtualPools: {
		isTour: true,
		scrollToElement: true,
		steps:[
			{
				element: 'h1',
				intro: 'Virtual pools are abstractions of underlying physical storage tiers with defined performance and protection characteristics.',
				position: 'right'
			},
			{
				element: '#DataTables_Table_0',
				intro: 'Each block virtual pool defines a set of storage service capabilities such as storage system type (VPLEX, VMAX, VNX block or file, Isilon, NetApp, Hitachi), protection characteristics, and performance characteristics.',
				position: 'bottom'
			},
			{
				element: '#virtualPools .button-bar button:first-child',
				intro: 'To create a virtual pool for block storage, click <strong>Add</strong> and specify the criteria in the next page.',
				position: 'right'
			}
		]		
	}
};