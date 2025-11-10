// 設定
const TYPE_MAP = {
    // 飲食関連
    "飲食": "restaurant",
    "飲食店": "restaurant",
    "レストラン": "restaurant",
    "居酒屋": "restaurant",
    "ラーメン": "restaurant",
    "寿司": "restaurant",
    "焼肉": "restaurant",
    "中華": "restaurant",
    "イタリアン": "restaurant",
    "フレンチ": "restaurant",
    "韓国料理": "restaurant",
    "タイ料理": "restaurant",
    "インド料理": "restaurant",
    "カフェ": "cafe",
    "喫茶店": "cafe",
    "コーヒー": "cafe",
    "パン": "bakery",
    "ケーキ": "bakery",
    "パティスリー": "bakery",
    "ベーカリー": "bakery",
    "ファストフード": "meal_takeaway",
    "バー": "bar",
    "スナック": "night_club",
    
    // 小売・ショッピング
    "コンビニ": "convenience_store",
    "スーパー": "supermarket",
    "スーパーマーケット": "supermarket",
    "デパート": "department_store",
    "百貨店": "department_store",
    "ショッピングモール": "shopping_mall",
    "書店": "book_store",
    "本屋": "book_store",
    "服": "clothing_store",
    "衣料品": "clothing_store",
    "アパレル": "clothing_store",
    "靴": "shoe_store",
    "電気屋": "electronics_store",
    "家電": "electronics_store",
    "薬局": "pharmacy",
    "ドラッグストア": "pharmacy",
    "花屋": "florist",
    "雑貨": "store",
    "家具": "furniture_store",
    "おもちゃ": "store",
    "スポーツ用品": "sporting_goods_store",
    "自転車": "bicycle_store",
    "釣具": "store",
    "楽器": "store",
    
    // 美容・健康
    "美容院": "beauty_salon",
    "理容室": "hair_care",
    "理髪店": "hair_care",
    "ヘアサロン": "beauty_salon",
    "エステ": "beauty_salon",
    "ネイルサロン": "beauty_salon",
    "マッサージ": "spa",
    "整体": "physiotherapist",
    "鍼灸": "physiotherapist",
    "接骨院": "physiotherapist",
    "整骨院": "physiotherapist",
    "歯科": "dentist",
    "歯医者": "dentist",
    "病院": "hospital",
    "クリニック": "health",
    "内科": "health",
    "眼科": "health",
    "皮膚科": "health",
    "整形外科": "health",
    "産婦人科": "health",
    "小児科": "health",
    "耳鼻科": "health",
    "心療内科": "health",
    "獣医": "veterinary_care",
    "動物病院": "veterinary_care",
    "ジム": "gym",
    "フィットネス": "gym",
    "スポーツクラブ": "gym",
    "温泉": "spa",
    "サウナ": "spa",
    "銭湯": "spa",
    
    // ペット関連
    "ペットサロン": "pet_store",
    "トリミングサロン": "pet_store",
    "ペットショップ": "pet_store",
    
    // 金融・サービス
    "銀行": "bank",
    "ATM": "atm",
    "郵便局": "post_office",
    "保険": "insurance_agency",
    "不動産": "real_estate_agency",
    "税理士": "accounting",
    "弁護士": "lawyer",
    "司法書士": "lawyer",
    "行政書士": "lawyer",
    
    // 交通・車関連
    "ガソリンスタンド": "gas_station",
    "駐車場": "parking",
    "レンタカー": "car_rental",
    "自動車修理": "car_repair",
    "車検": "car_repair",
    "タイヤ": "car_repair",
    "洗車": "car_wash",
    "タクシー": "taxi_stand",
    "バス停": "bus_station",
    "地下鉄": "subway_station",
    "電車": "train_station",
    "空港": "airport",
    
    // 宿泊・観光
    "ホテル": "lodging",
    "旅館": "lodging",
    "ビジネスホテル": "lodging",
    "民宿": "lodging",
    "ゲストハウス": "lodging",
    "旅行代理店": "travel_agency",
    "観光": "tourist_attraction",
    "博物館": "museum",
    "美術館": "museum",
    "動物園": "zoo",
    "水族館": "aquarium",
    "遊園地": "amusement_park",
    "公園": "park",
    "神社": "place_of_worship",
    "寺": "place_of_worship",
    "教会": "place_of_worship",
    
    // 教育・学習
    "学校": "school",
    "大学": "university",
    "塾": "school",
    "予備校": "school",
    "英会話": "school",
    "図書館": "library",
    "幼稚園": "school",
    "保育園": "school",
    "習い事": "school",
    "ピアノ教室": "school",
    "ダンス教室": "school",
    
    // エンターテイメント
    "映画館": "movie_theater",
    "カラオケ": "night_club",
    "ボウリング": "bowling_alley",
    "ゲームセンター": "amusement_center",
    "パチンコ": "casino",
    "競馬": "casino",
    "競輪": "casino",
    "競艇": "casino",
    
    // その他サービス
    "郵送": "post_office",
    "宅配": "post_office",
    "クリーニング": "laundry",
    "コインランドリー": "laundry",
    "写真": "store",
    "印刷": "store",
    "コピー": "store",
    "葬儀": "funeral_home",
    "墓地": "cemetery",
    "役所": "local_government_office",
    "消防署": "fire_station",
    "警察": "police",
    "郵便": "post_office"
};

// 都道府県・市区町村データ
const PREF_CITY = {
    "北海道": ["札幌市中央区", "札幌市北区", "札幌市東区", "札幌市南区", "札幌市西区"],
    "東京都": ["千代田区", "中央区", "港区", "新宿区", "渋谷区", "豊島区", "品川区", "目黒区", "世田谷区", "中野区"],
    "神奈川県": ["横浜市中区", "横浜市西区", "横浜市神奈川区", "川崎市川崎区", "川崎市幸区", "相模原市中央区", "藤沢市", "鎌倉市", "茅ヶ崎市"],
    "埼玉県": ["さいたま市大宮区", "さいたま市浦和区", "さいたま市中央区", "川口市", "所沢市", "越谷市", "草加市", "春日部市", "熊谷市"],
    "千葉県": ["千葉市中央区", "千葉市美浜区", "千葉市稲毛区", "船橋市", "柏市", "市川市", "松戸市", "流山市", "浦安市"],
    "大阪府": ["北区", "中央区", "浪速区", "天王寺区", "西淀川区", "東淀川区", "西成区", "住吉区"],
    "兵庫県": ["神戸市中央区", "神戸市灘区", "神戸市東灘区", "尼崎市", "西宮市", "芦屋市", "宝塚市", "伊丹市", "加古川市"],
    "京都府": ["京都市中京区", "京都市下京区", "京都市上京区", "京都市左京区", "京都市右京区", "宇治市", "亀岡市", "長岡京市"],
    "愛知県": ["名古屋市中区", "名古屋市東区", "名古屋市中村区", "名古屋市昭和区", "名古屋市瑞穂区", "名古屋市熱田区"],
    "静岡県": ["静岡市葵区", "静岡市駿河区", "静岡市清水区", "浜松市中区", "浜松市東区", "沼津市", "富士市", "藤枝市"],
    "福岡県": ["福岡市中央区", "福岡市博多区", "福岡市南区", "福岡市東区", "北九州市小倉北区", "北九州市八幡西区", "久留米市", "春日市"],
    "宮城県": ["仙台市青葉区", "仙台市宮城野区", "仙台市若林区", "仙台市太白区", "石巻市", "塩竈市", "気仙沼市", "白石市"],
    "広島県": ["広島市中区", "広島市南区", "広島市西区", "広島市東区", "福山市", "呉市", "東広島市", "尾道市"],
    "岡山県": ["岡山市北区", "岡山市中区", "岡山市東区", "岡山市南区", "倉敷市", "津山市", "玉野市", "笠岡市"]
};

