/* =========================================================
   デイサービスあすなろ諫早 サイトデータ
   - DEFAULT_DATA: 初期表示内容（このファイルを直接編集してもOK）
   - localStorage("asunaroSiteData") に管理画面の変更が保存され、
     初期値より優先されます
   ========================================================= */

const ASUNARO_STORAGE_KEY = "asunaroSiteData";

const DEFAULT_DATA = {
  site: {
    name: "デイサービスあすなろ諫早",
    nameEn: "Day service Asunaro Isahaya",
    company: "株式会社ワームス",
    catchcopy: "記憶に残る人生を、共に",
    tel: "0957-47-9850",
    fax: "0957-47-9860",
    zip: "854-0055",
    address: "長崎県諫早市栗面町176番地2　KIZUNAビル",
    email: "d.asunaro@warms-isahaya.com",
    hours: "月曜日～土曜日、祝日（9：30～15：30）",
    capacity: "18名（地域密着型・少人数制）",
    target: "諫早市にお住まいの65歳以上の要支援、または要介護の認定を受けている方",
    meal: "食事代（500円）おやつ代込み",
    sougei: "送迎あります（諫早市全域）"
  },
  sns: {
    instagram: "https://www.instagram.com/dayasunaro.isahaya",
    facebook: ""   // 空欄の間はアイコンに「準備中」と表示されます
  },
  hero: {
    title: "デイサービスあすなろ諫早",
    sub: "記憶に残る人生を、共に",
    photo: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1800&q=80&auto=format&fit=crop"
  },
  intro: {
    heading: "季節の移ろいを感じながら、\n穏やかな一日を過ごしてみませんか？",
    body: "あすなろ諫早は、定員18名の地域密着型デイサービス。少人数だからこそ、お一人お一人に寄り添ったきめ細かなケアと、フットワークの軽い外出レクリエーションが自慢です。\nドライブや季節の名所めぐりなど外に出かける機会を多く設け、地域との交流を大切にしながら、これまでの生活リズムを続けて毎日楽しく過ごしていただけるようサポートします。",
    photo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&q=80&auto=format&fit=crop"
  },
  services: [
    {
      id: "rehab",
      title: "生活リハビリ",
      en: "Rehabilitation",
      body: "自立した生活を送れる事を目的としたものです。\n日常生活全般の動作を行えるようにするリハビリを行い、生活の中での動作や活動を支援し、着替えやトイレ、入浴など少しでも利用者様が自分でできるように支援を行います。\n当施設では、広々としたフロアを完備。充実したリハビリが行える環境が整っています。リハビリの後はマッサージで体を整えます。",
      photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&q=80&auto=format&fit=crop"
    },
    {
      id: "aroma",
      title: "アロマセラピー・マッサージ",
      en: "Aromatherapy / Massage",
      body: "光がふりそそぐ明るい雰囲気の中で、心身の癒しに役立つアロマを使ったマッサージをおこないリラックス。\nアロマのいい香りを嗅ぎ、心のケア、認知症の予防もおこなっていきます。",
      photo: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop"
    },
    {
      id: "outing",
      title: "外出レクリエーション",
      en: "Outing",
      body: "定員18名の少人数だからこそ、思い立ったらすぐ出かけられるのが、あすなろ諫早の強みです。\n季節の花や景色を眺めるドライブ、なじみのお店への買い物、地域の行事への参加など、外に出かける機会をたくさんご用意。「家に閉じこもりがち」を防ぎ、心と体の元気を引き出します。",
      list: ["季節の名所めぐりドライブ", "お花見・紅葉狩り", "買い物ツアー", "公園での散策・青空ティータイム", "地域行事・お祭りへの参加", "初詣・神社仏閣めぐり", "外食レク（お寿司・うなぎなど）"],
      photo: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1200&q=80&auto=format&fit=crop"
    },
    {
      id: "leisure",
      title: "余暇を楽しむ",
      en: "Leisure time",
      body: "折り紙による創作活動、手芸教室や料理教室など、仲間と一緒に楽しみましょう。\nそのほか、季節にあわせた沢山のイベントを行っています。",
      list: ["演奏会", "筆ペン教室", "節分の豆まき", "バレンタインデー チョコ作り", "クリスマスケーキ作り", "年末年始の参拝"],
      photo: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&q=80&auto=format&fit=crop"
    }
  ],
  bath: {
    title: "入　浴",
    body: "介護用のシャワーチェアなど入浴設備を完備。\n自力での入浴が困難な方に、専門スタッフによる安心の入浴介助。お一人お一人に合った入浴ができます。",
    photo: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80&auto=format&fit=crop"
  },
  transport: {
    title: "送　迎",
    body: "諫早市内全域に対応した送迎サービス。\n利用者様のお宅を回り、自宅前までお迎えにあがります。\n車椅子用の送迎車両もございます。",
    photo: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80&auto=format&fit=crop"
  },
  schedule: [
    { time: "9:30", title: "自宅までお迎え", desc: "あすなろ諫早に到着" },
    { time: "午前", title: "体調確認・体操・入浴など", desc: "体調を確認し朝の体操からはじまり、入浴など行います" },
    { time: "12:00", title: "昼食", desc: "あすなろ諫早にて昼食をとります" },
    { time: "午後", title: "機能訓練", desc: "個別・集団で機能訓練等を行います" },
    { time: "15:30", title: "自宅までお送り", desc: "ご帰宅" }
  ],
  philosophy: {
    heading: "基本理念",
    lead: "私たちは「ご利用者の人権と尊厳を守り、自由で質の高い生活を実現する福祉」を目指します。",
    items: [
      "ご利用者がその人らしい生活を送ることができるケアを提供します。",
      "ご利用者に真心と笑顔で接し、心が和むケアを提供します。",
      "スタッフの専門技能の向上に努め、より良いケアを提供します。"
    ]
  },
  greeting: {
    heading: "代表挨拶",
    body: "日本では少子高齢化が急速に進み、65歳以上の高齢者は3割に達しようとしています。\nこれにより、医療・介護費を中心に社会保障に関する給付と負担のアンバランスは一層強くなり、高齢者に対する国の政策は後手に回っているように感じます。\nこれまで日本を支えてこられた高齢者の皆さんが介護を必要となられた時、少しでもお役に立ちたい。そして、尊い職務にプライドを持って従事する介護職の皆さんの地位向上のために努力したい。その思いから、介護福祉の世界に身を置くことに致しました。\nどうぞよろしくお願い致します。",
    sign1: "株式会社ワームス",
    sign2: "代表取締役　馬場　洋平",
    photo: ""
  },
  partners: [
    {
      name: "デイサービス　ハーモニー・きずな",
      tag: "",
      desc: "諫早市のデイサービス。笑顔と自信を引き出すお手伝い。",
      url: "https://harmony-kizuna.jp/",
      logo: ""
    },
    {
      name: "株式会社トラネス",
      tag: "",
      desc: "訪問看護ステーションあすなろ\nケアプランセンターあすなろ\nヘルパーステーションあすなろ\nデイサービスあすなろ",
      url: "",
      logo: ""
    },
    {
      name: "株式会社HubLinX",
      tag: "",
      desc: "",
      url: "",
      logo: ""
    },
    {
      name: "株式会社ハッピーデイズ",
      tag: "フランチャイズグループ",
      desc: "訪問看護ステーションあすなろキッズ",
      url: "",
      logo: ""
    }
  ],
  documents: [
    // 管理画面「書類・情報公開」からファイルを追加できます
    // {title, desc, date, filename, mime, size, data(dataURL)}
  ],
  news: [
    { date: "2026-09-01", title: "ホームページを開設しました", body: "デイサービスあすなろ諫早のホームページを開設いたしました。今後ともよろしくお願いいたします。" },
    { date: "2026-08-01", title: "見学・体験利用受付中", body: "随時、見学・体験利用を受け付けております。お気軽にお電話ください。" }
  ]
};

