// 所有语言包集中在一个文件中，避免CORS问题
const languagePacks = {
  zh: {
    title: 'Goosebox — 鹅场挂机养成',
    subtitle: '鹅场挂机养成 · Idle Goose',
    nav: {
      home: '主页',
      highlights: '亮点',
      play: '开始游戏',
      faq: 'FAQ',
      wallet: '连接钱包',
      network: '网络'
    },
    hero: {
      title: '鹅场挂机 · 宝箱掉落 · 合成进阶',
      description: '放置与点触结合，让 <b>Goosebox</b> 自动"产蛋"。开箱与任务积累碎片，合成稀有道具，赚取 DIAMOND 与 Pharos。',
      playNow: '立即开始'
    },
    highlights: {
      idle: {
        title: '挂机养鹅',
        description: '放置自动产蛋，轻松领取 DIAMOND / Pharos 奖励。'
      },
      upgrade: {
        title: '升级鹅舍',
        description: '消耗 DIAMOND 提升产线与设施，解锁新鹅与更多外观。'
      },
      community: {
        title: '任务 & 社区',
        description: '完成任务、参与社区互动，获得额外加速与资源奖励。'
      },
      early: {
        title: '早期加成',
        description: '为后续版本做准备，早期玩家可获取专属奖励与纪念徽章。'
      }
    },
    play: {
      title: '开始游戏 & 快速上手',
      subtitle: '三步起养，轻松挂机。',
      steps: [
        '打开 <b>Web 版本</b> 进入 Goosebox',
        '登录/注册并完成新手任务',
        '升级鹅舍与产线，开启冲刺'
      ],
      button: '开始游戏',
      tips: {
        title: '小贴士',
        content: '完成每日任务可额外掉落 Pharos 碎片；参与社区活动可获得加速奖励。'
      }
    },
    faq: {
      offline: {
        question: '离线收益怎么领？',
        answer: '回到游戏首页点击"领取"，即可一次性收取离线期间的产蛋累计。'
      },
      tokens: {
        question: '如何获得更多 DIAMOND/Pharos？',
        answer: '做任务、参与活动、推广助力与开箱；稀有宝箱概率出大量代币与限定装饰。'
      },
      referral: {
        question: '推广奖励规则？',
        answer: '邀请即得宝箱；关系绑定后可持续获得下线活跃返利。'
      }
    },
    faucet: {
      title: 'PHRS 水龙头',
      subtitle: 'PHRS 水龙头',
      heroTitle: 'PHRS 水龙头',
      heroDescription: '每日免费领取 0.1 PHRS 测试代币，体验 Goosebox 生态系统',
      sections: {
        walletConnection: '钱包连接状态',
        twitterIntegration: 'Link X account',
        twitterStatus: 'X 账户状态',
        claimTokens: '领取 PHRS 代币'
      },
      networkInfo: {
        title: '网络信息',
        network: '网络: Pharos Testnet (Chain ID: 688688)',
        dailyLimit: '每日限额: 0.1 PHRS',
        cooldown: '冷却期: 24小时'
      },
      walletStatus: {
        integrated: '钱包已集成，连接后将自动开始认证流程',
        connected: '钱包已连接',
        waiting: '等待钱包连接...',
        disconnected: '钱包已断开连接',
        switchingAccount: '检测到账户切换',
        newAccountAuth: '新账户认证中'
      },
      twitter: {
        connectButton: '连接 Twitter',
        disconnectButton: '断开 Twitter',
        alreadyConnected: 'Twitter 已经连接!',
        twitterInfo: 'Twitter 信息:',
        username: '用户名',
        displayName: '显示名',
        verified: '验证状态',
        followers: '关注者',
        connectedAt: '连接时间',
        bindingSuccess: 'Twitter 账户绑定成功!',
        disconnectSuccess: 'Twitter 连接已断开!',
        authRequired: '请先完成钱包连接和签名认证！',
        operationSteps: '操作步骤：',
        step1: '1. 点击"连接钱包"按钮',
        step2: '2. 完成钱包签名认证',
        step3: '3. 再点击"连接 Twitter"',
        checkingStatus: '正在检查 Twitter 连接状态...',
        reloginRequired: '检测到需要重新登录，正在自动执行登录流程...',
        signingMessage: '请求钱包签名...',
        verifyingSignature: '正在验证签名并登录...',
        autoLoginSuccess: '自动登录成功，正在启动 Twitter 授权...',
        statusCheckPassed: '状态检查通过，正在启动 Twitter 授权...',
        userCancelledSignature: '用户取消了钱包签名',
        reconnectInstructions: '连接 Twitter 需要重新签名来验证身份。',
        solution: '解决方法：',
        retryInstruction: '请重新点击"连接 Twitter"并在钱包弹窗中确认签名。',
        tooManyRequests: '请求过于频繁',
        waitAndRetry: '服务器收到太多请求，请等待几分钟后重试',
        serviceUnavailable: 'Twitter服务暂时不可用',
        contactAdmin: '请稍后重试或联系管理员',
        connectionFailed: 'X 连接失败'
      },
      claim: {
        instructions: '领取说明',
        instruction1: '• 每个钱包地址每24小时只能领取一次',
        instruction2: '• 每次领取 0.1 PHRS 测试代币',
        instruction3: '• 需要完成签名登录和 reCAPTCHA 验证',
        instruction4: '• 建议绑定 Twitter 账户以获得更好的服务',
        instruction5: '• 使用钱包连接',
        instruction6: '• 确保在 Pharos Testnet 网络上',
        autoCheckAfterLogin: '登录成功后自动检查状态',
        manualCheckButton: '手动检查状态',
        claimButton: '领取代币',
        cooldownTime: '冷却中',
        checkingStatus: '正在检查水龙头状态...',
        autoCheckingStatus: '自动检查水龙头状态...',
        claimStatus: '领取状态',
        canClaim: '可以领取',
        cannotClaim: '暂时无法领取',
        userStatus: '用户状态',
        ipStatus: 'IP 状态',
        twitterStatus: 'Twitter 状态',
        rateLimit: '速率限制',
        address: '地址',
        bound: '已绑定',
        unbound: '未绑定',
        cooldownRemaining: '冷却剩余',
        allowedRequests: '允许请求',
        remaining: '剩余次数',
        yes: '是',
        no: '否',
        hours: '小时',
        minutes: '分钟',
        seconds: '秒',
        claimingTokens: '正在获取签名...',
        contractCalling: '签名获取成功，正在调用合约...',
        claimInfo: '领取信息',
        amount: '金额',
        waitingConfirmation: '交易已提交，等待确认...',
        transactionHash: '交易哈希',
        notifyingServer: '通知服务器合约执行成功...',
        claimSuccess: '代币领取成功！',
        transactionInfo: '交易信息',
        blockNumber: '区块号',
        gasUsed: 'Gas 使用',
        claimAmount: '领取金额',
        cooldownStarted: '24小时冷却期已开始'
      },
      errors: {
        loginRequired: '请先登录',
        recaptchaRequired: '请先完成 reCAPTCHA 验证',
        walletRequired: '请连接钱包',
        authRequired: '请先完成钱包连接和签名认证',
        userRejected: '用户取消了交易',
        insufficientFunds: '账户余额不足支付 Gas 费用',
        cooldownNotMet: '冷却期未满，请24小时后再试',
        invalidSignature: '签名验证失败',
        nonceUsed: '签名已被使用',
        addressMismatch: '当前钱包地址与签名地址不匹配',
        dependencyFailed: 'ethers.js 加载失败，请刷新页面',
        networkError: '网络错误，请检查连接',
        serverError: '服务器错误，请稍后重试'
      },
      messages: {
        checkingTwitterStatus: '🔍 正在检查 Twitter 连接状态...',
        autoReloginDetected: '🔑 检测到需要重新登录，正在自动执行登录流程...',
        gettingNonce: '🔑 获取签名随机数...',
        requestingSignature: '✍️ 请求钱包签名...',
        verifyingSignature: '🔐 正在验证签名并登录...',
        autoLoginSuccess: '✅ 自动登录成功，正在启动 Twitter 授权...',
        statusCheckPassed: '✅ 状态检查通过，正在启动 Twitter 授权...',
        userCancelledSignature: '⚠️ 用户取消了钱包签名',
        tooManyRequests: '❌ 请求过于频繁',
        serviceUnavailable: '❌ Twitter服务暂时不可用',
        disconnectingTwitter: '正在断开 Twitter 连接...',
        twitterDisconnected: 'Twitter 连接已断开!',
        twitterDisconnectFailed: '断开 Twitter 连接失败',
        checkingFaucetStatus: '正在检查水龙头状态...',
        autoCheckingFaucetStatus: '自动检查水龙头状态...',
        faucetCheckFailed: '检查水龙头状态失败',
        autoFaucetCheckFailed: '自动检查水龙头状态失败',
        gettingSignature: '正在获取签名...',
        contractCalling: '正在调用合约...',
        checkingDependencies: '检查依赖库...',
        transactionSubmitted: '交易已提交，等待确认...',
        notifyingServer: '通知服务器合约执行成功...',
        tokenClaimSuccess: '代币领取成功！',
        tokenClaimSuccessServerFailed: '代币领取成功，但服务器确认失败',
        tokenClaimSuccessNotifyFailed: '代币领取成功，但服务器通知失败',
        contractCallFailed: '合约调用失败',
        twitterAuthFailed: 'Twitter 授权失败',
        bindingTwitterAccount: '正在绑定 Twitter 账户...',
        twitterBindingSuccess: 'Twitter 账户绑定成功!',
        twitterBindingFailed: 'X 账户绑定失败',
        walletConnected: '钱包已连接',
        walletDisconnected: '钱包已断开连接',
        walletDisconnectedAppKit: '钱包已断开连接',
        waitingWalletConnection: '等待钱包连接...',
        userCancelledTransaction: '用户取消了签名',
        authFailed: '认证失败，请重新连接钱包',
        accountSwitchDetected: '🔄 检测到账户切换',
        newAccountAuthenticating: '🔄 新账户认证中',
        twitterAlreadyConnected: '✅ Twitter 已经连接!',
        twitterConnected: '✅ Twitter 已连接',
        signatureSuccess: '签名获取成功，正在调用合约...',
        waitingForAuth: '等待新账户认证完成后检查Twitter状态...',
        waitingForFaucetAuth: '等待新账户认证完成后检查水龙头状态...',
        authRequired: '❌ 请先完成钱包连接和签名认证！',
        dependencyLoadFailed: '依赖库加载失败，请刷新页面',
        twitterServiceCheck: '先检查Twitter服务是否可用',
        reconnectInstructions: '连接 Twitter 需要重新签名来验证身份。',
        retryInstruction: '请重新点击"连接 Twitter"并在钱包弹窗中确认签名。',
        getSignatureFailed: '获取签名失败',
        twitterInfo: 'Twitter 信息:',
        username: '用户名',
        displayName: '显示名',
        verified: '验证状态',
        followers: '关注者',
        connectedAt: '连接时间',
        yes: '是',
        no: '否',
        verified_: '已验证',
        unverified: '未验证',
        faucetUser: '水龙头用户:',
        wallet: '钱包',
        transactionInfo: '交易信息:',
        transactionHash: '交易哈希',
        blockNumber: '区块号',
        gasUsed: 'Gas 使用',
        claimAmount: '领取金额',
        cooldownStarted: '24小时冷却期已开始',
        error: '错误',
        notice: '注意:',
        tokenClaimedButCooldownMayNotSet: '代币已成功领取，但冷却期可能未正确设置',
        confirmError: '确认错误',
        twitterAuthFailed: 'X 授权失败',
        twitterBindingFailed: 'X 账户绑定失败',
        twitterConnectionFailed: '❌ X 连接失败',
        twitterAuthSuccess: '✅ X 授权成功！',
        twitterBindingSuccess: 'X 账户绑定成功!',
        processingBinding: '检测到授权回调参数，正在处理绑定...',
        callbackInfo: '回调信息:',
        bindingNotice: '如果绑定失败，请确保已连接钱包并完成签名认证。',
        unknownError: '未知错误',
        retryLater: '请稍后重试，或联系管理员。',
        status: '状态',
        code: '代码',
        none: '无'
      }
    }
  },

  en: {
    title: 'Goosebox — Idle Goose Farm',
    subtitle: 'Idle Goose Farm · Casual Game',
    nav: {
      home: 'Home',
      highlights: 'Highlights',
      play: 'Start Playing',
      faq: 'FAQ',
      wallet: 'Connect Wallet',
      network: 'Network'
    },
    hero: {
      title: 'Idle Goose · Chest Drops · Merge & Progress',
      description: 'Tap-and-idle gameplay—let <b>Goosebox</b> auto "lay eggs". Open chests and complete quests to gather shards, merge rare items, and earn <b>DIAMOND</b> & <b>Pharos</b>.',
      playNow: 'Play Now'
    },
    highlights: {
      idle: {
        title: 'Idle Goose',
        description: 'Automated egg production; easily claim DIAMOND / Pharos rewards.'
      },
      upgrade: {
        title: 'Upgrade Goosehouse',
        description: 'Spend DIAMONDs to boost lines and facilities; unlock new geese and cosmetics.'
      },
      community: {
        title: 'Quests & Community',
        description: 'Complete tasks & join the community to get extra boosts and resources.'
      },
      early: {
        title: 'Early Perks',
        description: 'Prepare for future versions—early players get exclusive rewards & badges.'
      }
    },
    play: {
      title: 'Start Playing & Get Started',
      subtitle: 'Start in three steps. Easy idle play.',
      steps: [
        'Open the <b>Web version</b> to enter Goosebox',
        'Sign up / log in and finish the tutorial quests',
        'Upgrade goosehouse and lines to sprint forward'
      ],
      button: 'Start Playing',
      tips: {
        title: 'Tips',
        content: 'Daily quests may drop extra Pharos shards; community events grant speed boosts.'
      }
    },
    faq: {
      offline: {
        question: 'How to claim offline earnings?',
        answer: 'Return to the home screen and tap "Claim" to collect all eggs produced while offline.'
      },
      tokens: {
        question: 'How to get more DIAMOND/Pharos?',
        answer: 'Complete quests, join events, referrals, and open chests; rare chests may drop lots of tokens and exclusives.'
      },
      referral: {
        question: 'Referral rewards?',
        answer: 'Inviting grants a chest; once bound, you\'ll continuously earn kickbacks from your downline\'s activity.'
      }
    },
    faucet: {
      title: 'PHRS Faucet',
      subtitle: 'PHRS Faucet',
      heroTitle: 'PHRS Faucet',
      heroDescription: 'Claim 0.1 PHRS test tokens daily and experience the Goosebox ecosystem',
      sections: {
        walletConnection: 'Wallet Connection Status',
        twitterIntegration: 'Link X account',
        twitterStatus: 'X Account Status',
        claimTokens: 'Claim PHRS Tokens'
      },
      networkInfo: {
        title: 'Network Info',
        network: 'Network: Pharos Testnet (Chain ID: 688688)',
        dailyLimit: 'Daily Limit: 0.1 PHRS',
        cooldown: 'Cooldown: 24 hours'
      },
      walletStatus: {
        integrated: 'Wallet is integrated, authentication will start automatically after connection',
        connected: 'Wallet Connected',
        waiting: 'Waiting for wallet connection...',
        disconnected: 'Wallet disconnected',
        switchingAccount: 'Account switch detected',
        newAccountAuth: 'Authenticating new account'
      },
      twitter: {
        connectButton: 'Connect Twitter',
        disconnectButton: 'Disconnect Twitter',
        alreadyConnected: 'Twitter is already connected!',
        twitterInfo: 'Twitter Info:',
        username: 'Username',
        displayName: 'Display Name',
        verified: 'Verified Status',
        followers: 'Followers',
        connectedAt: 'Connected At',
        bindingSuccess: 'Twitter account successfully bound!',
        disconnectSuccess: 'Twitter connection disconnected!',
        authRequired: 'Please complete wallet connection and signature authentication first!',
        operationSteps: 'Operation Steps:',
        step1: '1. Click "Connect Wallet" button',
        step2: '2. Complete wallet signature authentication',
        step3: '3. Then click "Connect Twitter"',
        checkingStatus: 'Checking Twitter connection status...',
        reloginRequired: 'Re-login required detected, automatically executing login process...',
        signingMessage: 'Requesting wallet signature...',
        verifyingSignature: 'Verifying signature and logging in...',
        autoLoginSuccess: 'Auto-login successful, starting Twitter authorization...',
        statusCheckPassed: 'Status check passed, starting Twitter authorization...',
        userCancelledSignature: 'User cancelled wallet signature',
        reconnectInstructions: 'Connecting Twitter requires re-signing to verify identity.',
        solution: 'Solution:',
        retryInstruction: 'Please click "Connect Twitter" again and confirm the signature in the wallet popup.',
        tooManyRequests: 'Too many requests',
        waitAndRetry: 'Server received too many requests, please wait a few minutes and try again',
        serviceUnavailable: 'Twitter service temporarily unavailable',
        contactAdmin: 'Please try again later or contact administrator',
        connectionFailed: 'X connection failed'
      },
      claim: {
        instructions: 'Claim Instructions',
        instruction1: '• Each wallet address can only claim once every 24 hours',
        instruction2: '• 0.1 PHRS test tokens per claim',
        instruction3: '• Requires signature login and reCAPTCHA verification',
        instruction4: '• Recommend binding Twitter account for better service',
        instruction5: '• Wallet connection',
        instruction6: '• Ensure on Pharos Testnet network',
        autoCheckAfterLogin: 'Automatically check status after successful login',
        manualCheckButton: 'Manual Status Check',
        claimButton: 'Claim Tokens',
        cooldownTime: 'Cooldown',
        checkingStatus: 'Checking faucet status...',
        autoCheckingStatus: 'Auto-checking faucet status...',
        claimStatus: 'Claim Status',
        canClaim: 'Can claim',
        cannotClaim: 'Cannot claim temporarily',
        userStatus: 'User Status',
        ipStatus: 'IP Status',
        twitterStatus: 'Twitter Status',
        rateLimit: 'Rate Limit',
        address: 'Address',
        bound: 'Bound',
        unbound: 'Unbound',
        cooldownRemaining: 'Cooldown Remaining',
        allowedRequests: 'Allowed Requests',
        remaining: 'Remaining',
        yes: 'Yes',
        no: 'No',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
        claimingTokens: 'Getting signature...',
        contractCalling: 'Signature obtained successfully, calling contract...',
        claimInfo: 'Claim Info',
        amount: 'Amount',
        waitingConfirmation: 'Transaction submitted, waiting for confirmation...',
        transactionHash: 'Transaction Hash',
        notifyingServer: 'Notifying server of successful contract execution...',
        claimSuccess: 'Tokens claimed successfully!',
        transactionInfo: 'Transaction Info',
        blockNumber: 'Block Number',
        gasUsed: 'Gas Used',
        claimAmount: 'Claim Amount',
        cooldownStarted: '24-hour cooldown started'
      },
      errors: {
        loginRequired: 'Please login first',
        recaptchaRequired: 'Please complete reCAPTCHA verification first',
        walletRequired: 'Please connect wallet',
        authRequired: 'Please complete wallet connection and signature authentication first',
        userRejected: 'User cancelled transaction',
        insufficientFunds: 'Insufficient account balance for gas fees',
        cooldownNotMet: 'Cooldown period not met, please try again in 24 hours',
        invalidSignature: 'Signature verification failed',
        nonceUsed: 'Signature already used',
        addressMismatch: 'Current wallet address does not match signature address',
        dependencyFailed: 'ethers.js failed to load, please refresh the page',
        networkError: 'Network error, please check connection',
        serverError: 'Server error, please try again later'
      },
      messages: {
        checkingTwitterStatus: '🔍 Checking Twitter connection status...',
        autoReloginDetected: '🔑 Re-login required detected, automatically executing login process...',
        gettingNonce: '🔑 Getting signature nonce...',
        requestingSignature: '✍️ Requesting wallet signature...',
        verifyingSignature: '🔐 Verifying signature and logging in...',
        autoLoginSuccess: '✅ Auto-login successful, starting Twitter authorization...',
        statusCheckPassed: '✅ Status check passed, starting Twitter authorization...',
        userCancelledSignature: '⚠️ User cancelled wallet signature',
        tooManyRequests: '❌ Too many requests',
        serviceUnavailable: '❌ Twitter service temporarily unavailable',
        disconnectingTwitter: 'Disconnecting Twitter...',
        twitterDisconnected: 'Twitter connection disconnected!',
        twitterDisconnectFailed: 'Failed to disconnect Twitter',
        checkingFaucetStatus: 'Checking faucet status...',
        autoCheckingFaucetStatus: 'Auto-checking faucet status...',
        faucetCheckFailed: 'Faucet status check failed',
        autoFaucetCheckFailed: 'Auto faucet status check failed',
        gettingSignature: 'Getting signature...',
        contractCalling: 'Calling contract...',
        checkingDependencies: 'Checking dependencies...',
        transactionSubmitted: 'Transaction submitted, waiting for confirmation...',
        notifyingServer: 'Notifying server of successful contract execution...',
        tokenClaimSuccess: 'Tokens claimed successfully!',
        tokenClaimSuccessServerFailed: 'Tokens claimed successfully, but server confirmation failed',
        tokenClaimSuccessNotifyFailed: 'Tokens claimed successfully, but server notification failed',
        contractCallFailed: 'Contract call failed',
        twitterAuthFailed: 'Twitter authorization failed',
        bindingTwitterAccount: 'Binding Twitter account...',
        twitterBindingSuccess: 'Twitter account successfully bound!',
        twitterBindingFailed: 'X account binding failed',
        walletConnected: 'Wallet Connected',
        walletDisconnected: 'Wallet disconnected',
        walletDisconnectedAppKit: 'Wallet disconnected',
        waitingWalletConnection: 'Waiting for wallet connection...',
        userCancelledTransaction: 'User cancelled signature',
        authFailed: 'Authentication failed, please reconnect wallet',
        accountSwitchDetected: '🔄 Account switch detected',
        newAccountAuthenticating: '🔄 Authenticating new account',
        twitterAlreadyConnected: '✅ Twitter is already connected!',
        twitterConnected: '✅ Twitter connected',
        signatureSuccess: 'Signature obtained successfully, calling contract...',
        waitingForAuth: 'Waiting for new account authentication to complete before checking Twitter status...',
        waitingForFaucetAuth: 'Waiting for new account authentication to complete before checking faucet status...',
        authRequired: '❌ Please complete wallet connection and signature authentication first!',
        dependencyLoadFailed: 'Dependency loading failed, please refresh the page',
        twitterServiceCheck: 'Check if Twitter service is available first',
        reconnectInstructions: 'Connecting Twitter requires re-signing to verify identity.',
        retryInstruction: 'Please click "Connect Twitter" again and confirm the signature in the wallet popup.',
        getSignatureFailed: 'Failed to get signature',
        twitterInfo: 'Twitter Info:',
        username: 'Username',
        displayName: 'Display Name',
        verified: 'Verified Status',
        followers: 'Followers',
        connectedAt: 'Connected At',
        yes: 'Yes',
        no: 'No',
        verified_: 'Verified',
        unverified: 'Unverified',
        faucetUser: 'Faucet User:',
        wallet: 'Wallet',
        transactionInfo: 'Transaction Info:',
        transactionHash: 'Transaction Hash',
        blockNumber: 'Block Number',
        gasUsed: 'Gas Used',
        claimAmount: 'Claim Amount',
        cooldownStarted: '24-hour cooldown started',
        error: 'Error',
        notice: 'Notice:',
        tokenClaimedButCooldownMayNotSet: 'Tokens successfully claimed, but cooldown period may not be set correctly',
        confirmError: 'Confirmation Error'
      }
    }
  },

  ru: {
    title: 'Goosebox — Ферма гусей',
    subtitle: 'Ферма гусей · Казуальная игра',
    nav: {
      home: 'Главная',
      highlights: 'Особенности',
      play: 'Начать играть',
      faq: 'FAQ'
    },
    hero: {
      title: 'Ферма гусей · Сундуки · Объединение и прогресс',
      description: 'Игра с тапами и ожиданием—пусть Goosebox автоматически "несет яйца". Открывайте сундуки и выполняйте квесты для сбора осколков, объединяйте редкие предметы и зарабатывайте DIAMOND и Pharos.',
      playNow: 'Играть сейчас'
    },
    highlights: {
      idle: {
        title: 'Ферма гусей',
        description: 'Автоматическое производство яиц; легко получайте награды DIAMOND / Pharos.'
      },
      upgrade: {
        title: 'Улучшение гусятника',
        description: 'Тратьте DIAMOND на улучшение линий и сооружений; разблокируйте новых гусей и косметику.'
      },
      community: {
        title: 'Квесты и сообщество',
        description: 'Выполняйте задания и присоединяйтесь к сообществу для получения дополнительных ускорений и ресурсов.'
      },
      early: {
        title: 'Ранние преимущества',
        description: 'Подготовьтесь к будущим версиям—ранние игроки получают эксклюзивные награды и значки.'
      }
    },
    play: {
      title: 'Начать играть',
      subtitle: 'Начните в три шага. Легкая игра с ожиданием.',
      steps: [
        'Откройте <b>веб-версию</b> для входа в Goosebox',
        'Зарегистрируйтесь / войдите и завершите обучающие квесты',
        'Улучшите гусятник и линии для продвижения вперед'
      ],
      button: 'Начать играть',
      tips: {
        title: 'Советы',
        content: 'Ежедневные квесты могут выпадать дополнительные осколки Pharos; общественные мероприятия дают ускорения.'
      }
    },
    faq: {
      offline: {
        question: 'Как получить офлайн доход?',
        answer: 'Вернитесь на главный экран и нажмите "Получить", чтобы собрать все яйца, произведенные в офлайне.'
      },
      tokens: {
        question: 'Как получить больше DIAMOND/Pharos?',
        answer: 'Выполняйте квесты, участвуйте в мероприятиях, рефералы и открывайте сундуки; редкие сундуки могут выпадать много токенов и эксклюзивов.'
      },
      referral: {
        question: 'Правила реферальных наград?',
        answer: 'Приглашение дает сундук; после связывания вы будете постоянно получать откаты от активности вашей нижней линии.'
      }
    },
    faucet: {
      title: 'PHRS Кран',
      subtitle: 'PHRS Кран',
      heroTitle: 'PHRS Кран',
      heroDescription: 'Получайте 0.1 PHRS тестовых токенов ежедневно и исследуйте экосистему Goosebox',
      sections: {
        walletConnection: 'Состояние подключения кошелька',
        twitterIntegration: 'Связать X аккаунт',
        twitterStatus: 'Статус аккаунта X',
        claimTokens: 'Получить PHRS токены'
      },
      networkInfo: {
        title: 'Информация о сети',
        network: 'Сеть: Pharos Testnet (Chain ID: 688688)',
        dailyLimit: 'Дневной лимит: 0.1 PHRS',
        cooldown: 'Перезарядка: 24 часа'
      },
      walletStatus: {
        integrated: 'Кошелек интегрирован, аутентификация начнется автоматически после подключения',
        connected: 'Кошелек подключен',
        waiting: 'Ожидание подключения кошелька...',
        disconnected: 'Кошелек отключен',
        switchingAccount: 'Обнаружена смена аккаунта',
        newAccountAuth: 'Аутентификация нового аккаунта'
      },
      twitter: {
        connectButton: 'Подключить Twitter',
        disconnectButton: 'Отключить Twitter',
        alreadyConnected: 'Twitter уже подключен!',
        twitterInfo: 'Информация Twitter:',
        username: 'Имя пользователя',
        displayName: 'Отображаемое имя',
        verified: 'Статус верификации',
        followers: 'Подписчики',
        connectedAt: 'Подключено',
        bindingSuccess: 'Аккаунт Twitter успешно привязан!',
        disconnectSuccess: 'Подключение Twitter отключено!',
        authRequired: 'Сначала завершите подключение кошелька и аутентификацию подписи!',
        operationSteps: 'Шаги операции:',
        step1: '1. Нажмите кнопку "Подключить кошелек"',
        step2: '2. Завершите аутентификацию подписи кошелька',
        step3: '3. Затем нажмите "Подключить Twitter"'
      },
      claim: {
        instructions: 'Инструкции по получению',
        instruction1: '• Каждый адрес кошелька может получать только раз в 24 часа',
        instruction2: '• 0.1 PHRS тестовых токенов за получение',
        instruction3: '• Требуется вход по подписи и верификация reCAPTCHA',
        instruction4: '• Рекомендуется привязать аккаунт Twitter для лучшего сервиса',
        instruction5: '• Используйте подключение кошелька',
        instruction6: '• Убедитесь, что находитесь в сети Pharos Testnet',
        autoCheckAfterLogin: 'Автоматическая проверка статуса после успешного входа',
        manualCheckButton: 'Ручная проверка статуса',
        claimButton: 'Получить токены'
      },
      messages: {
        checkingTwitterStatus: '🔍 Проверка статуса подключения Twitter...',
        autoReloginDetected: '🔑 Обнаружена необходимость повторного входа, автоматически выполняется процесс входа...',
        gettingNonce: '🔑 Получение nonce подписи...',
        requestingSignature: '✍️ Запрос подписи кошелька...',
        verifyingSignature: '🔐 Проверка подписи и вход...',
        autoLoginSuccess: '✅ Автоматический вход успешен, запуск авторизации Twitter...',
        statusCheckPassed: '✅ Проверка статуса пройдена, запуск авторизации Twitter...',
        userCancelledSignature: '⚠️ Пользователь отменил подпись кошелька',
        tooManyRequests: '❌ Слишком много запросов',
        serviceUnavailable: '❌ Сервис Twitter временно недоступен',
        disconnectingTwitter: 'Отключение Twitter...',
        twitterDisconnected: 'Подключение Twitter отключено!',
        twitterDisconnectFailed: 'Не удалось отключить Twitter',
        checkingFaucetStatus: 'Проверка статуса крана...',
        autoCheckingFaucetStatus: 'Автоматическая проверка статуса крана...',
        faucetCheckFailed: 'Не удалось проверить статус крана',
        autoFaucetCheckFailed: 'Не удалось автоматически проверить статус крана',
        gettingSignature: 'Получение подписи...',
        contractCalling: 'Вызов контракта...',
        checkingDependencies: 'Проверка зависимостей...',
        transactionSubmitted: 'Транзакция отправлена, ожидание подтверждения...',
        notifyingServer: 'Уведомление сервера об успешном выполнении контракта...',
        tokenClaimSuccess: 'Токены успешно получены!',
        tokenClaimSuccessServerFailed: 'Токены успешно получены, но подтверждение сервера не удалось',
        tokenClaimSuccessNotifyFailed: 'Токены успешно получены, но уведомление сервера не удалось',
        contractCallFailed: 'Вызов контракта не удался',
        twitterAuthFailed: 'Авторизация Twitter не удалась',
        bindingTwitterAccount: 'Привязка аккаунта Twitter...',
        twitterBindingSuccess: 'Аккаунт Twitter успешно привязан!',
        twitterBindingFailed: 'Не удалось привязать аккаунт X',
        walletConnected: 'Кошелек подключен',
        walletDisconnected: 'Кошелек отключен',
        walletDisconnectedAppKit: 'Кошелек AppKit отключен',
        waitingWalletConnection: 'Ожидание подключения кошелька...',
        userCancelledTransaction: 'Пользователь отменил подпись',
        authFailed: 'Аутентификация не удалась, переподключите кошелек',
        accountSwitchDetected: '🔄 Обнаружена смена аккаунта',
        newAccountAuthenticating: '🔄 Аутентификация нового аккаунта',
        twitterAlreadyConnected: '✅ Twitter уже подключен!',
        twitterConnected: '✅ Twitter подключен',
        signatureSuccess: 'Подпись получена успешно, вызов контракта...',
        waitingForAuth: 'Ожидание завершения аутентификации нового аккаунта перед проверкой статуса Twitter...',
        waitingForFaucetAuth: 'Ожидание завершения аутентификации нового аккаунта перед проверкой статуса крана...',
        authRequired: '❌ Сначала завершите подключение кошелька и аутентификацию подписи!',
        dependencyLoadFailed: 'Не удалось загрузить зависимости, обновите страницу',
        twitterServiceCheck: 'Сначала проверьте доступность сервиса Twitter',
        reconnectInstructions: 'Для подключения Twitter требуется повторная подпись для проверки личности.',
        retryInstruction: 'Нажмите "Подключить Twitter" еще раз и подтвердите подпись во всплывающем окне кошелька.',
        getSignatureFailed: 'Не удалось получить подпись',
        twitterInfo: 'Информация Twitter:',
        username: 'Имя пользователя',
        displayName: 'Отображаемое имя',
        verified: 'Статус верификации',
        followers: 'Подписчики',
        connectedAt: 'Подключено',
        yes: 'Да',
        no: 'Нет',
        verified_: 'Верифицирован',
        unverified: 'Не верифицирован',
        faucetUser: 'Пользователь крана:',
        wallet: 'Кошелек',
        transactionInfo: 'Информация о транзакции:',
        transactionHash: 'Хеш транзакции',
        blockNumber: 'Номер блока',
        gasUsed: 'Использовано газа',
        claimAmount: 'Сумма получения',
        cooldownStarted: '24-часовой период ожидания начался',
        error: 'Ошибка',
        notice: 'Примечание:',
        tokenClaimedButCooldownMayNotSet: 'Токены успешно получены, но период ожидания может быть установлен неправильно',
        confirmError: 'Ошибка подтверждения',
        twitterAuthFailed: 'Авторизация Twitter не удалась',
        twitterBindingFailed: 'Не удалось привязать аккаунт X',
        twitterConnectionFailed: '❌ Не удалось подключиться к X',
        twitterAuthSuccess: '✅ Авторизация Twitter успешна!',
        twitterBindingSuccess: 'Аккаунт Twitter успешно привязан!',
        processingBinding: 'Обнаружены параметры обратного вызова авторизации, обработка привязки...',
        callbackInfo: 'Информация об обратном вызове:',
        bindingNotice: 'Если привязка не удалась, убедитесь, что кошелек подключен и аутентификация подписи завершена.',
        unknownError: 'Неизвестная ошибка',
        retryLater: 'Повторите попытку позже или обратитесь к администратору.',
        status: 'Статус',
        code: 'Код',
        none: 'Отсутствует'
      }
    }
  },

  vi: {
    title: 'Goosebox — Nông trại ngỗng',
    subtitle: 'Nông trại ngỗng · Trò chơi thường',
    nav: {
      home: 'Trang chủ',
      highlights: 'Điểm nổi bật',
      play: 'Bắt đầu chơi',
      faq: 'FAQ'
    },
    hero: {
      title: 'Nông trại ngỗng · Rương rơi · Hợp nhất và tiến bộ',
      description: 'Lối chơi tap-và-chờ—để Goosebox tự động "đẻ trứng". Mở rương và hoàn thành nhiệm vụ để thu thập mảnh vỡ, hợp nhất vật phẩm hiếm và kiếm DIAMOND và Pharos.',
      playNow: 'Chơi ngay'
    },
    highlights: {
      idle: {
        title: 'Nông trại ngỗng',
        description: 'Sản xuất trứng tự động; dễ dàng nhận phần thưởng DIAMOND / Pharos.'
      },
      upgrade: {
        title: 'Nâng cấp chuồng ngỗng',
        description: 'Tiêu DIAMOND để tăng cường dây chuyền và cơ sở; mở khóa ngỗng mới và trang phục.'
      },
      community: {
        title: 'Nhiệm vụ & Cộng đồng',
        description: 'Hoàn thành nhiệm vụ và tham gia cộng đồng để nhận tăng tốc và tài nguyên bổ sung.'
      },
      early: {
        title: 'Đặc quyền sớm',
        description: 'Chuẩn bị cho phiên bản tương lai—người chơi sớm nhận phần thưởng và huy hiệu độc quyền.'
      }
    },
    play: {
      title: 'Bắt đầu chơi',
      subtitle: 'Bắt đầu trong ba bước. Chơi chờ dễ dàng.',
      steps: [
        'Mở <b>phiên bản Web</b> để vào Goosebox',
        'Đăng ký / đăng nhập và hoàn thành nhiệm vụ hướng dẫn',
        'Nâng cấp chuồng ngỗng và dây chuyền để tiến lên'
      ],
      button: 'Bắt đầu chơi',
      tips: {
        title: 'Mẹo',
        content: 'Nhiệm vụ hàng ngày có thể rơi thêm mảnh Pharos; sự kiện cộng đồng cho tăng tốc.'
      }
    },
    faq: {
      offline: {
        question: 'Làm thế nào để nhận thu nhập ngoại tuyến?',
        answer: 'Quay lại màn hình chính và nhấn "Nhận" để thu thập tất cả trứng được sản xuất khi ngoại tuyến.'
      },
      tokens: {
        question: 'Làm thế nào để có thêm DIAMOND/Pharos?',
        answer: 'Hoàn thành nhiệm vụ, tham gia sự kiện, giới thiệu và mở rương; rương hiếm có thể rơi nhiều token và vật phẩm độc quyền.'
      },
      referral: {
        question: 'Quy tắc phần thưởng giới thiệu?',
        answer: 'Mời người khác được rương; sau khi liên kết, bạn sẽ liên tục nhận hoa hồng từ hoạt động của người dưới.'
      }
    },
    faucet: {
      title: 'Vòi PHRS',
      subtitle: 'Vòi PHRS',
      heroTitle: 'Vòi PHRS',
      heroDescription: 'Nhận 0.1 PHRS token thử nghiệm hàng ngày và khám phá hệ sinh thái Goosebox',
      sections: {
        walletConnection: 'Trạng thái kết nối ví',
        twitterIntegration: 'Liên kết tài khoản X',
        twitterStatus: 'Trạng thái tài khoản X',
        claimTokens: 'Nhận token PHRS'
      },
      networkInfo: {
        title: 'Thông tin mạng',
        network: 'Mạng: Pharos Testnet (Chain ID: 688688)',
        dailyLimit: 'Giới hạn hàng ngày: 0.1 PHRS',
        cooldown: 'Thời gian chờ: 24 giờ'
      },
      walletStatus: {
        integrated: 'Ví đã tích hợp, xác thực sẽ bắt đầu tự động sau khi kết nối',
        connected: 'Ví đã kết nối',
        waiting: 'Đang chờ kết nối ví...'
      },
      twitter: {
        connectButton: 'Kết nối Twitter',
        disconnectButton: 'Ngắt kết nối Twitter'
      },
      claim: {
        instructions: 'Hướng dẫn nhận',
        instruction1: '• Mỗi địa chỉ ví chỉ có thể nhận một lần trong 24 giờ',
        instruction2: '• 0.1 PHRS token thử nghiệm mỗi lần nhận',
        instruction3: '• Yêu cầu đăng nhập bằng chữ ký và xác minh reCAPTCHA',
        manualCheckButton: 'Kiểm tra trạng thái thủ công',
        claimButton: 'Nhận token'
      },
      messages: {
        checkingTwitterStatus: '🔍 Đang kiểm tra trạng thái kết nối Twitter...',
        autoReloginDetected: '🔑 Phát hiện cần đăng nhập lại, tự động thực hiện quy trình đăng nhập...',
        gettingSignature: 'Đang lấy chữ ký...',
        contractCalling: 'Đang gọi hợp đồng...',
        checkingDependencies: 'Đang kiểm tra phụ thuộc...',
        disconnectingTwitter: 'Đang ngắt kết nối Twitter...',
        twitterDisconnected: 'Kết nối Twitter đã ngắt!',
        checkingFaucetStatus: 'Đang kiểm tra trạng thái vòi...',
        autoCheckingFaucetStatus: 'Tự động kiểm tra trạng thái vòi...',
        walletConnected: 'Ví đã kết nối',
        walletDisconnected: 'Ví đã ngắt kết nối',
        walletDisconnectedAppKit: 'Ví AppKit đã ngắt kết nối',
        waitingWalletConnection: 'Đang chờ kết nối ví...',
        userCancelledTransaction: 'Người dùng đã hủy chữ ký',
        authFailed: 'Xác thực thất bại, vui lòng kết nối lại ví',
        accountSwitchDetected: '🔄 Phát hiện chuyển đổi tài khoản',
        newAccountAuthenticating: '🔄 Đang xác thực tài khoản mới',
        dependencyLoadFailed: 'Tải phụ thuộc thất bại, vui lòng làm mới trang'
      }
    }
  },

  uk: {
    title: 'Goosebox — Гусина ферма',
    subtitle: 'Гусина ферма · Казуальна гра',
    nav: {
      home: 'Головна',
      highlights: 'Особливості',
      play: 'Почати грати',
      faq: 'FAQ'
    },
    hero: {
      title: 'Гусина ферма · Скрині · Об\'єднання та прогрес',
      description: 'Гра з тапами та очікуванням—нехай Goosebox автоматично "несе яйця". Відкривайте скрині та виконуйте квести для збору уламків, об\'єднуйте рідкісні предмети та заробляйте DIAMOND і Pharos.',
      playNow: 'Грати зараз'
    },
    highlights: {
      idle: {
        title: 'Гусина ферма',
        description: 'Автоматичне виробництво яєць; легко отримуйте нагороди DIAMOND / Pharos.'
      },
      upgrade: {
        title: 'Покращення гусятника',
        description: 'Витрачайте DIAMOND на покращення ліній та споруд; розблоковуйте нових гусей та косметику.'
      },
      community: {
        title: 'Квести та спільнота',
        description: 'Виконуйте завдання та приєднуйтесь до спільноти для отримання додаткових прискорень та ресурсів.'
      },
      early: {
        title: 'Ранні переваги',
        description: 'Підготуйтесь до майбутніх версій—ранні гравці отримують ексклюзивні нагороди та значки.'
      }
    },
    play: {
      title: 'Почати грати',
      subtitle: 'Почніть у три кроки. Легка гра з очікуванням.',
      steps: [
        'Відкрийте <b>веб-версію</b> для входу в Goosebox',
        'Зареєструйтесь / увійдіть та завершіть навчальні квести',
        'Покращіть гусятник та лінії для просування вперед'
      ],
      button: 'Почати грати',
      tips: {
        title: 'Поради',
        content: 'Щоденні квести можуть випадати додаткові уламки Pharos; громадські заходи дають прискорення.'
      }
    },
    faq: {
      offline: {
        question: 'Як отримати офлайн дохід?',
        answer: 'Поверніться на головний екран і натисніть "Отримати", щоб зібрати всі яйця, вироблені в офлайні.'
      },
      tokens: {
        question: 'Як отримати більше DIAMOND/Pharos?',
        answer: 'Виконуйте квести, беріть участь у заходах, реферали та відкривайте скрині; рідкісні скрині можуть випадати багато токенів та ексклюзивів.'
      },
      referral: {
        question: 'Правила реферальних нагород?',
        answer: 'Запрошення дає скриню; після зв\'язування ви будете постійно отримувати відкати від активності вашої нижньої лінії.'
      }
    },
    faucet: {
      title: 'PHRS Кран',
      subtitle: 'PHRS Кран',
      heroTitle: 'PHRS Кран',
      heroDescription: 'Отримуйте 0.1 PHRS тестових токенів щодня та досліджуйте екосистему Goosebox',
      sections: {
        walletConnection: 'Стан підключення гаманця',
        twitterIntegration: 'Зв\'язати X аккаунт',
        claimTokens: 'Отримати PHRS токени'
      },
      twitter: {
        connectButton: 'Підключити Twitter',
        disconnectButton: 'Відключити Twitter'
      },
      claim: {
        claimButton: 'Отримати токени'
      },
      messages: {
        checkingTwitterStatus: '🔍 Перевірка статусу підключення Twitter...',
        gettingSignature: 'Отримання підпису...',
        contractCalling: 'Виклик контракту...',
        checkingDependencies: 'Перевірка залежностей...',
        disconnectingTwitter: 'Відключення Twitter...',
        twitterDisconnected: 'Підключення Twitter відключено!',
        checkingFaucetStatus: 'Перевірка статусу крану...',
        autoCheckingFaucetStatus: 'Автоматична перевірка статусу крану...',
        walletConnected: 'Гаманець підключено',
        walletDisconnected: 'Гаманець відключено',
        walletDisconnectedAppKit: 'Гаманець AppKit відключено',
        waitingWalletConnection: 'Очікування підключення гаманця...',
        userCancelledTransaction: 'Користувач скасував підпис',
        authFailed: 'Аутентифікація не вдалася, переподключіть гаманець',
        accountSwitchDetected: '🔄 Виявлено зміну облікового запису',
        newAccountAuthenticating: '🔄 Аутентифікація нового облікового запису',
        dependencyLoadFailed: 'Не вдалося завантажити залежності, оновіть сторінку'
      }
    }
  },

  id: {
    title: 'Goosebox — Peternakan angsa',
    subtitle: 'Peternakan angsa · Permainan kasual',
    nav: {
      home: 'Beranda',
      highlights: 'Sorotan',
      play: 'Mulai Bermain',
      faq: 'FAQ'
    },
    hero: {
      title: 'Peternakan angsa · Peti jatuh · Gabung & maju',
      description: 'Gameplay tap-dan-tunggu—biarkan Goosebox otomatis "bertelur". Buka peti dan selesaikan quest untuk mengumpulkan pecahan, gabungkan item langka, dan dapatkan DIAMOND & Pharos.',
      playNow: 'Main Sekarang'
    },
    highlights: {
      idle: {
        title: 'Peternakan angsa',
        description: 'Produksi telur otomatis; mudah klaim hadiah DIAMOND / Pharos.'
      },
      upgrade: {
        title: 'Tingkatkan kandang angsa',
        description: 'Habiskan DIAMOND untuk meningkatkan jalur dan fasilitas; buka kunci angsa baru dan kosmetik.'
      },
      community: {
        title: 'Quest & Komunitas',
        description: 'Selesaikan tugas dan bergabung dengan komunitas untuk mendapatkan boost dan sumber daya tambahan.'
      },
      early: {
        title: 'Keuntungan awal',
        description: 'Persiapkan untuk versi masa depan—pemain awal dapatkan hadiah dan lencana eksklusif.'
      }
    },
    play: {
      title: 'Mulai Bermain',
      subtitle: 'Mulai dalam tiga langkah. Permainan tunggu yang mudah.',
      steps: [
        'Buka <b>versi Web</b> untuk masuk ke Goosebox',
        'Daftar / masuk dan selesaikan quest tutorial',
        'Tingkatkan kandang angsa dan jalur untuk maju'
      ],
      button: 'Mulai Bermain',
      tips: {
        title: 'Tips',
        content: 'Quest harian mungkin menjatuhkan pecahan Pharos ekstra; acara komunitas berikan boost kecepatan.'
      }
    },
    faq: {
      offline: {
        question: 'Bagaimana cara klaim penghasilan offline?',
        answer: 'Kembali ke layar utama dan tekan "Klaim" untuk mengumpulkan semua telur yang diproduksi saat offline.'
      },
      tokens: {
        question: 'Bagaimana cara mendapatkan lebih banyak DIAMOND/Pharos?',
        answer: 'Selesaikan quest, ikuti acara, referral dan buka peti; peti langka mungkin menjatuhkan banyak token dan eksklusif.'
      },
      referral: {
        question: 'Aturan hadiah referral?',
        answer: 'Mengundang dapat peti; setelah terikat, Anda akan terus dapatkan komisi dari aktivitas downline.'
      }
    },
    faucet: {
      title: 'Keran PHRS',
      subtitle: 'Keran PHRS',
      heroTitle: 'Keran PHRS',
      heroDescription: 'Klaim 0.1 PHRS token uji setiap hari dan jelajahi ekosistem Goosebox',
      sections: {
        walletConnection: 'Status Koneksi Dompet',
        twitterIntegration: 'Hubungkan akun X',
        claimTokens: 'Klaim Token PHRS'
      },
      twitter: {
        connectButton: 'Hubungkan Twitter',
        disconnectButton: 'Putuskan Twitter'
      },
      claim: {
        claimButton: 'Klaim Token'
      },
      messages: {
        checkingTwitterStatus: '🔍 Memeriksa status koneksi Twitter...',
        gettingSignature: 'Mendapatkan tanda tangan...',
        contractCalling: 'Memanggil kontrak...',
        checkingDependencies: 'Memeriksa dependensi...',
        disconnectingTwitter: 'Memutus koneksi Twitter...',
        twitterDisconnected: 'Koneksi Twitter terputus!',
        checkingFaucetStatus: 'Memeriksa status keran...',
        autoCheckingFaucetStatus: 'Otomatis memeriksa status keran...',
        walletConnected: 'Dompet Terhubung',
        walletDisconnected: 'Dompet terputus',
        walletDisconnectedAppKit: 'Dompet AppKit terputus',
        waitingWalletConnection: 'Menunggu koneksi dompet...',
        userCancelledTransaction: 'Pengguna membatalkan tanda tangan',
        authFailed: 'Otentikasi gagal, silakan hubungkan ulang dompet',
        accountSwitchDetected: '🔄 Terdeteksi pergantian akun',
        newAccountAuthenticating: '🔄 Mengotentikasi akun baru',
        dependencyLoadFailed: 'Gagal memuat dependensi, silakan muat ulang halaman'
      }
    }
  }
};

// 语言配置
const languageConfig = {
  zh: { name: '中文', flag: 'cn' },
  en: { name: 'English', flag: 'us' },
  ru: { name: 'Русский', flag: 'ru' },
  vi: { name: 'Tiếng Việt', flag: 'vn' },
  uk: { name: 'Українська', flag: 'ua' },
  id: { name: 'Bahasa Indonesia', flag: 'id' }
};

const defaultLanguage = 'en';

// 工具函数
function getLanguageData(lang) {
  return languagePacks[lang] || languagePacks[defaultLanguage];
}

function getSupportedLanguages() {
  return Object.keys(languagePacks);
}

function getNestedValue(obj, path) {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}