// グローバル変数
let map;
let autocompleteService;
let placesService;
let searchResults = [];
let selectedPlace = null;
let isLoadingPlaceDetails = false;
let isSearching = false;
let searchAbortController = null;
let elements = {};

// DOM要素の初期化
function initializeElements() {
    elements = {
        prefecture: document.getElementById('prefecture'),
        city: document.getElementById('city'),
        storeName: document.getElementById('storeName'),
        suggestions: document.getElementById('suggestions'),
        keywords: document.getElementById('keywords'),
        radius: document.getElementById('radius'),
        radiusValue: document.getElementById('radiusValue'),
        minRating: document.getElementById('minRating'),
        ratingValue: document.getElementById('ratingValue'),
        minReviews: document.getElementById('minReviews'),
        reviewsValue: document.getElementById('reviewsValue'),
        maxResults: document.getElementById('maxResults'),
        maxResultsValue: document.getElementById('maxResultsValue'),
        searchDelay: document.getElementById('searchDelay'),
        searchDelayValue: document.getElementById('searchDelayValue'),
        searchBtn: document.getElementById('searchBtn'),
        stopSearchBtn: document.getElementById('stopSearchBtn'),
        loading: document.getElementById('loading'),
        results: document.getElementById('results'),
        resultsTable: document.getElementById('resultsTable'),
        resultCount: document.getElementById('resultCount'),
        exportCsvBtn: document.getElementById('exportCsvBtn'),
        showMap: document.getElementById('showMap'),
        clearResults: document.getElementById('clearResults'),
        mapContainer: document.getElementById('mapContainer'),
        // progressFill: document.getElementById('progressFill'),
        // progressText: document.getElementById('progressText'),
        filterInfo: document.getElementById('filterInfo'),
        totalSearched: document.getElementById('totalSearched'),
        duplicateRate: document.getElementById('duplicateRate'),
        searchToggle: document.getElementById('searchToggle'),
        searchPanel: document.querySelector('.search-panel'),
        resultsPanel: document.getElementById('resultsPanel')
    };
    
    // 要素が存在するかチェック
    for (const [key, element] of Object.entries(elements)) {
        if (!element) {
            console.error(`Element not found: ${key}`);
        }
    }
    
    // 初期状態の設定
    initializeMobileLayout();
}

// 初期化
function initMap() {
    // Google Maps APIの初期化
    autocompleteService = new google.maps.places.AutocompleteService();
    placesService = new google.maps.places.PlacesService(document.createElement('div'));
    
    // 地図の初期化
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 35.6762, lng: 139.6503 }, // 東京
        zoom: 13,
        styles: [
            {
                featureType: "poi",
                elementType: "labels",
                stylers: [{ visibility: "off" }]
            }
        ]
    });
    
    console.log('Google Maps API initialized');
}

// イベントリスナーの設定
function setupEventListeners() {
    // 都道府県変更
    elements.prefecture.addEventListener('change', updateCityOptions);
    
    // 店舗名入力
    const debouncedUpdateSuggestions = debounce(updateSuggestions, 300);
    elements.storeName.addEventListener('input', event => {
        const currentValue = event.target.value.trim();

        if (selectedPlace && selectedPlace.name !== currentValue) {
            selectedPlace = null;
            elements.storeName.placeholder = '店舗名を入力（例: スターバックス）';
        }

        debouncedUpdateSuggestions();
    });
    

    // スライダー値更新
    elements.radius.addEventListener('input', updateRadiusValue);
    elements.minRating.addEventListener('input', updateRatingValue);
    elements.minReviews.addEventListener('input', updateReviewsValue);
    elements.maxResults.addEventListener('input', updateMaxResultsValue);
    elements.searchDelay.addEventListener('input', updateSearchDelayValue);
    
    // 検索ボタン
    elements.searchBtn.addEventListener('click', performSearch);
    elements.stopSearchBtn.addEventListener('click', stopSearch);
    
    // 結果表示エリアのアクション
    elements.exportCsvBtn.addEventListener('click', async () => {
        if (window.detailedResults) {
            await exportToCSV(window.detailedResults);
        } else {
            alert('エクスポートする検索結果がありません。');
        }
    });
    
    // 地図表示
    elements.showMap.addEventListener('click', toggleMap);
    
    // 結果クリア
    elements.clearResults.addEventListener('click', clearResults);
    
    // 検索パネル切り替え（モバイル用）
    if (elements.searchToggle) {
        elements.searchToggle.addEventListener('click', toggleSearchPanel);
    }
    
    // 初期値設定
    updateRadiusValue();
    updateRatingValue();
    updateReviewsValue();
    updateMaxResultsValue();
    updateSearchDelayValue();
}

// モバイルレイアウト初期化
function initializeMobileLayout() {
    if (window.innerWidth <= 768) {
        // スマートフォンでは初期状態で検索パネルを非表示
        if (elements.searchPanel) {
            elements.searchPanel.classList.remove('active');
        }
        if (elements.resultsPanel) {
            elements.resultsPanel.classList.add('has-content');
        }
        if (elements.searchToggle) {
            elements.searchToggle.classList.remove('active');
        }
    }
}

// 検索パネル切り替え
function toggleSearchPanel() {
    if (elements.searchPanel && elements.searchToggle) {
        const isActive = elements.searchPanel.classList.contains('active');
        
        if (isActive) {
            // 検索パネルを閉じる
            elements.searchPanel.classList.remove('active');
            elements.searchToggle.classList.remove('active');
            elements.searchToggle.innerHTML = '<i class="fas fa-search"></i>';
            elements.searchToggle.title = '検索パネルを開く';
        } else {
            // 検索パネルを開く
            elements.searchPanel.classList.add('active');
            elements.searchToggle.classList.add('active');
            elements.searchToggle.innerHTML = '<i class="fas fa-times"></i>';
            elements.searchToggle.title = '検索パネルを閉じる';
        }
    }
}

// 市区町村オプション更新
function updateCityOptions() {
    const prefecture = elements.prefecture.value;
    const citySelect = elements.city;
    
    citySelect.innerHTML = '<option value="">指定なし</option>';
    
    if (prefecture && PREF_CITY[prefecture]) {
        PREF_CITY[prefecture].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
    
    // 店舗名の候補も更新
    updateSuggestions();
}

// 店舗名候補更新（Google Maps JavaScript API使用）
function updateSuggestions() {
    const query = elements.storeName.value.trim();
    const suggestionsDiv = elements.suggestions;
    
    if (query.length < 1) { // 1文字から検索開始
        suggestionsDiv.style.display = 'none';
        return;
    }
    
    // 地域バイアスを改善
    let bias = '';
    if (elements.prefecture.value) bias += elements.prefecture.value;
    if (elements.city.value) bias += elements.city.value;
    
    // 検索クエリを構築
    let searchQuery = query;
    if (bias) {
        searchQuery = `${query} ${bias}`;
    }
    
    const request = {
        input: searchQuery,
        types: ['establishment'],
        componentRestrictions: { country: 'jp' },
        language: 'ja',
        sessionToken: new google.maps.places.AutocompleteSessionToken() // セッショントークンで精度向上
    };
    
    autocompleteService.getPlacePredictions(request, (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && predictions) {
            displaySuggestions(predictions);
        } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
            // 結果がない場合は、より広い範囲で検索
            const fallbackRequest = {
                input: query,
                types: ['establishment'],
                componentRestrictions: { country: 'jp' },
                language: 'ja',
                sessionToken: new google.maps.places.AutocompleteSessionToken()
            };
            
            autocompleteService.getPlacePredictions(fallbackRequest, (fallbackPredictions, fallbackStatus) => {
                if (fallbackStatus === google.maps.places.PlacesServiceStatus.OK && fallbackPredictions) {
                    displaySuggestions(fallbackPredictions);
                } else {
                    suggestionsDiv.style.display = 'none';
                }
            });
        } else {
            console.warn('Autocomplete API error:', status);
            suggestionsDiv.style.display = 'none';
        }
    });
}