/* localStorage の保存値と初期値をマージして返す */
function loadSiteData() {
  // 初期値 → 公開済みデータ(LIVE_DATA) → このブラウザの編集(localStorage) の順に上書き
  let base = structuredClone(DEFAULT_DATA);
  if (typeof LIVE_DATA !== "undefined" && LIVE_DATA && Object.keys(LIVE_DATA).length) {
    base = deepMerge(base, structuredClone(LIVE_DATA));
  }
  try {
    const saved = JSON.parse(localStorage.getItem(ASUNARO_STORAGE_KEY) || "null");
    if (!saved) return base;
    return deepMerge(base, saved);
  } catch (e) {
    console.warn("保存データの読み込みに失敗しました", e);
    return base;
  }
}

function saveSiteData(data) {
  localStorage.setItem(ASUNARO_STORAGE_KEY, JSON.stringify(data));
}

function resetSiteData() {
  localStorage.removeItem(ASUNARO_STORAGE_KEY);
}

function deepMerge(base, over) {
  if (Array.isArray(over)) return over; // 配列は上書き
  if (over && typeof over === "object") {
    const out = { ...base };
    for (const k of Object.keys(over)) {
      out[k] = deepMerge(base ? base[k] : undefined, over[k]);
    }
    return out;
  }
  return over === undefined ? base : over;
}

