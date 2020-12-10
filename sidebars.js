module.exports = {
    mainSidebar: {
        General: [
            'general/intro',
            'general/etp',
            'general/digital-identity',
            {
                'Smart Assets': ['general/mst', 'general/mit']
            },
            {
                'Hybrid Consensus': ['general/pow', 'general/dpos']
            },
            'general/architecture',
            'general/help'
        ],
        User: [
            'user/install',
            'user/security',
            {
                Wallet: ['user/create-wallet', 'user/receive', 'user/send-etp', 'user/send-assets', 'user/create-avatar', 'user/voting'],
            },
            {
                'Architects': ['user/create-mst', 'user/create-mit', 'user/deploy-contract' ],
            },
        ],
        Developer: [
            'dev/api',
            'dev/testnet',
            {
                'Smart Contracts': ['dev/webassembly', 'dev/evm', ],
            },
            'dev/jslib',
        ],
        Admin: [
            'admin/install',
            'admin/configure',
            'admin/upgrade',
            'admin/security',
            {
                'Consensus': ['admin/pow-solo', 'admin/pow-pool', 'admin/dpos'],
            },
            'admin/monitoring',
        ],
    },
};