// 候補表示
function displaySuggestions(predictions) {
    const suggestionsDiv = elements.suggestions;
    suggestionsDiv.innerHTML = '';
    
    // 最大20件まで表示
    const maxSuggestions = Math.min(predictions.length, 20);
    
    for (let i = 0; i < maxSuggestions; i++) {
        const prediction = predictions[i];
        const item = document.createElement('div');
        item.className = 'suggestion-item';
        
        // 候補の表示を改善
        const description = prediction.description;
        const parts = description.split(', ');
        
        // 店舗名と住所を分けて表示
        const storeName = parts[0];
        const address = parts.slice(1).join(', ');
        
        item.innerHTML = `
            <div class="suggestion-name">${storeName}</div>
            <div class="suggestion-address">${address}</div>
        `;
        
        item.addEventListener('click', async () => {
            elements.storeName.value = storeName; // 店舗名のみ設定
            suggestionsDiv.style.display = 'none';

            const searchButtonPreviouslyDisabled = elements.searchBtn.disabled;

            isLoadingPlaceDetails = true;

            // ローディング表示
            elements.storeName.disabled = true;
            elements.storeName.placeholder = '店舗情報を取得中...';
            elements.searchBtn.disabled = true;

            try {
                // 店舗の詳細情報を取得
                const placeDetails = await getPlaceDetails(prediction.place_id);
                selectedPlace = placeDetails;

                console.log('基準店舗を選択しました:', placeDetails.name);
                console.log('座標:', placeDetails.geometry.location.lat(), placeDetails.geometry.location.lng());

                // プレースホルダー更新
                elements.storeName.placeholder = `${placeDetails.name} (選択済み)`;

            } catch (error) {
                console.error('店舗詳細の取得に失敗:', error);
                alert('店舗情報の取得に失敗しました。再度お試しください。');
                elements.storeName.value = '';
                elements.storeName.placeholder = '店舗名を入力（例: スターバックス）';
                selectedPlace = null;
            } finally {
                elements.storeName.disabled = false;
                isLoadingPlaceDetails = false;
                elements.searchBtn.disabled = searchButtonPreviouslyDisabled || isSearching;
            }
        });
        
        item.addEventListener('mouseenter', () => {
            item.classList.add('suggestion-hover');
        });
        
        item.addEventListener('mouseleave', () => {
            item.classList.remove('suggestion-hover');
        });
        
        suggestionsDiv.appendChild(item);
    }
    
    // 候補数が多い場合の表示
    if (predictions.length > maxSuggestions) {
        const moreItem = document.createElement('div');
        moreItem.className = 'suggestion-more';
        moreItem.textContent = `他 ${predictions.length - maxSuggestions} 件...`;
        suggestionsDiv.appendChild(moreItem);
    }
    
    suggestionsDiv.style.display = 'block';
}

// スライダー値更新
function updateRadiusValue() {
    const value = elements.radius.value;
    elements.radiusValue.textContent = `${value}m`;
}

function updateRatingValue() {
    const value = parseFloat(elements.minRating.value);
    elements.ratingValue.textContent = value < 5 ? `${value}以下` : '指定なし';
}

function updateReviewsValue() {
    const value = parseInt(elements.minReviews.value);
    elements.reviewsValue.textContent = value < 1000 ? `${value}件以下` : '指定なし';
}

function updateMaxResultsValue() {
    const value = elements.maxResults.value;
    elements.maxResultsValue.textContent = `${value}件`;
}

function updateSearchDelayValue() {
    const value = elements.searchDelay.value;
    elements.searchDelayValue.textContent = `${value}秒`;
}

// フリーワード検索ユーティリティ
function parseFreeWordInput(rawInput) {
    const normalized = (rawInput || '')
        .replace(/\u3000/g, ' ')
        .replace(/[、，；；]/g, ',');

    const segments = normalized
        .split(/\r?\n/)
        .flatMap(line => line.match(/"[^"]+"|[^,]+/g) || [])
        .map(token => token.replace(/^"|"$/g, '').trim())
        .filter(Boolean);

    const expanded = segments.flatMap(token => {
        const parts = tokenizeKeyword(token);
        return parts.length > 1 ? [token, ...parts] : [token];
    });

    return Array.from(new Set(expanded));
}

function tokenizeKeyword(keyword) {
    return (keyword || '')
        .replace(/\u3000/g, ' ')
        .trim()
        .split(/\s+/)
        .filter(Boolean);
}

function resolveTypeFromKeyword(keyword) {
    if (!keyword) {
        return null;
    }

    if (TYPE_MAP[keyword]) {
        return TYPE_MAP[keyword];
    }

    for (const token of tokenizeKeyword(keyword)) {
        if (TYPE_MAP[token]) {
            return TYPE_MAP[token];
        }
    }

    return null;
}

function createSearchStrategies(keyword) {
    const normalized = (keyword || '').trim();
    const tokens = tokenizeKeyword(normalized);
    const strategies = new Map();

    const register = (kw, type = null) => {
        const trimmed = (kw || '').trim();
        if (!trimmed) {
            return;
        }

        const key = `${trimmed}|${type || ''}`;
        if (!strategies.has(key)) {
            strategies.set(key, { keyword: trimmed, type: type || null });
        }
    };

    const baseType = resolveTypeFromKeyword(normalized);
    register(normalized, baseType);
    register(normalized, null);

    tokens.forEach(token => {
        register(token, resolveTypeFromKeyword(token));
        register(getRelatedKeyword(token), null);
        register(getCategoryKeyword(token), null);
    });

    register(getRelatedKeyword(normalized), null);
    register(getCategoryKeyword(normalized), null);

    if (tokens.length > 1) {
        tokens.forEach((_, index) => {
            const partial = tokens.slice(0, index + 1).join(' ');
            register(partial, resolveTypeFromKeyword(partial));
        });
    }

    return Array.from(strategies.values());
}

// メイン検索処理
async function performSearch() {
    const rawKeywordInput = elements.keywords.value || '';
    const keywords = rawKeywordInput.trim();
    const keywordList = parseFreeWordInput(rawKeywordInput);
    if (keywordList.length === 0) {
        alert('フリーワードを入力してください。');
        return;
    }

    if (isLoadingPlaceDetails) {
        alert('基準店舗の情報を取得中です。完了までお待ちください。');
        return;
    }

    if (!selectedPlace) {
        alert('基準店舗を選択してください。');
        return;
    }
    
    if (!selectedPlace.geometry || !selectedPlace.geometry.location) {
        alert('基準店舗の位置情報が取得できませんでした。店舗を再選択してください。');
        return;
    }
    
    // ローディング表示
    elements.searchBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 検索中...';
    elements.searchBtn.disabled = true;
    elements.loading.classList.remove('hidden');
    elements.results.classList.add('hidden');
    
    // 進捗初期化
    updateProgress(0);
    
    try {
        console.log('=== 検索開始 ===');
        console.log(`フリーワード: ${keywords}`);
        console.log(`基準店舗: ${selectedPlace.name}`);
        console.log(`検索半径: ${elements.radius.value}m`);
        
        // 座標を安全に取得
        const location = selectedPlace.geometry.location;
        const lat = typeof location.lat === 'function' ? location.lat() : location.lat;
        const lng = typeof location.lng === 'function' ? location.lng() : location.lng;
        
        console.log(`基準座標: ${lat}, ${lng}`);
        
        // 正規化済みのキーワード一覧
        console.log('正規化キーワード一覧:', keywordList);
        const maxResults = parseInt(elements.maxResults.value);
        
        console.log(`=== 検索設定 ===`);
        console.log(`目標取得件数: ${maxResults}件`);
        console.log(`キーワード数: ${keywordList.length}個`);
        
        // 各キーワードで取得する目標件数を計算
        const targetPerKeyword = Math.ceil(maxResults / keywordList.length);
        console.log(`各キーワードの目標件数: ${targetPerKeyword}件`);
        
        let allResults = [];
        
        for (let i = 0; i < keywordList.length; i++) {
            const keyword = keywordList[i];
            if (allResults.length >= maxResults) {
                console.log(`最大取得件数${maxResults}件に達したため、残りのキーワードをスキップ`);
                break;
            }
            
            const remainingSlots = maxResults - allResults.length;
            const currentTarget = Math.min(targetPerKeyword, remainingSlots);
            
            console.log(`キーワード "${keyword}" の検索開始: 目標${currentTarget}件`);
            
            // 進捗更新（キーワードごと）
            updateProgress(i + 1, keywordList.length);
            
            // 周辺検索実行
            const results = await searchNearby(selectedPlace.geometry.location, keyword.trim(), currentTarget);
            allResults.push(...results);
            
            console.log(`キーワード "${keyword}" 完了: ${results.length}件取得 (累計: ${allResults.length}件)`);
        }
        
        // 進捗完了
        updateProgress(keywordList.length, keywordList.length, true);
        
        // 結果表示
        await displayResults(allResults, selectedPlace);
        
        // グローバル変数に保存（CSV出力用）
        window.detailedResults = allResults;
        
        console.log('=== 検索完了 ===');
        console.log(`最終結果: ${allResults.length}件`);
        
    } catch (error) {
        console.error('検索エラー:', error);
        elements.results.innerHTML = '<p class="error">検索中にエラーが発生しました。</p>';
        elements.results.classList.remove('hidden');
    } finally {
        // ローディング非表示
        elements.loading.classList.add('hidden');
        
        // ボタンを元に戻す
        elements.searchBtn.innerHTML = '<i class="fas fa-search"></i> 検索開始';
        elements.searchBtn.disabled = false;
    }
}

// 検索停止
function stopSearch() {
    if (searchAbortController) {
        searchAbortController.abort();
        console.log('検索停止リクエスト送信');
    }
}

// 検索コントロール更新
function updateSearchControls() {
    if (isSearching) {
        elements.searchBtn.classList.add('hidden');
        elements.stopSearchBtn.classList.remove('hidden');
    } else {
        elements.searchBtn.classList.remove('hidden');
        elements.stopSearchBtn.classList.add('hidden');
    }
}

// 進捗更新
function updateProgress(current, total, completed = false) {
    // 進捗バーの要素が存在しない場合は何もしない
    if (!elements.progressFill || !elements.progressText) {
        return;
    }
    
    if (completed) {
        elements.progressFill.style.width = '100%';
        elements.progressText.textContent = '完了';
    } else {
        const percentage = Math.round((current / total) * 100);
        elements.progressFill.style.width = `${percentage}%`;
        elements.progressText.textContent = '検索中...';
    }
}

// 店舗詳細取得
function getPlaceDetails(placeId) {
    return new Promise((resolve, reject) => {
        // place_idのバリデーション
        if (!placeId || typeof placeId !== 'string' || placeId.trim() === '') {
            reject(new Error('無効なplace_idです'));
            return;
        }
        
        const request = {
            placeId: placeId.trim(),
            fields: [
                'name', 
                'geometry', 
                'formatted_address', 
                'formatted_phone_number', 
                'website', 
                'rating', 
                'user_ratings_total',
                'opening_hours',
                'reviews'
            ]
        };
        
        placesService.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                resolve(place);
            } else {
                reject(new Error(`店舗詳細の取得に失敗しました: ${status}`));
            }
        });
    });
}