/* =========================================================
   エラーログ
   - サイト・管理画面で起きたエラーを localStorage に記録
   - 管理画面の「エラーログ履歴」から閲覧・消去できます
   ========================================================= */
const ASUNARO_ERRLOG_KEY = "asunaroErrorLog";
const ERRLOG_MAX = 100;

function loadErrorLog() {
  try { return JSON.parse(localStorage.getItem(ASUNARO_ERRLOG_KEY) || "[]"); }
  catch (e) { return []; }
}

function clearErrorLog() {
  localStorage.removeItem(ASUNARO_ERRLOG_KEY);
}

function logSiteError(entry) {
  try {
    const log = loadErrorLog();
    const last = log[log.length - 1];
    const now = new Date().toISOString();
    // 直前と同じエラーが連続した場合は回数だけ増やす（ログの膨張防止）
    if (last && last.type === entry.type && last.message === entry.message &&
        last.source === entry.source &&
        (new Date(now) - new Date(last.lastTime || last.time)) < 60000) {
      last.count = (last.count || 1) + 1;
      last.lastTime = now;
    } else {
      log.push({
        time: now,
        page: location.pathname.endsWith("admin.html") ? "管理画面" : "ホームページ",
        type: entry.type,
        message: String(entry.message || "").slice(0, 300),
        source: String(entry.source || "").slice(0, 200),
        count: 1
      });
    }
    localStorage.setItem(ASUNARO_ERRLOG_KEY, JSON.stringify(log.slice(-ERRLOG_MAX)));
  } catch (e) { /* ログ保存自体の失敗は無視 */ }
}

/* エラーを自動収集 */
window.addEventListener("error", e => {
  if (e.target && e.target !== window && e.target.tagName) {
    // 画像などリソースの読み込み失敗
    const tag = e.target.tagName === "IMG" ? "画像" : e.target.tagName;
    logSiteError({ type: "読み込みエラー", message: `${tag}を読み込めませんでした`, source: e.target.src || e.target.href || "" });
  } else {
    logSiteError({ type: "スクリプトエラー", message: e.message, source: `${e.filename || ""}:${e.lineno || ""}` });
  }
}, true);
window.addEventListener("unhandledrejection", e => {
  logSiteError({ type: "非同期エラー", message: String(e.reason), source: "" });
});

/* 改行→<br> 変換（エスケープ付き） */
function nl2br(s) {
  const esc = String(s ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return esc.replace(/\n/g, "<br>");
}
