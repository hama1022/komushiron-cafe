(function () {
  const t = {
    ja: {
      // nav
      'nav.concept': 'CONCEPT', 'nav.menu': 'MENU', 'nav.gallery': 'GALLERY', 'nav.access': 'ACCESS',
      // hero
      'hero.sub': '熊本・美里町の小さなイタリアン',
      'hero.tagline': '地元の恵みと手仕事が出会う場所',
      'hero.btn': 'MENU を見る',
      // concept
      'concept.title': '美里の里山から<br />生まれたカフェ',
      'concept.p1': '熊本県美里町の地名「小筵（こむしろ）」から名付けられた <strong>KOMUSHIRON☆CAFE</strong>。地元の産直市場「まほろばの郷」などから届く新鮮な野菜と、この土地ならではの食材を使ったパスタや手作りスイーツをご用意しています。',
      'concept.p2': 'レンガ風の建物から見える風景を感じながら、本格イタリアンをゆっくりとお楽しみください。昼も夜も、あなたの特別なひとときに寄り添います。',
      'badge.local': '地元産野菜使用', 'badge.sweets': '手作りスイーツ', 'badge.kids': 'キッズプレート', 'badge.terrace': 'テラス席あり', 'badge.paypay': 'PayPay対応',
      // menu
      'menu.title': 'こだわりの一皿',
      'menu.desc': '「食べるときに一番美味しい状態」へ。細麺を丁寧に茹で上げ、素材の味を最大限に引き出したパスタをどうぞ。',
      'menu.badge.signature': '看板メニュー', 'menu.badge.pop1': '人気 No.1', 'menu.badge.pop2': '人気 No.2', 'menu.badge.pop3': '人気 No.3',
      'cat.pasta': 'パスタ', 'cat.rice': 'ワンプレートごはん（ドリンク付）', 'cat.risotto': 'リゾット・おすすめセット', 'cat.sweets': 'スイーツ（13:00以降）',
      'pasta1.name': 'コムシロンパスタ', 'pasta1.desc': '豆腐のもろみ漬けをソースに仕立てた、ここだけの一皿。柚子胡椒がアクセントとなった、郷土とイタリアンの出会い。',
      'pasta2.name': 'ナスとベーコンの<br />トマトソース', 'pasta2.desc': '地元産の新鮮なナスとベーコンを、濃厚なトマトソースで仕上げた定番人気パスタ。',
      'pasta3.name': 'エビと貝柱の<br />フレッシュトマトペペロンチーノ', 'pasta3.desc': 'プリプリのエビと貝柱に、フレッシュトマトのみずみずしさが絡む爽やかな一品。',
      'pasta4.name': 'ほうれん草とベーコンの<br />クリームパスタ', 'pasta4.desc': '新鮮なほうれん草とベーコンをまろやかなクリームソースで仕上げた、やさしい味わいの一品。',
      'rice1.name': 'チキン南蛮プレート', 'rice1.desc': '自家製タルタルソースをたっぷりかけた本格チキン南蛮。ボリューム満点でオープン当初から不動の人気メニュー。', 'rice1.price': '¥1,600（ドリンク付）',
      'rice2.name': '塩からあげプレート', 'rice2.desc': '鶏のモモ肉をやさしく揚げたジューシーな塩からあげ。外はカリッと中はジューシーで、テイクアウトにも人気。', 'rice2.price': '¥1,550（ドリンク付）',
      'rice3.name': 'トルコライス', 'rice3.desc': 'Wチキンカツとミートソースをライスに合わせたボリューム満点の一皿。カレー風味のミートソースがアクセント。', 'rice3.price': '¥1,600（ドリンク付）',
      'risotto1.name': 'ベーコンとキノコ色々の<br />クリームリゾット', 'risotto1.desc': '数種のキノコとベーコンを使ったコクのあるクリームリゾット。とろりとした口当たりが絶品。',
      'set1.name': 'おすすめセット', 'set1.desc': '生ハムシーザーサラダ・スープ・ガーリックトースト・パスタ（当日のおすすめから選択）・デザート・ドリンクが揃ったフルコース。',
      'waffle.name': 'フルーツのワッフル', 'waffle.desc': 'サクッと焼いたワッフルに旬のフルーツ・バニラアイス・ジャムとメープルシロップをたっぷりと。',
      'cake.name': '手作りケーキ', 'cake.desc': 'ガトーショコラ・ベイクドチーズケーキ・とろけるティラミス・林檎のタルトなど日替わりで並びます。テイクアウトも人気。', 'cake.price': '各 ¥600',
      'fullcat.pasta': 'パスタ', 'fullcat.risotto': 'リゾット・おすすめセット', 'fullcat.rice': 'ワンプレートごはん（ドリンク付）', 'fullcat.coffee': 'コーヒー・ドリンク',
      'fullcat.pizza': 'ピザ（18cm）', 'fullcat.salad': '大きめサラダ', 'fullcat.sweets': 'スイーツ（13:00以降）', 'fullcat.side': 'サイドメニュー・キッズ', 'fullcat.alcohol': 'アルコール・おつまみ（夜のみ）',
      'menu.note': '※価格は税込です。季節によりメニューが変わる場合があります。',
      'voice.title': 'お客様の声',
      'voice1.text': '「お店も料理もお洒落で、まるでイタリアにいるみたい。コムシロンパスタは他では食べられない味で、また絶対来ます！」', 'voice1.author': '— 30代・女性',
      'voice2.text': '「テラス席で里山の景色を眺めながら食べるパスタは最高。スタッフさんも温かくて、ランチに通い続けています。」', 'voice2.author': '— 40代・女性',
      'voice3.text': '「手作りのキャラメルチーズケーキをテイクアウトしたら家族に大好評！スイーツ目当てでもまた行きたいお店です。」', 'voice3.author': '— 20代・女性',
      'gallery.instagram': 'Instagram でもっと見る',
      'access.title': '店舗情報・アクセス',
      'access.name.label': '店名', 'access.name.val': 'KOMUSHIRON☆CAFE（コムシロン カフェ）',
      'access.addr.label': '住所', 'access.addr.val': '熊本県下益城郡美里町小筵927',
      'access.tel.label': '電話',
      'access.hours.label': '営業時間',
      'hours.monwed': '月・水', 'hours.monwed.val': '11:00 〜 14:30（L.O.）',
      'hours.thufri': '木・金', 'hours.thufri.val': '11:00 〜 14:30（L.O.）/ 18:00 〜 20:00（L.O.）',
      'hours.wknd': '土・日・祝', 'hours.wknd.val': '11:00 〜 14:30（L.O.）/ 17:30 〜 20:00（L.O.）',
      'access.closed.label': '定休日', 'access.closed.val': '火曜日',
      'access.seats.label': '席数', 'access.seats.val': '24席（カウンター6席含む）',
      'access.park.label': '駐車場', 'access.park.val': 'あり（約10台）',
      'access.pay.label': 'お支払い', 'access.pay.val': '現金・PayPay',
      'access.dir.label': 'アクセス', 'access.dir.val': '九州道 御船ICまたは松橋ICから車で約25分。二俣橋・佐俣の湯・日本一の石段（3,333段）など、美里町の観光スポットからもお立ち寄りいただけます。',
      'footer.address': '〒861-4411 熊本県下益城郡美里町小筵927／TEL 0964-46-3665',
    },

    en: {
      'nav.concept': 'CONCEPT', 'nav.menu': 'MENU', 'nav.gallery': 'GALLERY', 'nav.access': 'ACCESS',
      'hero.sub': 'A small Italian café in Misato, Kumamoto',
      'hero.tagline': 'Where local bounty meets artisan craft',
      'hero.btn': 'View Menu',
      'concept.title': 'A Café Born from<br />Misato\'s Countryside',
      'concept.p1': 'Named after the local place name "Komushiro" in Misato Town, Kumamoto, <strong>KOMUSHIRON☆CAFE</strong> offers handmade pasta and sweets crafted with fresh vegetables from local markets like "Mahoroba no Sato" and unique regional ingredients.',
      'concept.p2': 'Take your time and enjoy authentic Italian cuisine while soaking in the view from our brick-style building. Whether for lunch or dinner, we\'re here for your special moments.',
      'badge.local': 'Local Vegetables', 'badge.sweets': 'Handmade Sweets', 'badge.kids': 'Kids Plate', 'badge.terrace': 'Terrace Seating', 'badge.paypay': 'PayPay Accepted',
      'menu.title': 'Our Signature Dishes',
      'menu.desc': 'Every dish is prepared to be at its very best the moment it reaches your table — fine pasta carefully cooked to draw out every ingredient\'s flavor.',
      'menu.badge.signature': 'Signature', 'menu.badge.pop1': 'Popular #1', 'menu.badge.pop2': 'Popular #2', 'menu.badge.pop3': 'Popular #3',
      'cat.pasta': 'Pasta', 'cat.rice': 'One Plate Rice (with drink)', 'cat.risotto': 'Risotto & Set', 'cat.sweets': 'Sweets (from 13:00)',
      'pasta1.name': 'Komushiron Pasta', 'pasta1.desc': 'Our signature pasta — made with a sauce of miso-marinated tofu, unique to this restaurant. Accented with yuzu pepper for a taste where local tradition meets Italian cuisine.',
      'pasta2.name': 'Eggplant &amp; Bacon<br />Tomato Pasta', 'pasta2.desc': 'Fresh local eggplant and bacon simmered in a rich tomato sauce — our most popular pasta.',
      'pasta3.name': 'Shrimp &amp; Scallop<br />Fresh Tomato Peperoncino', 'pasta3.desc': 'Plump shrimp and scallops tossed with the freshness of fresh tomatoes — a light and vibrant dish.',
      'pasta4.name': 'Spinach &amp; Bacon<br />Cream Pasta', 'pasta4.desc': 'Fresh spinach and bacon in a smooth cream sauce — a gentle and satisfying classic.',
      'rice1.name': 'Chicken Nanban Plate', 'rice1.desc': 'Hearty chicken nanban topped with homemade tartar sauce — a beloved dish since our opening.', 'rice1.price': '¥1,600 (with drink)',
      'rice2.name': 'Salt-seasoned Fried Chicken Plate', 'rice2.desc': 'Juicy chicken thighs lightly fried with salt — crispy outside, tender inside. Also popular for takeout.', 'rice2.price': '¥1,550 (with drink)',
      'rice3.name': 'Turkish Rice', 'rice3.desc': 'A hearty plate combining double chicken katsu and curry-flavored meat sauce over rice.', 'rice3.price': '¥1,600 (with drink)',
      'risotto1.name': 'Bacon &amp; Mushroom<br />Cream Risotto', 'risotto1.desc': 'A rich and creamy risotto with assorted mushrooms and bacon — the smooth texture is simply wonderful.',
      'set1.name': 'Recommended Set', 'set1.desc': 'A full course: prosciutto Caesar salad, soup, garlic toast, pasta (choose from the day\'s selection), dessert, and a drink.',
      'waffle.name': 'Fruit Waffle', 'waffle.desc': 'A crisp, freshly baked waffle topped with seasonal fruits, vanilla ice cream, jam, and maple syrup.',
      'cake.name': 'Handmade Cake', 'cake.desc': 'A rotating daily selection: chocolate gateau, baked cheesecake, tiramisu, apple tart, and more. Takeout is also popular.', 'cake.price': '¥600 each',
      'fullcat.pasta': 'Pasta', 'fullcat.risotto': 'Risotto & Set', 'fullcat.rice': 'One Plate Rice (with drink)', 'fullcat.coffee': 'Coffee & Drinks',
      'fullcat.pizza': 'Pizza (18cm)', 'fullcat.salad': 'Salad', 'fullcat.sweets': 'Sweets (from 13:00)', 'fullcat.side': 'Side Menu & Kids', 'fullcat.alcohol': 'Alcohol & Snacks (evening only)',
      'menu.note': '※ All prices include tax. Menu items may vary by season.',
      'voice.title': 'Customer Reviews',
      'voice1.text': '"The restaurant and food are both so stylish — it feels like being in Italy! The Komushiron Pasta has a flavor you can\'t find anywhere else. Definitely coming back!"', 'voice1.author': '— Female, 30s',
      'voice2.text': '"Eating pasta on the terrace while gazing at the countryside scenery is the best. The staff are so warm — I keep coming back for lunch."', 'voice2.author': '— Female, 40s',
      'voice3.text': '"My family loved the homemade caramel cheesecake I took home! A place I\'ll definitely revisit, even just for the sweets."', 'voice3.author': '— Female, 20s',
      'gallery.instagram': 'See more on Instagram',
      'access.title': 'Location & Access',
      'access.name.label': 'Name', 'access.name.val': 'KOMUSHIRON☆CAFE',
      'access.addr.label': 'Address', 'access.addr.val': '927 Komushiro, Misato-machi, Shimomashiki-gun, Kumamoto',
      'access.tel.label': 'Tel',
      'access.hours.label': 'Hours',
      'hours.monwed': 'Mon / Wed', 'hours.monwed.val': '11:00 – 14:30 (L.O.)',
      'hours.thufri': 'Thu / Fri', 'hours.thufri.val': '11:00 – 14:30 (L.O.) / 18:00 – 20:00 (L.O.)',
      'hours.wknd': 'Sat / Sun / Hol', 'hours.wknd.val': '11:00 – 14:30 (L.O.) / 17:30 – 20:00 (L.O.)',
      'access.closed.label': 'Closed', 'access.closed.val': 'Tuesdays',
      'access.seats.label': 'Seats', 'access.seats.val': '24 seats (incl. 6 counter seats)',
      'access.park.label': 'Parking', 'access.park.val': 'Available (approx. 10 spaces)',
      'access.pay.label': 'Payment', 'access.pay.val': 'Cash · PayPay',
      'access.dir.label': 'Access', 'access.dir.val': 'Approx. 25 min by car from Mifune IC or Matsubase IC (Kyushu Expressway). Near Misato\'s sights: Futamata Bridge, Samata no Yu hot spring, and the 3,333-step stone staircase.',
      'footer.address': '〒861-4411  927 Komushiro, Misato-machi, Kumamoto  /  TEL 0964-46-3665',
    },

    'zh-TW': {
      'nav.concept': '理念', 'nav.menu': '菜單', 'nav.gallery': '相冊', 'nav.access': '交通',
      'hero.sub': '熊本縣美里町的小義大利咖啡廳',
      'hero.tagline': '在地風土與手作工藝交織之處',
      'hero.btn': '查看菜單',
      'concept.title': '誕生自美里里山的<br />咖啡廳',
      'concept.p1': '<strong>KOMUSHIRON☆CAFE</strong> 的名稱源自熊本縣美里町的地名「小筵（こむしろ）」。我們使用來自當地直售市場「まほろばの郷」等地的新鮮蔬菜，以及這片土地特有的食材，為您精心準備義大利麵和手作甜點。',
      'concept.p2': '請在充滿磚牆風情的建築中，一邊欣賞窗外景色，一邊悠然享用道地的義大利料理。無論午餐還是晚餐，我們都樂於陪伴您度過美好時光。',
      'badge.local': '使用在地蔬菜', 'badge.sweets': '手作甜點', 'badge.kids': '兒童餐盤', 'badge.terrace': '露台座位', 'badge.paypay': '支援 PayPay',
      'menu.title': '精心烹製的每一道料理',
      'menu.desc': '追求「上桌時最美味的狀態」。細心煮好的細麵，將每種食材的風味發揮到極致。',
      'menu.badge.signature': '招牌菜', 'menu.badge.pop1': '人氣第1名', 'menu.badge.pop2': '人氣第2名', 'menu.badge.pop3': '人氣第3名',
      'cat.pasta': '義大利麵', 'cat.rice': '單盤飯食（附飲料）', 'cat.risotto': '燉飯・推薦套餐', 'cat.sweets': '甜點（13:00後）',
      'pasta1.name': 'コムシロン義大利麵', 'pasta1.desc': '以豆腐味噌醃漬醬汁調製而成，這裡獨有的一道料理。佐以柚子胡椒提味，呈現鄉土與義大利料理的完美邂逅。',
      'pasta2.name': '茄子培根<br />番茄醬義大利麵', 'pasta2.desc': '以濃郁番茄醬汁烹製在地新鮮茄子與培根，是廣受歡迎的經典義大利麵。',
      'pasta3.name': '蝦仁干貝<br />新鮮番茄義大利辣麵', 'pasta3.desc': '彈牙的蝦仁與干貝，裹上新鮮番茄的清爽汁液，清新怡人的一道佳餚。',
      'pasta4.name': '菠菜培根<br />奶油義大利麵', 'pasta4.desc': '以濃滑奶油醬汁烹製新鮮菠菜與培根，口味溫和宜人。',
      'rice1.name': '南蠻雞排飯盤', 'rice1.desc': '淋上大量自製塔塔醬的道地南蠻雞排，份量十足，是開業以來始終不變的人氣菜單。', 'rice1.price': '¥1,600（附飲料）',
      'rice2.name': '鹽味炸雞飯盤', 'rice2.desc': '以溫和鹽味烹製的雞腿肉炸雞，外酥內嫩，外帶也深受歡迎。', 'rice2.price': '¥1,550（附飲料）',
      'rice3.name': '土耳其飯', 'rice3.desc': '雙份雞排配上肉醬蓋飯的豐盛料理，咖哩風味肉醬是一大亮點。', 'rice3.price': '¥1,600（附飲料）',
      'risotto1.name': '培根什錦菇<br />奶油燉飯', 'risotto1.desc': '以多種菇類與培根烹製的濃郁奶油燉飯，滑順的口感令人回味無窮。',
      'set1.name': '推薦套餐', 'set1.desc': '生火腿凱薩沙拉、湯品、蒜香烤麵包、義大利麵（從當日推薦中選擇）、甜點、飲料，完整全餐。',
      'waffle.name': '水果鬆餅', 'waffle.desc': '酥脆現烤的鬆餅，搭配當季水果、香草冰淇淋、果醬及大量楓糖漿。',
      'cake.name': '手作蛋糕', 'cake.desc': '每日輪替提供巧克力蛋糕、烤乳酪蛋糕、提拉米蘇、蘋果塔等手作甜點，外帶也大受歡迎。', 'cake.price': '每份 ¥600',
      'fullcat.pasta': '義大利麵', 'fullcat.risotto': '燉飯・推薦套餐', 'fullcat.rice': '單盤飯食（附飲料）', 'fullcat.coffee': '咖啡・飲料',
      'fullcat.pizza': '披薩（18cm）', 'fullcat.salad': '沙拉', 'fullcat.sweets': '甜點（13:00後）', 'fullcat.side': '配菜・兒童餐', 'fullcat.alcohol': '酒類・下酒菜（僅限晚餐）',
      'menu.note': '※ 價格含稅。部分菜單可能因季節而有所變動。',
      'voice.title': '顧客好評',
      'voice1.text': '「餐廳和料理都很時尚，感覺置身義大利！コムシロン義大利麵是別處吃不到的口味，下次一定還要再來！」', 'voice1.author': '— 女性・30多歲',
      'voice2.text': '「在露台座位一邊欣賞里山景色一邊吃義大利麵，真的太棒了。員工也很親切，讓我一直回來吃午餐。」', 'voice2.author': '— 女性・40多歲',
      'voice3.text': '「外帶了手作焦糖乳酪蛋糕，家人都讚不絕口！即使只為甜點也值得再訪。」', 'voice3.author': '— 女性・20多歲',
      'gallery.instagram': '在 Instagram 查看更多',
      'access.title': '店鋪資訊・交通方式',
      'access.name.label': '店名', 'access.name.val': 'KOMUSHIRON☆CAFE（コムシロン カフェ）',
      'access.addr.label': '地址', 'access.addr.val': '熊本縣下益城郡美里町小筵927',
      'access.tel.label': '電話',
      'access.hours.label': '營業時間',
      'hours.monwed': '週一・週三', 'hours.monwed.val': '11:00 ～ 14:30（L.O.）',
      'hours.thufri': '週四・週五', 'hours.thufri.val': '11:00 ～ 14:30（L.O.）/ 18:00 ～ 20:00（L.O.）',
      'hours.wknd': '週六・週日・假日', 'hours.wknd.val': '11:00 ～ 14:30（L.O.）/ 17:30 ～ 20:00（L.O.）',
      'access.closed.label': '公休日', 'access.closed.val': '星期二',
      'access.seats.label': '座位數', 'access.seats.val': '24席（含吧台6席）',
      'access.park.label': '停車場', 'access.park.val': '有（約10台）',
      'access.pay.label': '付款方式', 'access.pay.val': '現金・PayPay',
      'access.dir.label': '交通方式', 'access.dir.val': '從九州高速公路御船IC或松橋IC開車約25分鐘。也可順道拜訪美里町的觀光景點：二俣橋、佐俣之湯溫泉、日本最長石階（3,333段）等。',
      'footer.address': '〒861-4411 熊本縣下益城郡美里町小筵927／TEL 0964-46-3665',
    },

    ko: {
      'nav.concept': '컨셉', 'nav.menu': '메뉴', 'nav.gallery': '갤러리', 'nav.access': '오시는 길',
      'hero.sub': '구마모토 미사토마치의 작은 이탈리안 카페',
      'hero.tagline': '지역의 풍요와 손맛이 만나는 곳',
      'hero.btn': '메뉴 보기',
      'concept.title': '미사토의 자연에서<br />태어난 카페',
      'concept.p1': '구마모토현 미사토마치의 지명 「소무시로（小筵）」에서 이름을 따온 <strong>KOMUSHIRON☆CAFE</strong>. 지역 직판 시장 「마호로바노사토」 등에서 공수한 신선한 채소와 이 고장 특유의 식재료로 만든 파스타와 수제 스위츠를 선보입니다.',
      'concept.p2': '벽돌풍 건물에서 바라보이는 풍경을 느끼며 정통 이탈리안을 여유롭게 즐겨 보세요. 점심이든 저녁이든, 당신의 특별한 시간 곁에 함께하겠습니다.',
      'badge.local': '지역산 채소 사용', 'badge.sweets': '수제 스위츠', 'badge.kids': '키즈 플레이트', 'badge.terrace': '테라스 좌석', 'badge.paypay': 'PayPay 사용 가능',
      'menu.title': '정성을 담은 한 접시',
      'menu.desc': '「먹는 순간 가장 맛있는 상태」를 추구합니다. 세심하게 삶아낸 가는 면과 재료 본연의 맛을 최대한 살린 파스타를 맛보세요.',
      'menu.badge.signature': '시그니처', 'menu.badge.pop1': '인기 1위', 'menu.badge.pop2': '인기 2위', 'menu.badge.pop3': '인기 3위',
      'cat.pasta': '파스타', 'cat.rice': '원플레이트 라이스（음료 포함）', 'cat.risotto': '리조또・추천 세트', 'cat.sweets': '스위츠（13:00 이후）',
      'pasta1.name': '코무시론 파스타', 'pasta1.desc': '두부 된장 절임으로 소스를 만든, 이곳만의 특별한 파스타. 유자후추가 포인트인 향토와 이탈리안의 만남.',
      'pasta2.name': '가지와 베이컨의<br />토마토 파스타', 'pasta2.desc': '지역산 신선한 가지와 베이컨을 진한 토마토소스로 마무리한 인기 파스타.',
      'pasta3.name': '새우와 관자의<br />신선 토마토 페페론치노', 'pasta3.desc': '탱탱한 새우와 관자에 신선한 토마토의 싱그러움이 어우러진 상큼한 요리.',
      'pasta4.name': '시금치와 베이컨의<br />크림 파스타', 'pasta4.desc': '신선한 시금치와 베이컨을 부드러운 크림소스로 마무리한 포근한 맛의 요리.',
      'rice1.name': '치킨 남반 플레이트', 'rice1.desc': '수제 타르타르 소스를 듬뿍 얹은 정통 치킨 남반. 풍성한 양으로 오픈 때부터 변함없이 사랑받는 메뉴.', 'rice1.price': '¥1,600（음료 포함）',
      'rice2.name': '소금 닭튀김 플레이트', 'rice2.desc': '닭 허벅지살을 부드럽게 튀겨낸 담백한 소금 닭튀김. 겉은 바삭, 속은 촉촉해서 테이크아웃에도 인기.', 'rice2.price': '¥1,550（음료 포함）',
      'rice3.name': '터키 라이스', 'rice3.desc': '더블 치킨까스와 미트소스를 밥 위에 올린 든든한 한 접시. 카레 풍미의 미트소스가 포인트.', 'rice3.price': '¥1,600（음료 포함）',
      'risotto1.name': '베이컨과 각종 버섯의<br />크림 리조또', 'risotto1.desc': '여러 종류의 버섯과 베이컨으로 만든 진한 크림 리조또. 부드러운 식감이 일품.',
      'set1.name': '추천 세트', 'set1.desc': '프로슈토 시저 샐러드・수프・마늘 토스트・파스타（당일 추천 메뉴에서 선택）・디저트・음료로 구성된 풀코스.',
      'waffle.name': '과일 와플', 'waffle.desc': '바삭하게 구운 와플에 제철 과일・바닐라 아이스크림・잼과 메이플 시럽을 듬뿍 얹었습니다.',
      'cake.name': '수제 케이크', 'cake.desc': '가토 쇼콜라・베이크드 치즈케이크・티라미수・애플 타르트 등이 매일 바뀌어 진열됩니다. 테이크아웃도 인기.', 'cake.price': '각 ¥600',
      'fullcat.pasta': '파스타', 'fullcat.risotto': '리조또・추천 세트', 'fullcat.rice': '원플레이트 라이스（음료 포함）', 'fullcat.coffee': '커피・음료',
      'fullcat.pizza': '피자（18cm）', 'fullcat.salad': '샐러드', 'fullcat.sweets': '스위츠（13:00 이후）', 'fullcat.side': '사이드 메뉴・키즈', 'fullcat.alcohol': '알코올・안주（저녁만）',
      'menu.note': '※ 가격은 세금 포함입니다. 계절에 따라 메뉴가 변경될 수 있습니다.',
      'voice.title': '고객 후기',
      'voice1.text': '「가게도 요리도 세련되어 이탈리아에 와 있는 것 같아요. 코무시론 파스타는 다른 곳에서 먹을 수 없는 맛이라 꼭 다시 올 거예요!」', 'voice1.author': '— 여성・30대',
      'voice2.text': '「테라스 좌석에서 이산촌 경치를 바라보며 먹는 파스타는 최고예요. 직원분들도 따뜻해서 계속 점심 먹으러 오게 돼요.」', 'voice2.author': '— 여성・40대',
      'voice3.text': '「수제 캐러멜 치즈케이크를 테이크아웃했더니 가족들이 모두 좋아했어요! 스위츠만 먹으러 또 가고 싶은 가게예요.」', 'voice3.author': '— 여성・20대',
      'gallery.instagram': 'Instagram에서 더 보기',
      'access.title': '매장 정보 · 오시는 길',
      'access.name.label': '매장명', 'access.name.val': 'KOMUSHIRON☆CAFE（コムシロン カフェ）',
      'access.addr.label': '주소', 'access.addr.val': '구마모토현 시모마시키군 미사토마치 코무시로 927',
      'access.tel.label': '전화',
      'access.hours.label': '영업시간',
      'hours.monwed': '월・수', 'hours.monwed.val': '11:00 ～ 14:30（L.O.）',
      'hours.thufri': '목・금', 'hours.thufri.val': '11:00 ～ 14:30（L.O.）/ 18:00 ～ 20:00（L.O.）',
      'hours.wknd': '토・일・공휴일', 'hours.wknd.val': '11:00 ～ 14:30（L.O.）/ 17:30 ～ 20:00（L.O.）',
      'access.closed.label': '정기휴일', 'access.closed.val': '화요일',
      'access.seats.label': '좌석 수', 'access.seats.val': '24석（카운터 6석 포함）',
      'access.park.label': '주차장', 'access.park.val': '있음（약 10대）',
      'access.pay.label': '결제 방법', 'access.pay.val': '현금・PayPay',
      'access.dir.label': '오시는 길', 'access.dir.val': '규슈 고속도로 미후네 IC 또는 마쓰바세 IC에서 차로 약 25분. 후타마타 다리・사마타 온천・일본 최장 돌계단（3,333단）등 미사토마치 관광 명소에서도 들르실 수 있습니다.',
      'footer.address': '〒861-4411 구마모토현 시모마시키군 미사토마치 코무시로 927 / TEL 0964-46-3665',
    }
  };

  let currentLang = localStorage.getItem('komushiron-lang') || detectLang();

  function detectLang() {
    const nav = (navigator.language || 'ja').toLowerCase();
    if (nav.startsWith('zh')) return 'zh-TW';
    if (nav.startsWith('ko')) return 'ko';
    if (nav.startsWith('en')) return 'en';
    return 'ja';
  }

  function applyLang(lang) {
    if (!t[lang]) return;
    currentLang = lang;
    localStorage.setItem('komushiron-lang', lang);
    const d = t[lang];

    // textContent replacement
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const k = el.getAttribute('data-i18n');
      if (d[k] !== undefined) el.textContent = d[k];
    });
    // innerHTML replacement (for keys with <br>, <strong> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const k = el.getAttribute('data-i18n-html');
      if (d[k] !== undefined) el.innerHTML = d[k];
    });

    // html lang
    document.documentElement.lang = lang === 'zh-TW' ? 'zh-TW' : lang === 'ko' ? 'ko' : lang === 'en' ? 'en' : 'ja';

    // active button
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    // wire up buttons
    document.querySelectorAll('[data-lang]').forEach(btn => {
      btn.addEventListener('click', () => applyLang(btn.dataset.lang));
    });
    applyLang(currentLang);
  });

  window.i18nApply = applyLang;
})();