// 周辺検索（複数座標・複数戦略対応）
function searchNearby(location, keyword, targetCount = 100) {
    return new Promise(async (resolve, reject) => {
        const allResults = [];
        const maxRequests = Math.ceil(targetCount / 20); // 目標件数に応じてリクエスト数を計算
        
        console.log(`キーワード "${keyword}" の検索開始: 目標${targetCount}件 (最大${maxRequests}回のリクエスト)`);
        
        // 基準座標から東西南北の座標を生成
        const searchLocations = generateSearchLocations(location, parseInt(elements.radius.value));
        console.log(`検索座標数: ${searchLocations.length}箇所`);
        
        // 各座標で検索を実行
        for (let locationIndex = 0; locationIndex < searchLocations.length; locationIndex++) {
            const searchLocation = searchLocations[locationIndex];
            
            // 既に目標件数に達している場合は終了
            if (allResults.length >= targetCount) {
                console.log(`目標件数${targetCount}件に達したため、座標${locationIndex + 1}以降をスキップ`);
                break;
            }
            
            console.log(`座標${locationIndex + 1}/${searchLocations.length}: ${searchLocation.name} (${searchLocation.lat.toFixed(6)}, ${searchLocation.lng.toFixed(6)})`);
            
            // この座標で取得する目標件数を計算
            const remainingSlots = targetCount - allResults.length;
            const locationTarget = Math.ceil(remainingSlots / (searchLocations.length - locationIndex));
            
            try {
                // 既に取得した店舗のIDリストを渡す
                const existingPlaceIds = allResults.map(place => place.place_id);
                const locationResults = await performLocationSearch(searchLocation, keyword, locationTarget, maxRequests, existingPlaceIds);
                
                // 結果を追加
                allResults.push(...locationResults);
                
                console.log(`座標${locationIndex + 1}完了: ${locationResults.length}件取得 (累計: ${allResults.length}件)`);
                
                // 十分な結果がある場合は早期終了
                if (allResults.length >= targetCount) { // 目標件数に達したら終了
                    console.log(`目標件数${targetCount}件に達したため、残りの座標をスキップ`);
                    break;
                }
                
                // 座標間の待機時間
                if (locationIndex < searchLocations.length - 1) {
                    await new Promise(resolve => setTimeout(resolve, 1000));
                }
                
            } catch (error) {
                console.warn(`座標${locationIndex + 1}の検索に失敗:`, error);
            }
        }
        
        console.log(`キーワード "${keyword}" の全座標検索完了: 合計${allResults.length}件`);
        resolve(allResults);
    });
}

// 検索座標を生成
function generateSearchLocations(baseLocation, radius) {
    const locations = [];
    const directions = [
        { name: "基準", lat: 0, lng: 0 },
        { name: "北", lat: 0.01, lng: 0 },
        { name: "南", lat: -0.01, lng: 0 },
        { name: "東", lat: 0, lng: 0.01 },
        { name: "西", lat: 0, lng: -0.01 },
        { name: "北東", lat: 0.007, lng: 0.007 },
        { name: "北西", lat: 0.007, lng: -0.007 },
        { name: "南東", lat: -0.007, lng: 0.007 },
        { name: "南西", lat: -0.007, lng: -0.007 }
    ];
    
    // 半径に応じて座標の間隔を調整
    const coordinateStep = Math.max(0.005, radius / 10000); // 最小0.005度、最大は半径に応じて調整
    
    // Google Maps APIのLatLngオブジェクトから数値を取得
    const baseLat = typeof baseLocation.lat === 'function' ? baseLocation.lat() : baseLocation.lat;
    const baseLng = typeof baseLocation.lng === 'function' ? baseLocation.lng() : baseLocation.lng;
    
    directions.forEach(direction => {
        const lat = baseLat + (direction.lat * coordinateStep);
        const lng = baseLng + (direction.lng * coordinateStep);
        
        locations.push({
            name: direction.name,
            lat: lat,
            lng: lng,
            original: direction.name === "基準"
        });
    });
    
    return locations;
}

