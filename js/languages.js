// 所有语言包集中在一个文件中，避免CORS问题
const languagePacks = {
  zh: {
    title: 'Goosebox — 鹅场挂机养成',
    subtitle: '鹅场挂机养成 · Idle Goose',
    nav: {
      home: '主页',
      highlights: '亮点',
      play: '开始游戏',
      faq: 'FAQ'
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
    }
  },

  en: {
    title: 'Goosebox — Idle Goose Farm',
    subtitle: 'Idle Goose Farm · Casual Game',
    nav: {
      home: 'Home',
      highlights: 'Highlights',
      play: 'Start Playing',
      faq: 'FAQ'
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
