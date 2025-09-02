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
      disconnect: '断开连接',
      network: '网络',
      faucet: '获得 PHRS'
    },
    hero: {
      title: '鹅场挂机 · 宝箱掉落 · 合成进阶',
      description: '放置与点触结合，让 <b>Goosebox</b> 自动"产蛋"。开箱与任务积累碎片，合成稀有道具，赚取 DIAMOND 与 Pharos。',
      playNow: '立即开始'
    },
    lucky: {
      title: '幸运抽奖，赢取大奖',
      subtitle: '加入Goosebox幸运抽奖。每日转动，赢取PHRS、加速道具和惊喜！',
      button: '立即抽奖'
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
      lucky: {
        question: '幸运抽奖 — 规则',
        answer: {
          rule1: '玩家可通过完成下述任务获得抽奖次数。',
          rule3: '活动时间为 2025 年 9 月 1 日至 2025 年 9 月 15 日。',
          rule4: '本活动最终解释权归 GooseBox 所有。'
        }
      },
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
      title: '加入Goosebox！',
      subtitle: '获得 PHRS',
      heroTitle: '加入Goosebox！',
      heroDescription: '每日领取PHRS！体验 Goosebox 生态系统',
      sections: {
        walletConnection: '钱包连接状态',
        twitterIntegration: '连接 X 账户',
        twitterStatus: 'X 账户状态',
        claimTokens: '领取测试代币'
      },
      badges: {
        dailyFree: '每日免费领取',
        socialVerify: '社交验证',
        tokenClaim: '代币领取'
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
        description: '验证您的社交账户以获得更好的体验',
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
        description: '连接钱包，完成验证，一键领取！',
        instructions: '领取说明',
        instruction1: '• 每个钱包地址每24小时只能领取一次',
        instruction2: '• 每次领取 0.1 PHRS 测试代币',
        instruction3: '• 需要完成签名登录和 reCAPTCHA 验证',
        instruction4: '• 建议绑定 Twitter 账户以获得更好的服务',
        instruction5: '• 使用钱包连接',
        instruction6: '• 确保在 Pharos Testnet 网络上',
        autoCheckAfterLogin: '登录成功后自动检查状态',
        manualCheckButton: '手动检查状态',
        claimButton: '立即领取！',
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
        status: '状态',
        distributionId: '分发ID',
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
      security: {
        title: '🛡️ 安全限制',
        walletCooldown: '• 用户冷却: 24小时内每个钱包地址只能申请一次',
        ipLimit: '• IP 限制: 24小时内每个 IP 地址只能申请一次',
        twitterLimit: '• Twitter 限制: 24小时内每个 Twitter 账户只能申请一次',
        rateLimit: '• 速率限制: 每小时最多 10 次申请请求',
        recaptcha: '• reCAPTCHA: 必须通过 Google reCAPTCHA v2 验证',
        twitterBinding: '• Twitter 绑定: 必须绑定 Twitter 账户才能申请'
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
        preparingTwitterConnection: '🔄 准备连接 Twitter...',
        reAuthenticating: '🔑 重新认证中，请稍候...',
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
        submittingClaim: '正在提交代币申请...',
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
        walletConnected: '钱包已连接',
        walletDisconnected: '钱包已断开连接',
        walletDisconnectedAppKit: '钱包已断开连接',
        waitingWalletConnection: '等待钱包连接...',
        userCancelledTransaction: '用户取消了签名',
        authFailed: '认证失败，请重新连接钱包',
        authRateLimit: '⏰ 认证请求过于频繁，请稍后再试',
        accountSwitchDetected: '🔄 检测到账户切换',
        newAccountAuthenticating: '🔄 新账户认证中',
        twitterAlreadyConnected: '✅ Twitter 已经连接!',
        twitterConnected: '✅ Twitter 已连接',
        signatureSuccess: '签名获取成功，正在调用合约...',
        waitingForAuth: '等待新账户认证完成后检查Twitter状态...',
        waitingForFaucetAuth: '等待新账户认证完成后检查水龙头状态...',
        authRequired: '❌ 请先完成钱包连接和签名认证！',
        autoLoginRequired: '🔑 检测到需要登录，正在自动执行登录流程...',
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
        cooldown: '冷却中',
        hours: '小时',
        minutes: '分钟',
        seconds: '秒',
        error: '错误',
        notice: '注意:',
        tokenClaimedButCooldownMayNotSet: '代币已成功领取，但冷却期可能未正确设置',
        confirmError: '确认错误',
        twitterAuthFailed: 'X 授权失败',
        twitterBindingFailed: 'X 账户绑定失败: {error}',
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
      disconnect: 'Disconnect',
      network: 'Network',
      faucet: 'Get PHRS'
    },
    hero: {
      title: 'Idle Goose · Chest Drops · Merge & Progress',
      description: 'Tap-and-idle gameplay—let <b>Goosebox</b> auto "lay eggs". Open chests and complete quests to gather shards, merge rare items, and earn <b>DIAMOND</b> & <b>Pharos</b>.',
      playNow: 'Play Now'
    },
    lucky: {
      title: 'Spin & Win Big Prizes',
      subtitle: 'Join the Goosebox Lucky Draw. Spin daily for PHRS, boosts, and surprises!',
      button: 'Spin Now'
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
      lucky: {
        question: 'Lucky Draw — Rules',
        answer: {
          rule1: 'Players can earn lucky draw chances by completing the tasks below.',
          rule3: 'The event period is September 1, 2025 – September 15, 2025.',
          rule4: 'The final interpretation right of this event belongs to GooseBox.'
        }
      },
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
      title: 'Join Goosebox!',
      subtitle: 'Get PHRS',
      heroTitle: 'Join Goosebox!',
      heroDescription: 'Claim PHRS daily and experience the Goosebox ecosystem',
      sections: {
        walletConnection: 'Wallet Connection Status',
        twitterIntegration: 'Link X account',
        twitterStatus: 'X Account Status',
        claimTokens: 'Claim Testnet Tokens'
      },
      badges: {
        dailyFree: 'Daily Free Claim',
        socialVerify: 'Social Verification',
        tokenClaim: 'Token Claim'
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
        description: 'Verify your social account for a better experience',
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
        description: 'Connect wallet, complete verification, and claim with one click!',
        instructions: 'Claim Instructions',
        instruction1: '• Each wallet address can only claim once every 24 hours',
        instruction2: '• 0.1 PHRS testnet tokens per claim',
        instruction3: '• Requires signature login and reCAPTCHA verification',
        instruction4: '• Recommend binding Twitter account for better service',
        instruction5: '• Wallet connection',
        instruction6: '• Ensure on Pharos Testnet network',
        autoCheckAfterLogin: 'Automatically check status after successful login',
        manualCheckButton: 'Manual Status Check',
        claimButton: 'Claim Now!',
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
        status: 'Status',
        distributionId: 'Distribution ID',
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
      security: {
        title: '🛡️ Security Restrictions',
        walletCooldown: '• User Cooldown: Each wallet address can only claim once within 24 hours',
        ipLimit: '• IP Restriction: Each IP address can only claim once within 24 hours',
        twitterLimit: '• Twitter Restriction: Each Twitter account can only claim once within 24 hours',
        rateLimit: '• Rate Limit: Maximum 10 claim requests per hour',
        recaptcha: '• reCAPTCHA: Must pass Google reCAPTCHA v2 verification',
        twitterBinding: '• Twitter Binding: Must bind Twitter account to claim tokens'
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
        preparingTwitterConnection: '🔄 Preparing Twitter connection...',
        reAuthenticating: '🔑 Re-authenticating, please wait...',
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
        submittingClaim: 'Submitting token claim...',
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
        twitterBindingFailed: 'X account binding failed: {error}',
        walletConnected: 'Wallet Connected',
        walletDisconnected: 'Wallet disconnected',
        walletDisconnectedAppKit: 'Wallet disconnected',
        waitingWalletConnection: 'Waiting for wallet connection...',
        userCancelledTransaction: 'User cancelled signature',
        authFailed: 'Authentication failed, please reconnect wallet',
        authRateLimit: '⏰ Authentication requests too frequent, please try again later',
        accountSwitchDetected: '🔄 Account switch detected',
        newAccountAuthenticating: '🔄 Authenticating new account',
        twitterAlreadyConnected: '✅ Twitter is already connected!',
        twitterConnected: '✅ Twitter connected',
        signatureSuccess: 'Signature obtained successfully, calling contract...',
        waitingForAuth: 'Waiting for new account authentication to complete before checking Twitter status...',
        waitingForFaucetAuth: 'Waiting for new account authentication to complete before checking faucet status...',
        authRequired: '❌ Please complete wallet connection and signature authentication first!',
        autoLoginRequired: '🔑 Login required detected, automatically executing login process...',
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
        cooldown: 'Cooling down',
        hours: 'hours',
        minutes: 'minutes',
        seconds: 'seconds',
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
      faq: 'FAQ',
      wallet: 'Подключить кошелек',
      disconnect: 'Отключить',
      network: 'Сеть',
      faucet: 'Получить PHRS'
    },
    hero: {
      title: 'Ферма гусей · Сундуки · Объединение и прогресс',
      description: 'Игра с тапами и ожиданием—пусть Goosebox автоматически "несет яйца". Открывайте сундуки и выполняйте квесты для сбора осколков, объединяйте редкие предметы и зарабатывайте DIAMOND и Pharos.',
      playNow: 'Играть сейчас'
    },
    lucky: {
      title: 'Крути и выигрывай большие призы',
      subtitle: 'Присоединяйтесь к розыгрышу Goosebox. Крутите ежедневно и выигрывайте PHRS, ускорения и сюрпризы!',
      button: 'Крутить сейчас'
    },
    highlights: {
      idle: {
        title: 'Ферма гусей',
        description: 'Автоматическое виробництво яєць; легко отримуйте нагороди DIAMOND / Pharos.'
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
      title: 'Начать играть',
      subtitle: 'Начните в три шага. Легкая игра с ожиданием.',
      steps: [
        'Откройте <b>веб-версію</b> для входу в Goosebox',
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
      lucky: {
        question: 'Правила розыгрыша',
        answer: {
          rule1: 'Игроки могут получать попытки розыгрыша, выполняя задания ниже.',
          rule3: 'Период проведения: 1 сентября 2025 — 15 сентября 2025.',
          rule4: 'Окончательное право толкования данного события принадлежит GooseBox.'
        }
      },
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
          twitterStatus: 'Статус аккаунта X',
        claimTokens: 'Отримати тестові токени'
      },
        networkInfo: {
          title: 'Інформація про мережу',
          network: 'Мережа: Pharos Testnet (Chain ID: 688688)',
          dailyLimit: 'Денний ліміт: 0.1 PHRS',
          cooldown: 'Перезарядка: 24 години'
        },
        walletStatus: {
          integrated: 'Гаманець інтегрований, аутентифікація почнеться автоматично після підключення',
          connected: 'Гаманець підключено',
          waiting: 'Очікування підключення гаманця...',
          disconnected: 'Гаманець відключено',
          switchingAccount: 'Виявлено зміну облікового запису',
          newAccountAuth: 'Аутентифікація нового облікового запису'
      },
      twitter: {
        connectButton: 'Підключити Twitter',
          disconnectButton: 'Відключити Twitter',
          alreadyConnected: 'Twitter вже підключено!',
          twitterInfo: 'Інформація Twitter:',
          username: 'Ім\'я користувача',
          displayName: 'Відображуване ім\'я',
          verified: 'Статус верифікації',
          followers: 'Підписники',
          connectedAt: 'Підключено',
          bindingSuccess: 'Аккаунт Twitter успішно прив\'язано!',
          disconnectSuccess: 'Підключення Twitter відключено!',
          authRequired: 'Спочатку завершіть підключення гаманця та аутентифікацію підпису!',
          operationSteps: 'Кроки операції:',
          step1: '1. Натисніть кнопку "Підключити гаманець"',
          step2: '2. Завершіть аутентифікацію підпису гаманця',
          step3: '3. Потім натисніть "Підключити Twitter"',
          checkingStatus: 'Перевірка статусу підключення Twitter...',
          reloginRequired: 'Виявлено необхідність повторного входу, автоматично виконується процес входу...',
          signingMessage: 'Запит підпису гаманця...',
          verifyingSignature: 'Перевірка підпису та вхід...',
          autoLoginSuccess: 'Автоматичний вхід успішний, запуск авторизації Twitter...',
          statusCheckPassed: 'Перевірка статусу пройдена, запуск авторизації Twitter...',
          userCancelledSignature: 'Користувач скасував підпис гаманця',
          reconnectInstructions: 'Підключення Twitter вимагає повторної підписи для перевірки особистості.',
          solution: 'Рішення:',
          retryInstruction: 'Натисніть "Підключити Twitter" ще раз і підтвердіть підпис у спливаючому вікні гаманця.',
          tooManyRequests: 'Занадто багато запитів',
          waitAndRetry: 'Сервер отримав занадто багато запитів, зачекайте кілька хвилин і спробуйте знову',
          serviceUnavailable: 'Сервіс Twitter тимчасово недоступний',
          contactAdmin: 'Спробуйте пізніше або зверніться до адміністратора',
          connectionFailed: 'Не вдалося підключитися до X'
      },
      claim: {
          instructions: 'Інструкції по отриманню',
          instruction1: '• Кожна адреса гаманця може отримувати тільки раз в 24 години',
          instruction2: '• 0.1 PHRS тестових токенів за отримання',
          instruction3: '• Потрібен вхід по підпису та верифікація reCAPTCHA',
          instruction4: '• Рекомендується прив\'язати аккаунт Twitter для кращого сервісу',
          instruction5: '• Використовуйте підключення гаманця',
          instruction6: '• Переконайтеся, що знаходитесь в мережі Pharos Testnet',
          autoCheckAfterLogin: 'Автоматична перевірка статусу після успішного входу',
          manualCheckButton: 'Ручна перевірка статусу',
          claimButton: 'Отримати токени',
          cooldownTime: 'Перезарядка',
          checkingStatus: 'Перевірка статусу крану...',
          autoCheckingStatus: 'Автоматична перевірка статусу крану...',
          claimStatus: 'Статус отримання',
          canClaim: 'Можна отримати',
          cannotClaim: 'Тимчасово не можна отримати',
          userStatus: 'Статус користувача',
          ipStatus: 'Статус IP',
          twitterStatus: 'Статус Twitter',
          rateLimit: 'Обмеження швидкості',
          address: 'Адреса',
          bound: 'Прив\'язано',
          unbound: 'Не прив\'язано',
          cooldownRemaining: 'Залишок перезарядки',
          allowedRequests: 'Дозволені запити',
          remaining: 'Залишилося',
          yes: 'Так',
          no: 'Ні',
          hours: 'годин',
          minutes: 'хвилин',
          seconds: 'секунд',
          claimingTokens: 'Отримання підпису...',
          contractCalling: 'Підпис отримано успішно, виклик контракту...',
          claimInfo: 'Інформація про отримання',
          amount: 'Сума',
          status: 'Статус',
          distributionId: 'ID розподілу',
          waitingConfirmation: 'Транзакція відправлена, очікування підтвердження...',
          transactionHash: 'Хеш транзакції',
          notifyingServer: 'Повідомлення сервера про успішне виконання контракту...',
          claimSuccess: 'Токени успішно отримано!',
          transactionInfo: 'Інформація про транзакцію',
          blockNumber: 'Номер блоку',
          gasUsed: 'Використано газу',
          claimAmount: 'Сума отримання',
                  cooldownStarted: '24-годинний період очікування почався'
      },
      security: {
        title: '🛡️ Обмеження безпеки',
        walletCooldown: '• Час очікування користувача: Кожна адреса гаманця може подавати запит лише раз на 24 години',
        ipLimit: '• Обмеження IP: Кожна IP-адреса може подавати запит лише раз на 24 години',
        twitterLimit: '• Обмеження Twitter: Кожен обліковий запис Twitter може подавати запит лише раз на 24 години',
        rateLimit: '• Обмеження швидкості: Максимум 10 запитів на годину',
        recaptcha: '• reCAPTCHA: Необхідно пройти перевірку Google reCAPTCHA v2',
        twitterBinding: '• Прив\'язка Twitter: Необхідно прив\'язати обліковий запис Twitter для отримання токенів'
      },
        errors: {
          loginRequired: 'Спочатку увійдіть в систему',
          recaptchaRequired: 'Спочатку завершіть верифікацію reCAPTCHA',
          walletRequired: 'Підключіть гаманець',
          authRequired: 'Спочатку завершіть підключення гаманця та аутентифікацію підпису',
          userRejected: 'Користувач скасував транзакцію',
          insufficientFunds: 'Недостатньо коштів на рахунку для оплати газу',
          cooldownNotMet: 'Період очікування не минув, спробуйте через 24 години',
          invalidSignature: 'Перевірка підпису не вдалася',
          nonceUsed: 'Підпис вже використано',
          addressMismatch: 'Поточна адреса гаманця не відповідає адресі підпису',
          dependencyFailed: 'ethers.js не вдалося завантажити, обновите сторінку',
          networkError: 'Помилка мережі, перевірте підключення',
          serverError: 'Помилка сервера, спробуйте пізніше'
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
        dependencyLoadFailed: 'Не вдалося завантажити залежності, оновіть сторінку',
        twitterBindingFailed: 'Не вдалося зв\'язати X аккаунт: {error}',
        twitterConnected: '✅ Успішна автентифікація Twitter',
        twitterAlreadyConnected: '✅ Twitter вже підключено!',
        signatureSuccess: 'Підпис отримано успішно, виклик контракту...',
        waitingForAuth: 'Очікування завершення аутентифікації нового облікового запису перед перевіркою статусу Twitter...',
        waitingForFaucetAuth: 'Очікування завершення аутентифікації нового облікового запису перед перевіркою статусу крану...',
        authRequired: '❌ Спочатку завершіть підключення гаманця та аутентифікацію підпису!',
        autoLoginRequired: '🔑 Виявлено необхідність входу, автоматично виконується процес входу...',
        twitterServiceCheck: 'Спочатку перевірте доступність сервісу Twitter',
        reconnectInstructions: 'Підключення Twitter вимагає повторної підписи для перевірки особистості.',
        retryInstruction: 'Натисніть "Підключити Twitter" ще раз і підтвердіть підпис у спливаючому вікні гаманця.',
        getSignatureFailed: 'Не вдалося отримати підпис',
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
        autoLoginRequired: '🔑 Обнаружена необходимость входа, автоматически выполняется процесс входа...',
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
        cooldown: 'Ожидание',
        hours: 'часов',
        minutes: 'минут',
        seconds: 'секунд',
        error: 'Ошибка',
        notice: 'Примечание:',
        tokenClaimedButCooldownMayNotSet: 'Токены успешно получены, но период ожидания может быть установлен неправильно',
        confirmError: 'Ошибка подтверждения',
        twitterAuthFailed: 'Авторизация Twitter не удалась',
        twitterBindingFailed: 'Не удалось привязать аккаунт X : {error}',
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

  id: {
    title: 'Goosebox — Peternakan angsa',
    subtitle: 'Peternakan angsa · Permainan kasual',
    nav: {
      home: 'Beranda',
      highlights: 'Sorotan',
      play: 'Mulai Bermain',
      faq: 'FAQ',
      wallet: 'Hubungkan Dompet',
      disconnect: 'Putuskan',
      network: 'Jaringan',
      faucet: 'Dapatkan PHRS'
    },
    hero: {
      title: 'Peternakan angsa · Peti jatuh · Gabung & maju',
      description: 'Gameplay tap-dan-tunggu—biarkan Goosebox otomatis "bertelur". Buka peti dan selesaikan quest untuk mengumpulkan pecahan, gabungkan item langka, dan dapatkan DIAMOND & Pharos.',
      playNow: 'Main Sekarang'
    },
    lucky: {
      title: 'Putar & Menangkan Hadiah Besar',
      subtitle: 'Ikuti Undian Berhadiah Goosebox. Putar setiap hari untuk PHRS, item, dan kejutan!',
      button: 'Putar Sekarang'
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
      lucky: {
        question: 'Aturan Undian Berhadiah',
        answer: {
          rule1: 'Pemain dapat memperoleh kesempatan undian dengan menyelesaikan tugas di bawah ini.',
          rule3: 'Periode acara: 1 September 2025 – 15 September 2025.',
          rule4: 'Hak interpretasi akhir acara ini berada pada GooseBox.'
        }
      },
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
          twitterStatus: 'Status Akun X',
        claimTokens: 'Klaim Token Testnet'
      },
        networkInfo: {
          title: 'Informasi Jaringan',
          network: 'Jaringan: Pharos Testnet (Chain ID: 688688)',
          dailyLimit: 'Batas Harian: 0.1 PHRS',
          cooldown: 'Waktu Tunggu: 24 jam'
        },
        walletStatus: {
          integrated: 'Dompet terintegrasi, autentikasi akan dimulai secara otomatis setelah koneksi',
          connected: 'Dompet Terhubung',
          waiting: 'Menunggu koneksi dompet...',
          disconnected: 'Dompet terputus',
          switchingAccount: 'Terdeteksi pergantian akun',
          newAccountAuth: 'Mengautentikasi akun baru'
      },
      twitter: {
        connectButton: 'Hubungkan Twitter',
          disconnectButton: 'Putuskan Twitter',
          alreadyConnected: 'Twitter sudah terhubung!',
          twitterInfo: 'Info Twitter:',
          username: 'Nama pengguna',
          displayName: 'Nama tampilan',
          verified: 'Status verifikasi',
          followers: 'Pengikut',
          connectedAt: 'Terhubung pada',
          bindingSuccess: 'Akun Twitter berhasil dihubungkan!',
          disconnectSuccess: 'Koneksi Twitter terputus!',
          authRequired: 'Harap selesaikan koneksi dompet dan autentikasi tanda tangan terlebih dahulu!',
          operationSteps: 'Langkah Operasi:',
          step1: '1. Klik tombol "Hubungkan Dompet"',
          step2: '2. Selesaikan autentikasi tanda tangan dompet',
          step3: '3. Kemudian klik "Hubungkan Twitter"',
          checkingStatus: 'Memeriksa status koneksi Twitter...',
          reloginRequired: 'Terdeteksi perlu login ulang, secara otomatis menjalankan proses login...',
          signingMessage: 'Meminta tanda tangan dompet...',
          verifyingSignature: 'Memverifikasi tanda tangan dan login...',
          autoLoginSuccess: 'Auto-login berhasil, memulai otorisasi Twitter...',
          statusCheckPassed: 'Pemeriksaan status berhasil, memulai otorisasi Twitter...',
          userCancelledSignature: 'Pengguna membatalkan tanda tangan dompet',
          reconnectInstructions: 'Menghubungkan Twitter memerlukan penandatanganan ulang untuk memverifikasi identitas.',
          solution: 'Solusi:',
          retryInstruction: 'Silakan klik "Hubungkan Twitter" lagi dan konfirmasi tanda tangan di popup dompet.',
          tooManyRequests: 'Terlalu banyak permintaan',
          waitAndRetry: 'Server menerima terlalu banyak permintaan, silakan tunggu beberapa menit dan coba lagi',
          serviceUnavailable: 'Layanan Twitter sementara tidak tersedia',
          contactAdmin: 'Silakan coba lagi nanti atau hubungi administrator',
          connectionFailed: 'Koneksi X gagal'
      },
      claim: {
          instructions: 'Instruksi Klaim',
          instruction1: '• Setiap alamat dompet hanya dapat klaim sekali setiap 24 jam',
          instruction2: '• 0.1 PHRS token uji per klaim',
          instruction3: '• Memerlukan login tanda tangan dan verifikasi reCAPTCHA',
          instruction4: '• Direkomendasikan menghubungkan akun Twitter untuk layanan yang lebih baik',
          instruction5: '• Gunakan koneksi dompet',
          instruction6: '• Pastikan berada di jaringan Pharos Testnet',
          autoCheckAfterLogin: 'Secara otomatis memeriksa status setelah login berhasil',
          manualCheckButton: 'Pemeriksaan Status Manual',
          claimButton: 'Klaim Token',
          cooldownTime: 'Waktu tunggu',
          checkingStatus: 'Memeriksa status keran...',
          autoCheckingStatus: 'Otomatis memeriksa status keran...',
          claimStatus: 'Status Klaim',
          canClaim: 'Dapat klaim',
          cannotClaim: 'Sementara tidak dapat klaim',
          userStatus: 'Status Pengguna',
          ipStatus: 'Status IP',
          twitterStatus: 'Status Twitter',
          rateLimit: 'Batas Kecepatan',
          address: 'Alamat',
          bound: 'Terhubung',
          unbound: 'Tidak terhubung',
          cooldownRemaining: 'Waktu tunggu tersisa',
          allowedRequests: 'Permintaan yang Diizinkan',
          remaining: 'Tersisa',
          yes: 'Ya',
          no: 'Tidak',
          hours: 'jam',
          minutes: 'menit',
          seconds: 'detik',
          claimingTokens: 'Mendapatkan tanda tangan...',
          contractCalling: 'Tanda tangan berhasil diperoleh, memanggil kontrak...',
          claimInfo: 'Info Klaim',
          amount: 'Jumlah',
          status: 'Status',
          distributionId: 'ID Distribusi',
          waitingConfirmation: 'Transaksi dikirim, menunggu konfirmasi...',
          transactionHash: 'Hash Transaksi',
          notifyingServer: 'Memberitahu server tentang eksekusi kontrak yang berhasil...',
          claimSuccess: 'Token berhasil diklaim!',
          transactionInfo: 'Info Transaksi',
          blockNumber: 'Nomor Blok',
          gasUsed: 'Gas Digunakan',
          claimAmount: 'Jumlah Klaim',
                  cooldownStarted: 'Waktu tunggu 24 jam dimulai'
      },
      security: {
        title: '🛡️ Pembatasan Keamanan',
        walletCooldown: '• Cooldown Pengguna: Setiap alamat dompet hanya dapat mengklaim sekali dalam 24 jam',
        ipLimit: '• Pembatasan IP: Setiap alamat IP hanya dapat mengklaim sekali dalam 24 jam',
        twitterLimit: '• Pembatasan Twitter: Setiap akun Twitter hanya dapat mengklaim sekali dalam 24 jam',
        rateLimit: '• Batas Laju: Maksimal 10 permintaan klaim per jam',
        recaptcha: '• reCAPTCHA: Harus lulus verifikasi Google reCAPTCHA v2',
        twitterBinding: '• Ikatan Twitter: Harus mengikat akun Twitter untuk mengklaim token'
      },
        errors: {
          loginRequired: 'Harap login terlebih dahulu',
          recaptchaRequired: 'Harap selesaikan verifikasi reCAPTCHA terlebih dahulu',
          walletRequired: 'Harap hubungkan dompet',
          authRequired: 'Harap selesaikan koneksi dompet dan autentikasi tanda tangan terlebih dahulu',
          userRejected: 'Pengguna membatalkan transaksi',
          insufficientFunds: 'Saldo akun tidak cukup untuk membayar biaya gas',
          cooldownNotMet: 'Periode waktu tunggu belum terpenuhi, silakan coba lagi dalam 24 jam',
          invalidSignature: 'Verifikasi tanda tangan gagal',
          nonceUsed: 'Tanda tangan sudah digunakan',
          addressMismatch: 'Alamat dompet saat ini tidak cocok dengan alamat tanda tangan',
          dependencyFailed: 'ethers.js gagal dimuat, silakan segarkan halaman',
          networkError: 'Kesalahan jaringan, silakan periksa koneksi',
          serverError: 'Kesalahan server, silakan coba lagi nanti'
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
        twitterConnected: '✅ Pengautentikasian Twitter berhasil',
        dependencyLoadFailed: 'Gagal memuat dependensi, silakan muat ulang halaman',
        twitterBindingFailed: 'Gagal menghubungkan akun X: {error}',
        cooldown: 'Menunggu',
        hours: 'jam',
        minutes: 'menit',
        seconds: 'detik',
        authRequired: '❌ Harap selesaikan koneksi dompet dan autentikasi tanda tangan terlebih dahulu!',
        autoLoginRequired: '🔑 Login diperlukan terdeteksi, secara otomatis menjalankan proses login...',
        twitterAlreadyConnected: '✅ Twitter sudah terhubung!',
        signatureSuccess: 'Tanda tangan berhasil diperoleh, memanggil kontrak...',
        waitingForAuth: 'Menunggu autentikasi akun baru selesai sebelum memeriksa status Twitter...',
        waitingForFaucetAuth: 'Menunggu autentikasi akun baru selesai sebelum memeriksa status keran...',
        twitterServiceCheck: 'Periksa apakah layanan Twitter tersedia terlebih dahulu',
        reconnectInstructions: 'Menghubungkan Twitter memerlukan penandatanganan ulang untuk memverifikasi identitas.',
        retryInstruction: 'Silakan klik "Hubungkan Twitter" lagi dan konfirmasi tanda tangan di popup dompet.',
        getSignatureFailed: 'Gagal mendapatkan tanda tangan',
        walletConnected: 'Koek Terhubung',
        walletDisconnected: 'Koek terputus',
        walletDisconnectedAppKit: 'Koek AppKit terputus',
        waitingWalletConnection: 'Menunggu koneksi dompet...',
        userCancelledTransaction: 'Pengguna membatalkan tanda tangan',
        authFailed: 'Otentikasi gagal, silakan hubungkan ulang dompet',
        accountSwitchDetected: '🔄 Terdeteksi pergantian akun',
        newAccountAuthenticating: '🔄 Mengotentikasi akun baru',
        twitterAlreadyConnected: '✅ Twitter sudah terhubung!',
        twitterConnected: '✅ Twitter terhubung',
        signatureSuccess: 'Tanda tangan berhasil diperoleh, memanggil kontrak...',
        waitingForAuth: 'Menunggu autentikasi akun baru selesai sebelum memeriksa status Twitter...',
        waitingForFaucetAuth: 'Menunggu autentikasi akun baru selesai sebelum memeriksa status keran...',
        authRequired: '❌ Harap selesaikan koneksi dompet dan autentikasi tanda tangan terlebih dahulu!',
        autoLoginRequired: '🔑 Login diperlukan terdeteksi, secara otomatis menjalankan proses login...',
        dependencyLoadFailed: 'Gagal memuat dependensi, silakan muat ulang halaman',
        twitterServiceCheck: 'Periksa apakah layanan Twitter tersedia terlebih dahulu',
        reconnectInstructions: 'Menghubungkan Twitter memerlukan penandatanganan ulang untuk memverifikasi identitas.',
        retryInstruction: 'Silakan klik "Hubungkan Twitter" lagi dan konfirmasi tanda tangan di popup dompet.',
        getSignatureFailed: 'Gagal mendapatkan tanda tangan',
        twitterInfo: 'Info Twitter:',
        username: 'Nama pengguna',
        displayName: 'Nama tampilan',
        verified: 'Status verifikasi',
        followers: 'Pengikut',
        connectedAt: 'Terhubung pada',
        yes: 'Ya',
        no: 'Tidak',
        verified_: 'Terverifikasi',
        unverified: 'Tidak terverifikasi',
        faucetUser: 'Pengguna Keran:',
        wallet: 'Dompet',
        transactionInfo: 'Info Transaksi:',
        transactionHash: 'Hash Transaksi',
        blockNumber: 'Nomor Blok',
        gasUsed: 'Gas Digunakan',
        claimAmount: 'Jumlah Klaim',
        cooldownStarted: 'Waktu tunggu 24 jam dimulai',
        error: 'Kesalahan',
        notice: 'Perhatikan:',
        tokenClaimedButCooldownMayNotSet: 'Token berhasil diklaim, tetapi waktu tunggu mungkin tidak diatur dengan benar',
        confirmError: 'Kesalahan Konfirmasi',
        twitterAuthFailed: 'Otorisasi Twitter gagal',
        twitterConnectionFailed: '❌ Koneksi X gagal',
        twitterAuthSuccess: '✅ Otorisasi Twitter berhasil!',
        twitterBindingSuccess: 'Akun Twitter berhasil dihubungkan!',
        processingBinding: 'Parameter callback otorisasi terdeteksi, memproses penghubungan...',
        callbackInfo: 'Info Callback:',
        bindingNotice: 'Jika penghubungan gagal, pastikan dompet terhubung dan autentikasi tanda tangan selesai.',
        unknownError: 'Kesalahan tidak diketahui',
        retryLater: 'Silakan coba lagi nanti, atau hubungi administrator.',
        status: 'Status',
        code: 'Kode',
        none: 'Tidak ada'
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