// 特定の座標で検索を実行
function performLocationSearch(location, keyword, targetCount, maxRequests, existingPlaceIds = []) {
    return new Promise((resolve, reject) => {
        const allResults = [];
        let currentStrategyIndex = 0;
        let consecutiveEmptyResults = 0; // 連続で空の結果をカウント
        
        // より多様な検索戦略を試行
        const searchStrategies = createSearchStrategies(keyword);
        
        let nextPageToken = null;
        let requestCount = 0;
        
        const performSearch = () => {
            // 全戦略が完了した場合
            if (currentStrategyIndex >= searchStrategies.length) {
                resolve(allResults);
                return;
            }
            
            // 連続で3回空の結果が出た場合は次の座標に移行
            if (consecutiveEmptyResults >= 3) {
                console.log(`  ${location.name} - 連続${consecutiveEmptyResults}回空の結果のため、座標をスキップ`);
                resolve(allResults);
                return;
            }
            
            const strategy = searchStrategies[currentStrategyIndex];
            
            // 既に目標件数に達している場合は終了
            if (allResults.length >= targetCount) {
                resolve(allResults.slice(0, targetCount));
                return;
            }
            
            const request = {
                location: { lat: location.lat, lng: location.lng },
                radius: parseInt(elements.radius.value),
                keyword: strategy.keyword,
                language: 'ja'
            };
            
            // タイプを設定
            if (strategy.type) {
                request.type = strategy.type;
            }
            
            // 次のページがある場合はトークンを追加
            if (nextPageToken) {
                request.pagetoken = nextPageToken;
            }
            
            placesService.nearbySearch(request, (results, status, pagination) => {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    if (results) {
                        // 既に取得した店舗を除外
                        const newResults = results.filter(place => !existingPlaceIds.includes(place.place_id));
                        
                        if (newResults.length > 0) {
                            allResults.push(...newResults);
                            consecutiveEmptyResults = 0; // リセット
                            console.log(`  ${location.name} - 戦略${currentStrategyIndex + 1} - ${requestCount + 1}回目: ${results.length}件取得 → ${newResults.length}件追加 (累計: ${allResults.length}件)`);
                            
                            // 除外した件数を表示
                            const excludedCount = results.length - newResults.length;
                            if (excludedCount > 0) {
                                console.log(`    → ${excludedCount}件の重複を除外`);
                            }
                        } else {
                            consecutiveEmptyResults++;
                            console.log(`  ${location.name} - 戦略${currentStrategyIndex + 1} - ${requestCount + 1}回目: ${results.length}件取得 → 全て重複のため除外 (連続${consecutiveEmptyResults}回)`);
                        }
                    }
                    
                    // 目標件数に達したかチェック
                    if (allResults.length >= targetCount) {
                        resolve(allResults.slice(0, targetCount));
                        return;
                    }
                    
                    // 次のページがあるかチェック
                    if (pagination && pagination.hasNextPage && requestCount < maxRequests - 1) {
                        nextPageToken = pagination.nextPageToken;
                        requestCount++;
                        
                        // Google APIの制限により、次のページを取得する前に少し待つ必要がある
                        setTimeout(() => {
                            performSearch();
                        }, 2000); // 2秒待機
                    } else {
                        // この戦略が終了、次の戦略に移行
                        currentStrategyIndex++;
                        nextPageToken = null;
                        requestCount = 0;
                        
                        // 次の戦略を実行
                        setTimeout(() => {
                            performSearch();
                        }, 1000);
                    }
                } else if (status === google.maps.places.PlacesServiceStatus.ZERO_RESULTS) {
                    // 次の戦略に移行
                    consecutiveEmptyResults++;
                    currentStrategyIndex++;
                    nextPageToken = null;
                    requestCount = 0;
                    
                    setTimeout(() => {
                        performSearch();
                    }, 1000);
                } else {
                    // 次の戦略に移行
                    consecutiveEmptyResults++;
                    currentStrategyIndex++;
                    nextPageToken = null;
                    requestCount = 0;
                    
                    setTimeout(() => {
                        performSearch();
                    }, 1000);
                }
            });
        };
        
        // 最初の戦略を開始
        performSearch();
    });
}

// 関連キーワードを取得
function getRelatedKeyword(keyword) {
    const relatedKeywords = {
        "飲食店": "レストラン",
        "レストラン": "カフェ",
        "カフェ": "喫茶店",
        "コンビニ": "スーパー",
        "スーパー": "コンビニ",
        "ペットサロン": "ペットショップ",
        "ペットショップ": "ペットサロン",
        "美容院": "美容室",
        "美容室": "美容院",
        "病院": "クリニック",
        "クリニック": "病院",
        "薬局": "ドラッグストア",
        "ドラッグストア": "薬局"
    };
    
    return relatedKeywords[keyword] || keyword;
}

// カテゴリキーワードを取得
function getCategoryKeyword(keyword) {
    const categoryKeywords = {
        "飲食店": "食事",
        "レストラン": "食事",
        "カフェ": "飲み物",
        "コンビニ": "買い物",
        "スーパー": "買い物",
        "ペットサロン": "ペット",
        "ペットショップ": "ペット",
        "美容院": "美容",
        "美容室": "美容",
        "病院": "医療",
        "クリニック": "医療",
        "薬局": "医療",
        "ドラッグストア": "医療"
    };
    
    return categoryKeywords[keyword] || keyword;
}

// 重複除去
function removeDuplicates(array, key) {
    console.log('重複除去開始:', array.length, '件');
    console.log('最初の5件のplace_id:', array.slice(0, 5).map(item => ({ name: item.name, place_id: item[key] })));
    
    const seen = new Set();
    const duplicates = [];
    const unique = array.filter(item => {
        const value = item[key];
        
        // place_idが空または無効な場合はスキップ
        if (!value || value === '' || value === 'undefined' || value === 'null') {
            console.warn(`無効な${key}: ${item.name}`, value);
            return true; // 無効な値は重複として扱わない
        }
        
        if (seen.has(value)) {
            duplicates.push(item);
            return false;
        }
        seen.add(value);
        return true;
    });
    
    if (duplicates.length > 0) {
        console.log(`重複除去: ${array.length}件 → ${unique.length}件 (${duplicates.length}件の重複を除去)`);
        
        // 重複の詳細を表示
        const duplicateGroups = {};
        duplicates.forEach(item => {
            const name = item.name || 'Unknown';
            if (!duplicateGroups[name]) {
                duplicateGroups[name] = 0;
            }
            duplicateGroups[name]++;
        });
        
        console.log('重複した店舗:');
        Object.entries(duplicateGroups).forEach(([name, count]) => {
            console.log(`  - ${name}: ${count}回重複`);
        });
        
        // 重複したplace_idの値を確認
        const duplicateIds = new Set();
        duplicates.forEach(item => {
            duplicateIds.add(item[key]);
        });
        console.log('重複したplace_id:', Array.from(duplicateIds));
    } else {
        console.log(`重複除去: ${array.length}件 → ${unique.length}件 (重複なし)`);
    }
    
    return unique;
}

// 検索結果を表示
async function displayResults(results, basePlace) {
    if (!results || results.length === 0) {
        elements.results.innerHTML = `
            <div class="results-header">
                <h3 class="results-title">検索結果</h3>
                <div class="results-summary">
                    <p>条件に一致する店舗が見つかりませんでした。</p>
                    <div class="results-actions">
                        <button id="clearResults" class="btn btn-danger"><i class="fas fa-trash"></i> クリア</button>
                    </div>
                </div>
            </div>
        `;
        elements.results.classList.remove('hidden');
        return;
    }

    // モバイルレイアウトの状態更新
    if (window.innerWidth <= 768 && elements.resultsPanel) {
        elements.resultsPanel.classList.remove('has-content');
    }

    // 重複除去
    const uniqueResults = removeDuplicates(results, 'place_id');
    
    // 評価フィルタリング
    const maxRating = parseFloat(elements.minRating.value);
    let filteredResults = uniqueResults;
    
    if (maxRating < 5) {
        filteredResults = filteredResults.filter(place => {
            if (!place.rating) return false;
            return place.rating <= maxRating;
        });
    }
    
    // レビュー数フィルタリング
    const maxReviews = parseInt(elements.minReviews.value);
    if (maxReviews < 1000) {
        filteredResults = filteredResults.filter(place => {
            if (!place.user_ratings_total) return false;
            return place.user_ratings_total <= maxReviews;
        });
    }

    // 詳細情報を取得
    const detailedResults = await getDetailedResults(filteredResults);

    // グローバル変数に詳細結果を保存（CSV出力用）
    window.detailedResults = detailedResults;

    // 統計情報の計算
    const totalSearched = results.length;
    const totalUnique = uniqueResults.length;
    const totalFiltered = detailedResults.length;
    const duplicateRate = totalSearched > 0 ? ((totalSearched - totalUnique) / totalSearched * 100).toFixed(1) : '0.0';

    // 各要素のテキストを更新
    elements.resultCount.textContent = `(${totalFiltered}件)`;
    elements.totalSearched.textContent = totalSearched;
    elements.duplicateRate.textContent = `${duplicateRate}%`;

    let filterInfoHtml = '';
    if (parseFloat(elements.minRating.value) < 5) {
        filterInfoHtml += `<span>評価: ${elements.minRating.value}以下</span>`;
    }
    if (parseInt(elements.minReviews.value) < 1000) {
        filterInfoHtml += `<span style="margin-left: 10px;">レビュー: ${elements.minReviews.value}件以下</span>`;
    }
    elements.filterInfo.innerHTML = filterInfoHtml;

    // テーブルヘッダー
    let tableHTML = `
        <table class="results-table">
            <thead>
                <tr>
                    <th>店舗名</th>
                    <th>住所</th>
                    <th>電話番号</th>
                    <th>URL</th>
                    <th>レビュー数</th>
                    <th>評価</th>
                </tr>
            </thead>
            <tbody>
    `;

    // テーブル行
    detailedResults.forEach(place => {
        const rating = place.rating || 0;
        const userRatingsTotal = place.user_ratings_total || 0;
        const stars = '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
        
        tableHTML += `
            <tr>
                <td class="place-name">${place.name}</td>
                <td class="place-address">${place.formatted_address || place.vicinity || '情報なし'}</td>
                <td class="place-phone">${place.formatted_phone_number || '情報なし'}</td>
                <td class="place-url">
                    ${place.website ? `<a href="${place.website}" target="_blank" class="url-link">${getDomainFromUrl(place.website)}</a>` : '情報なし'}
                </td>
                <td class="place-reviews">${userRatingsTotal.toLocaleString()}</td>
                <td class="place-rating">
                    <div class="rating-display">
                        <span class="rating-stars">${stars}</span>
                        <span class="rating-value">${rating.toFixed(1)}</span>
                    </div>
                </td>
            </tr>
        `;
    });

    tableHTML += `
            </tbody>
        </table>
    `;

    elements.resultsTable.innerHTML = tableHTML;
    elements.results.classList.remove('hidden');
    
    // 地図にマーカーを表示
    if (map && basePlace) {
        displayMarkers(detailedResults, basePlace);
    }
}

// 地図更新（複数座標対応）
function displayMarkers(results, basePlace) {
    console.log('displayMarkers called with:', results?.length, 'results');
    
    // 既存のマーカーと円をクリア
    if (!window.markers) {
        window.markers = [];
    }
    if (!window.circles) {
        window.circles = [];
    }
    
    window.markers.forEach(marker => {
        if (marker.setMap) {
            marker.setMap(null);
        }
    });
    window.markers = [];
    
    window.circles.forEach(circle => {
        if (circle.setMap) {
            circle.setMap(null);
        }
    });
    window.circles = [];
    
    // 基準店舗のマーカーと検索範囲の円を追加
    if (basePlace && basePlace.geometry && basePlace.geometry.location) {
        const baseLat = typeof basePlace.geometry.location.lat === 'function' ? basePlace.geometry.location.lat() : basePlace.geometry.location.lat;
        const baseLng = typeof basePlace.geometry.location.lng === 'function' ? basePlace.geometry.location.lng() : basePlace.geometry.location.lng;
        const radius = parseInt(elements.radius.value);
        
        // 検索範囲の円を表示
        const searchCircle = new google.maps.Circle({
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.1,
            map: map,
            center: { lat: baseLat, lng: baseLng },
            radius: radius
        });
        window.circles.push(searchCircle);
        
        // 基準店舗のマーカー（赤色、大きく表示）
        const baseMarker = new google.maps.Marker({
            position: { lat: baseLat, lng: baseLng },
            map: map,
            title: `${basePlace.name} (基準店舗)`,
            icon: {
                url: 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="16" cy="16" r="14" fill="#ff0000" stroke="white" stroke-width="3"/>
                        <text x="16" y="21" text-anchor="middle" fill="white" font-size="12" font-weight="bold">基</text>
                    </svg>
                `),
                scaledSize: new google.maps.Size(32, 32)
            }
        });
        window.markers.push(baseMarker);
        
        // 基準店舗の情報ウィンドウ
        const baseInfoWindow = new google.maps.InfoWindow({
            content: `
                <div style="padding: 10px; max-width: 200px;">
                    <h4 style="margin: 0 0 5px 0; color: #ff0000;">${basePlace.name}</h4>
                    <p style="margin: 0; font-size: 12px; color: #666;">基準店舗</p>
                    <p style="margin: 5px 0 0 0; font-size: 11px; color: #999;">
                        検索半径: ${radius}m
                    </p>
                </div>
            `
        });
        
        baseMarker.addListener('click', () => {
            baseInfoWindow.open(map, baseMarker);
        });
        
        // 地図の中心を基準店舗に設定
        map.setCenter({ lat: baseLat, lng: baseLng });
        
        // 検索範囲が見えるようにズーム調整
        const bounds = new google.maps.LatLngBounds();
        bounds.extend({ lat: baseLat, lng: baseLng });
        bounds.extend({ lat: baseLat + (radius / 111000), lng: baseLng + (radius / 111000) });
        bounds.extend({ lat: baseLat - (radius / 111000), lng: baseLng - (radius / 111000) });
        map.fitBounds(bounds);
    }
    
    // 検索結果のマーカーを追加
    results.forEach((place, index) => {
        if (place.geometry && place.geometry.location) {
            const lat = typeof place.geometry.location.lat === 'function' ? place.geometry.location.lat() : place.geometry.location.lat;
            const lng = typeof place.geometry.location.lng === 'function' ? place.geometry.location.lng() : place.geometry.location.lng;
            
            // 検索結果のマーカー（青色）
            const marker = new google.maps.Marker({
                position: { lat: lat, lng: lng },
                map: map,
                title: `${index + 1}. ${place.name}`,
                label: {
                    text: (index + 1).toString(),
                    color: 'white',
                    fontWeight: 'bold'
                }
            });
            window.markers.push(marker);
            
            // 検索結果の情報ウィンドウ
            const infoWindow = new google.maps.InfoWindow({
                content: `
                    <div style="padding: 10px; max-width: 200px;">
                        <h4 style="margin: 0 0 5px 0;">${place.name}</h4>
                        <p style="margin: 0 0 5px 0; font-size: 12px; color: #666;">${place.vicinity}</p>
                        ${place.rating ? `
                            <p style="margin: 0; color: #ffc107; font-size: 12px;">
                                ★ ${place.rating.toFixed(1)} (${place.user_ratings_total || 0}件)
                            </p>
                        ` : ''}
                    </div>
                `
            });
            
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        }
    });
    
    // 地図コンテナを表示
    elements.mapContainer.classList.remove('hidden');
    
    console.log(`${window.markers.length}個のマーカーと${window.circles.length}個の円を地図に表示しました`);
}

// 店舗詳細表示
function showPlaceDetails(placeId) {
    console.log('showPlaceDetails called with:', placeId);
    
    // ローディング表示
    const loadingDiv = document.createElement('div');
    loadingDiv.innerHTML = '<div class="loading">詳細情報を取得中...</div>';
    document.body.appendChild(loadingDiv);
    
    getPlaceDetails(placeId)
        .then(place => {
            // 詳細情報をモーダルで表示
            const modal = document.createElement('div');
            modal.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0,0,0,0.5);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
            `;
            
            modal.innerHTML = `
                <div style="
                    background: white;
                    padding: 30px;
                    border-radius: 15px;
                    max-width: 500px;
                    width: 90%;
                    max-height: 80vh;
                    overflow-y: auto;
                    position: relative;
                ">
                    <button onclick="this.parentElement.parentElement.remove()" style="
                        position: absolute;
                        top: 15px;
                        right: 15px;
                        background: none;
                        border: none;
                        font-size: 24px;
                        cursor: pointer;
                        color: #666;
                    ">&times;</button>
                    
                    <h3 style="margin-bottom: 20px; color: #333;">${place.name}</h3>
                    
                    <div style="margin-bottom: 15px;">
                        <strong>住所:</strong> ${place.formatted_address || '情報なし'}
                    </div>
                    
                    ${place.formatted_phone_number ? `
                        <div style="margin-bottom: 15px;">
                            <strong>電話番号:</strong> ${place.formatted_phone_number}
                        </div>
                    ` : ''}
                    
                    ${place.website ? `
                        <div style="margin-bottom: 15px;">
                            <strong>ウェブサイト:</strong> 
                            <a href="${place.website}" target="_blank" style="color: #667eea;">${getDomainFromUrl(place.website)}</a>
                        </div>
                    ` : ''}
                    
                    ${place.rating ? `
                        <div style="margin-bottom: 15px;">
                            <strong>評価:</strong> ★ ${place.rating} (${place.user_ratings_total || 0}件のレビュー)
                        </div>
                    ` : ''}
                    
                    ${place.opening_hours ? `
                        <div style="margin-bottom: 15px;">
                            <strong>営業状況:</strong> ${place.opening_hours.isOpen ? '営業中' : '営業時間外'}
                        </div>
                    ` : ''}
                    
                    ${place.price_level ? `
                        <div style="margin-bottom: 15px;">
                            <strong>価格帯:</strong> ${'¥'.repeat(place.price_level)}
                        </div>
                    ` : ''}
                </div>
            `;
            
            document.body.appendChild(modal);
            
            // モーダル外クリックで閉じる
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.remove();
                }
            });
        })
        .catch(error => {
            console.error('詳細情報の取得に失敗:', error);
            alert('詳細情報の取得に失敗しました。');
        })
        .finally(() => {
            loadingDiv.remove();
        });
}

// 地図で開く
function openInMaps(lat, lng) {
    console.log('openInMaps called with:', lat, lng);
    
    // Google Mapsで開く
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, '_blank');
}

// 結果クリア
function clearResults() {
    // グローバル変数をクリア
    window.detailedResults = null;
    selectedPlace = null;
    
    // 入力欄をクリア
    elements.storeName.value = '';
    elements.storeName.placeholder = '店舗名を入力（例: スターバックス）';
    elements.keywords.value = '';
    
    // 結果表示をリセット
    elements.results.classList.add('hidden');
    elements.resultsTable.innerHTML = '';
    elements.resultCount.textContent = '(0件)';
    elements.totalSearched.textContent = '0';
    elements.duplicateRate.textContent = '0.0%';
    elements.filterInfo.innerHTML = '';
    
    // 地図をクリア
    if (window.markers) {
        window.markers.forEach(marker => marker.setMap(null));
        window.markers = [];
    }
    if (window.circles) {
        window.circles.forEach(circle => circle.setMap(null));
        window.circles = [];
    }
    elements.mapContainer.classList.add('hidden');
    
    console.log('検索結果と店舗選択をクリアしました');
}

// CSV出力
async function exportToCSV(results) {
    if (!results || results.length === 0) {
        alert('出力するデータがありません。');
        return;
    }

    console.log('CSV出力開始:', results.length, '件のデータ');
    console.log('最初のデータサンプル:', results[0]);
    
    // 詳細情報が不足している場合は再取得
    let detailedResults = results;
    if (!results[0].formatted_phone_number && !results[0].website) {
        console.log('詳細情報が不足しているため、再取得します...');
        detailedResults = await getDetailedResults(results);
    } else {
        console.log('詳細情報は既に取得済みです');
    }

    // 重複除去は既にdisplayResultsで完了済みなので、ここでは行わない
    console.log('重複除去済みデータ:', detailedResults.length, '件');
    
    // 評価フィルタリング
    const maxRating = parseFloat(elements.minRating.value);
    let filteredResults = detailedResults;
    
    if (maxRating < 5) {
        filteredResults = filteredResults.filter(place => {
            if (!place.rating) return false;
            return place.rating <= maxRating;
        });
        console.log('評価フィルタリング後:', filteredResults.length, '件');
    }
    
    // レビュー数フィルタリング
    const maxReviews = parseInt(elements.minReviews.value);
    if (maxReviews < 1000) {
        filteredResults = filteredResults.filter(place => {
            if (!place.user_ratings_total) return false;
            return place.user_ratings_total <= maxReviews;
        });
        console.log('レビュー数フィルタリング後:', filteredResults.length, '件');
    }
    
    if (filteredResults.length === 0) {
        alert('フィルタリング条件に合うデータがありません。');
        return;
    }

    console.log('CSV出力対象:', filteredResults.length, '件');
    console.log('最終サンプルデータ:', filteredResults[0]);

    // CSVヘッダー
    const headers = [
        '店舗名',
        '住所', 
        '電話番号',
        'URL',
        'レビュー数',
        '評価'
    ];
    
    // CSVデータ
    const csvData = filteredResults.map((place, index) => {
        const rating = place.rating || 0;
        const userRatingsTotal = place.user_ratings_total || 0;
        
        // Excelでの表示を最適化
        const row = [
            (place.name || '').trim(), // 店舗名の前後の空白を除去
            (place.formatted_address || place.vicinity || '').trim(), // 住所の前後の空白を除去
            (place.formatted_phone_number || '').trim(), // 電話番号の前後の空白を除去
            (place.website || '').trim(), // URLの前後の空白を除去
            userRatingsTotal.toString(), // レビュー数を文字列に変換
            rating.toFixed(1) // 評価を小数点1位で表示
        ];

        // デバッグ用：電話番号とURLの情報をログ出力（最初の5件のみ）
        if (place.name && index < 5) {
            console.log(`${index + 1}. ${place.name}: 電話番号=${place.formatted_phone_number || 'なし'}, URL=${place.website || 'なし'}`);
        }

        return row;
    });
    
    // Excel用のCSV形式で出力
    // 適切なエスケープ処理により、Excelで開いた際に列幅が自動調整される
    const csvContent = [
        headers.join(','),
        ...csvData.map(row => row.map(cell => {
            // セル内にカンマ、改行、ダブルクォートが含まれる場合は適切にエスケープ
            if (cell.includes(',') || cell.includes('\n') || cell.includes('"')) {
                return `"${cell.replace(/"/g, '""')}"`;
            }
            return cell;
        }).join(','))
    ].join('\n');
    
    // ファイル名を生成（拡張子を.csvに戻す）
    const now = new Date();
    const timestamp = now.getFullYear() + 
        String(now.getMonth() + 1).padStart(2, '0') + 
        String(now.getDate()).padStart(2, '0') + '_' +
        String(now.getHours()).padStart(2, '0') + 
        String(now.getMinutes()).padStart(2, '0');
    
    const filename = `周辺店舗検索結果_${timestamp}.csv`;
    
    // ダウンロード（CSV形式）
    const blob = new Blob(['\uFEFF' + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    
    console.log(`CSV出力完了: ${filteredResults.length}件のデータを${filename}に出力`);
    alert(`CSVファイルをダウンロードしました。\nファイル名: ${filename}\n出力件数: ${filteredResults.length}件\n\n※ Excelで開くと列幅が自動調整されます。`);
}

// 地図表示切り替え
function toggleMap() {
    const mapContainer = elements.mapContainer;
    if (mapContainer.classList.contains('hidden')) {
        mapContainer.classList.remove('hidden');
        elements.showMap.innerHTML = '<i class="fas fa-eye-slash"></i> 地図非表示';
        google.maps.event.trigger(map, 'resize');
    } else {
        mapContainer.classList.add('hidden');
        elements.showMap.innerHTML = '<i class="fas fa-map"></i> 地図表示';
    }
}

// ローディング表示
function showLoading() {
    elements.loading.classList.remove('hidden');
    elements.results.classList.add('hidden');
    elements.mapContainer.classList.add('hidden');
    updateProgress(0);
}

function hideLoading() {
    elements.loading.classList.add('hidden');
}

// ユーティリティ関数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 検索のコツを表示
function showSearchTips() {
    const tips = `
        <div style="padding: 20px; max-width: 600px;">
            <h3 style="margin-bottom: 15px; color: #333;">🔍 より多くの結果を取得するコツ</h3>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #667eea; margin-bottom: 8px;">1. キーワードの工夫</h4>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li>具体的な店舗名ではなく、カテゴリで検索（例：「カフェ」「レストラン」「コンビニ」）</li>
                    <li>複数のキーワードを改行で入力</li>
                    <li>一般的な用語を使用（例：「飲食店」「ペットショップ」）</li>
                    <li>単語を分けて入力（例：「スターバックス」→「スターバックス カフェ」）</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #667eea; margin-bottom: 8px;">2. 検索条件の調整</h4>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li>検索半径を大きくする（5km〜10km）</li>
                    <li>最小評価・レビュー数の条件を緩和</li>
                    <li>最大表示件数を増やす（100件）</li>
                    <li>検索間隔を短くする（0.5秒〜1秒）</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #667eea; margin-bottom: 8px;">3. 新しい検索機能</h4>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li><strong>複数座標検索:</strong> 基準店舗の周辺を9箇所に分割して検索</li>
                    <li><strong>5つの多様な戦略:</strong> 各座標で5つの異なる戦略を自動実行</li>
                    <li><strong>関連キーワード検索:</strong> 「飲食店」→「レストラン」のように関連語で検索</li>
                    <li><strong>カテゴリ検索:</strong> 「飲食店」→「食事」のように広いカテゴリで検索</li>
                    <li><strong>ページネーション:</strong> 最大5回のリクエストで100件まで取得</li>
                    <li><strong>目標件数優先:</strong> 指定した件数まで自動で検索継続</li>
                    <li><strong>重複除去:</strong> 同じ店舗の重複を自動除去（詳細ログ付き）</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #667eea; margin-bottom: 8px;">4. 検索座標の詳細</h4>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li><strong>基準座標:</strong> 選択した店舗の位置</li>
                    <li><strong>東西南北:</strong> 基準座標の四方</li>
                    <li><strong>斜め方向:</strong> 北東、北西、南東、南西</li>
                    <li><strong>座標間隔:</strong> 検索半径に応じて自動調整</li>
                    <li><strong>視覚化:</strong> 地図上で検索座標を確認可能</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #667eea; margin-bottom: 8px;">5. 検索戦略の詳細</h4>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li><strong>戦略1:</strong> キーワード + タイプ指定（例：「飲食店」+ restaurant）</li>
                    <li><strong>戦略2:</strong> キーワードのみ（タイプ指定なし）</li>
                    <li><strong>戦略3:</strong> 関連キーワード（例：「飲食店」→「レストラン」）</li>
                    <li><strong>戦略4:</strong> カテゴリキーワード（例：「飲食店」→「食事」）</li>
                    <li><strong>戦略5:</strong> 部分キーワード（例：「飲食店」→「飲食」）</li>
                </ul>
            </div>
            
            <div style="margin-bottom: 15px;">
                <h4 style="color: #667eea; margin-bottom: 8px;">6. 技術的な制限</h4>
                <ul style="margin-left: 20px; line-height: 1.6;">
                    <li>Google Places APIは1回の検索で最大20件</li>
                    <li>本ツールでは最大5回のページネーション（100件まで）</li>
                    <li>9箇所 × 5つの戦略 = 最大45回の検索</li>
                    <li>目標件数に達したら自動停止</li>
                    <li>重複除去により件数が減少する場合があります</li>
                    <li>重複の詳細はコンソールログで確認可能</li>
                </ul>
            </div>
            
            <div style="background: #d4edda; padding: 10px; border-radius: 5px; border-left: 4px solid #28a745;">
                <strong>🎯 改善点:</strong> 複数戦略検索により、従来の20件から最大100件まで取得可能になりました！
            </div>
            
            <div style="background: #fff3cd; padding: 10px; border-radius: 5px; border-left: 4px solid #ffc107; margin-top: 10px;">
                <strong>💡 ヒント:</strong> Google MapsのWebサイトでは、より多くの結果を表示していますが、
                これは複数の検索を組み合わせて行っているためです。本ツールも同様の戦略を採用しています。
            </div>
        </div>
    `;
    
    const modal = document.createElement('div');
    modal.style.cssText = `
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.5); display: flex; align-items: center;
        justify-content: center; z-index: 10000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
        background: white; padding: 0; border-radius: 10px; max-width: 600px;
        max-height: 80vh; overflow-y: auto; position: relative;
    `;
    content.innerHTML = tips;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '×';
    closeBtn.style.cssText = `
        position: absolute; top: 10px; right: 15px; background: none;
        border: none; font-size: 24px; cursor: pointer; color: #666;
    `;
    closeBtn.onclick = () => modal.remove();
    
    content.appendChild(closeBtn);
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
}

// URLからドメインを抽出
function getDomainFromUrl(url) {
    try {
        const urlObj = new URL(url);
        return urlObj.hostname.replace('www.', '');
    } catch (error) {
        // URLが無効な場合は元のURLを返す
        return url;
    }
}

// DOM読み込み完了時の初期化
document.addEventListener('DOMContentLoaded', function() {
    // DOM要素の初期化
    initializeElements();
    
    // イベントリスナーの設定
    setupEventListeners();
    
    console.log('DOM elements initialized');
});

async function getDetailedResults(results) {
    console.log('詳細情報を取得中...', results.length, '件');
    const detailedResults = [];
    
    // レート制限を避けるため、順次処理
    for (let i = 0; i < results.length; i++) {
        const place = results[i];
        try {
            if (!place.place_id || typeof place.place_id !== 'string' || place.place_id.trim() === '') {
                console.warn(`無効なplace_id: ${place.name}`, place.place_id);
                detailedResults.push(place); // 元の情報を使用
                continue;
            }
            
            console.log(`詳細情報取得中: ${i + 1}/${results.length} - ${place.name}`);
            const detailedPlace = await getPlaceDetails(place.place_id);
            
            // 詳細情報が取得できた場合のみ詳細情報を使用、そうでなければ元の情報を使用
            if (detailedPlace && detailedPlace.name) {
                detailedResults.push(detailedPlace);
                console.log(`詳細情報取得完了: ${i + 1}/${results.length} - ${detailedPlace.name} (電話: ${detailedPlace.formatted_phone_number || 'なし'}, URL: ${detailedPlace.website || 'なし'})`);
            } else {
                console.warn(`詳細情報が空: ${place.name} - 元の情報を使用`);
                detailedResults.push(place);
            }
            
            // API制限を避けるため、リクエスト間に待機時間を設定
            if (i < results.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 200)); // 200ms待機
            }
            
        } catch (error) {
            console.warn(`詳細情報取得失敗: ${place.name}`, error.message);
            detailedResults.push(place); // エラー時は元の情報を保持
            
            // エラー時は少し長めに待機
            if (i < results.length - 1) {
                await new Promise(resolve => setTimeout(resolve, 500)); // 500ms待機
            }
        }
    }
    
    console.log(`詳細情報取得完了: ${detailedResults.length}件`);
    console.log('サンプルデータ:', detailedResults[0]);
    return detailedResults;
} 
