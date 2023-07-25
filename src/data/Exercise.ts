// MORNING
const HamstringStretch = process.env.PUBLIC_URL + '/videos/mor-eve-hamstring-stretch.mp4';
const CalfStretch = process.env.PUBLIC_URL + "/videos/mor-eve-calf-stretch.mp4";
const QuadsStretch = process.env.PUBLIC_URL + "/videos/morning-quads-stretch.mp4";

// AFTERNOON
const StepUpForward = process.env.PUBLIC_URL + "/videos/afternoon-step-up-forward.mp4";
const CalfRaisesLeg = process.env.PUBLIC_URL + "/videos/afternoon-calf-raises-single-leg.mp4";
const SideStepUp = process.env.PUBLIC_URL + "/videos/afternoon-side-step-up.mp4";
const Lunges = process.env.PUBLIC_URL + "/videos/afternoon-lunges-alternating-legs.mp4";
const WallSit = process.env.PUBLIC_URL + "/videos/afternoon-wall-sit.mp4";
const StandingHamstring = process.env.PUBLIC_URL + "/videos/afternoon-standing-hamstring-curls.mp4";
const KickBacks = process.env.PUBLIC_URL + "/videos/afternoon-kickbacks.mp4";
const SitStand = process.env.PUBLIC_URL + "/videos/afternoon-sit-to-stand.mp4";
const SLR = process.env.PUBLIC_URL + "/videos/afternoon-slr-to-16-inches.mp4";

//EVENING
const FrontLying = process.env.PUBLIC_URL + "/videos/evening-front-lying-knee.mp4";
const SquatSingleLeg = process.env.PUBLIC_URL + "/videos/evening-squat-single-leg.mp4";
const SingleLegBridges = process.env.PUBLIC_URL + "/videos/evening-single-leg-bridges.mp4";
const BalanceCrossWalking = process.env.PUBLIC_URL + "/videos/evening-balance-cross-walking.mp4";
const BalanceShuttleWalking = process.env.PUBLIC_URL + "/videos/evening-balance-shuttle-walking.mp4";
const BalanceChangingDirection = process.env.PUBLIC_URL + "/videos/evening-balance-changing-direction.mp4";

export const MorningExerciseData = [
  {
    id: 1,
    title: " ران کے پچھلے حصے کے پٹھوں کو کھینچنا ",
    description: " اپنی پیٹھ کے بل لیٹتے ہوئے، آپریشن والی ٹانگ کو  باہر اور دوسری ٹانگ کو سیدھا اوپر کی طرف اٹھائیں. اپنی ران کے پچھلے حصے میں درمیانے درجے کا کھنچاؤ محسوس کریں۔ ",
    require: " پلنگ ",
    perform: " ایک منٹ ",
    video: HamstringStretch,
  },
  {
    id: 2,
    title: " پنڈلی کے پٹھے کو کھینچنا ",
    description: " دونوں بازو دیوار پر رکھ کر دیوار کے سامنے کھڑے ہوں، اپنی آپریشن والی ٹانگ کے سامنے اپنی دوسری ٹانگ رکھیں اور اپنی ٹانگ کے نچلے حصے کی پچھلی جانب موجود پنڈلی کے پٹھے کو کھینچنے کے لیے دیوار کے ساتھ ٹیک لگالیں۔ ",
    require: " دیوار ",
    perform: " ایک منٹ ",
    video: CalfStretch,
  },
  {
    id: 3,
    title: " ران کے اگلے حصے کے پٹھوں کو کھینچنا ",
    description: " دیوار کے ساتھ پیٹھ لگا کر کھڑے ہوتے ہوئے اپنی آپریشن والی ٹانگ کے پاؤں یا ٹخنے کو پکڑیں اور آہستگی سے پیچھے کی طرف کھینچیں۔ سہارے کے لیے دوسرے ہاتھ سے کرسی کو پکڑ لیں۔ آپ کو اپنی ران کے اگلے حصے میں کھنچاؤ محسوس ہونا چاہئے۔ آپ یہ کھنچاؤ پیٹ کے بَل لیٹ کر اور گھٹنے پیچھے موڑ کر اپنے ہاتھ یا تولیے سے پکڑ کر اس حالت میں بھی کر سکتے ہیں۔ اپنی ران کے اگلے حصے میں درمیانے درجے کا کھنچاؤ محسوس کریں۔ ", 
    require: " تولیہ، دروازے کا فریم ",
    perform: " دو منٹ ",
    video: QuadsStretch,
  },
]

export const AfternoonExerciseData = [
  {
    id: 1,
    title: " چھ انچ اوپر آگے کو بڑھنا ",
    description: "چھ انچ کی بلندی پر اوپر آگے اور پھر پیچھے نیچےکی طرف قدم بڑھائیں",
    require: " چھ انچ اونچی دو بڑی کتابیں یا چھ انچ اونچا بڑا کارڈ بورڈ ",
    perform: " 2/10 ",
    video: StepUpForward,
  },
  {
    id: 2,
    title: " سہارے کے ساتھ ایک قدم پر ران کے پٹھے سے ایک ٹانگ کو اٹھانا ",
    description: " اپنی آپریشن والی ٹانگ کو سہارے کے ساتھ آہستہ آہستہ پنجوں کے بَل لائیں اور پھر قدم کی سطح سے نیچے لے جائیں، تاکہ آپ اپنے ران کے پٹھے کو کھنچتے ہوئے محسوس کر سکیں۔ ",
    require: " اوپر چڑھنا یا آگے بڑھنا ",
    perform: " 1/10 ",
    video: CalfRaisesLeg,
  },
  {
    id: 3,
    title: " ایک سائیڈ کو دو انچ قدم اٹھانا ",
    description: " اپنی آپریشن والی ٹانگ کو سیڑھی پر اور اپنی دوسری ٹانگ کو ایک طرف زمین پر رکھتے ہوئے، اپنا سارا وزن آپریشن والی ٹانگ پر منتقل کریں اور آہستہ آہستہ اپنی دوسری ٹانگ کو فرش سے اٹھائیں، سیڑھی کو چھوئیں اور آہستہ آہستہ ابتدائی حالت پر نیچے لے جائیں۔ ", 
    require: " دو انچ کی ایک-دو کتابیں ",
    perform: " 2/10 ",
    video: SideStepUp,
  },
  {
    id: 4,
    title: " باری باری ٹانگوں کو آگے پیچھے کرنا ",
    description: " ایک قدم کو آگے رکھیں اور آگے نیچے کو جھکیں، اور پھر اگلی ٹانگ کو واپس پہلی حالت پر لا کر دوسری ٹانگ کے ساتھ یہی عمل دہرائیں۔ ",
    require: " کوئی نہیں ",
    perform: " 1/10 ",
    video: Lunges,
  },
  {
    id: 5,
    title: " دیوار کے سہارے بیٹھنا ",
    description: " اپنی پیٹھ کو دیوار پر ٹکا کر کھڑے ہو جائیں اور پھر دونوں گھٹنوں کو نوے درجے تک جھکائیں اور کندھے کی چوڑائی کو الگ رکھیں۔ اگر آپ کو لگتا ہے کہ آپ گرنے والے ہیں تو سہارے کے لیے قریب کوئی چیز رکھ لیں، تاکہ جب آپ واپس سیدھی حالت پر آئیں تو وہ آپ کے لیے مددگار ہو۔ ",
    require: " دیوار ",
    perform: " ایک منٹ ",
    video: WallSit,
  },
  {
    id: 6,
    title: " گھٹنے کے پچھلے پٹھوں کو موڑ کر کھڑے ہونا ",
    description: " کیبل مشین یا مزاحمتی رسی کا استعمال کرتے ہوئے 1-5 پاؤنڈ مزاحمت کے ساتھ بغیر درد کے اپنے گھٹنے کو موڑ کر کھڑے ہونا۔ ",
    require: " کیبل مشین یا مزاحمتی رسی ",
    perform: " 1/10 ",
    video: StandingHamstring,
  },
  {
    id: 7,
    title: " گھٹنے کو موڑ کر کھڑے ہونا ",
    description: " کیبل مشین یا مزاحمتی رسی کا استعمال کرتے ہوئے 1-5 پاؤنڈ مزاحمت کے ساتھ بغیر درد کے اپنے گھٹنے کو موڑ کر کھڑے ہونا۔ ",
    require: " کیبل مشین یا مزاحمتی رسی ",
    perform: " 1/10 ",
    video: KickBacks,
  },
  {
    id: 8,
    title: " ایک ٹانگ پر اٹھنا بیٹھنا ",
    description: " ایک مضبوط کرسی کا استعمال کرتے ہوئے اپنے کولہے کو نیچے کی طرف لائیں اور کرسی پر بیٹھ جائیں۔ پھر اپنی ٹانگ کے پٹھوں کا استعمال کرتے ہوئے بازو کا سہارا لیے بغیر آہستہ آہستہ اٹھیں۔ ",
    require: " کرسی ",
    perform: " 1/10 ",
    video: SitStand,
  },
  {
    id: 9,
    title: " سیدھی ٹانگ ٹخنے پر وزن کے ساتھ 16 انچ تک اوپر اٹھانا ",
    description: " -پیٹھ کے بل لیٹ جائیں اپنے گھٹنے کے اوپر والے پٹھوں کو اکڑائیں اور اپنی پوری ٹانگ کو فرش سے 1 انچ اٹھائیں، صرف اس صورت میں جبکہ آپ اپنی ٹانگ اٹھاتے وقت گھٹنے کو موڑنے کے بغیر ایسا کر سکتے ہوں۔ اپنی برداشت کے مطابق دو سے پانچھ پاؤنڈ کے درمیان ٹخنے پر وزن شامل کریں ",
    require: " کوئی نہیں ",
    perform: " 1/10 ",
    video: SLR,
  },
]

export const EveningExerciseData = [
  {
    id: 1,
    title: " ٹخنے پر وزن کے ساتھ سامنے پھیلا ہوا گھٹنا موڑنا ",
    description: " پیٹ کے بل لیٹتے ہوئے اپنے گھٹنے کو سیدھے اوپر سے مکمل موڑنے تک اور پھر نیچے کی طرف موڑیں۔ 2-5 پاؤنڈ ٹخنے پر وزن استعمال کریں۔ حرکت آپ کے آپریشن والے گھٹنے کے برابر نہ ہو تو اس کے بہت قریب ہونی چاہیے۔ ",
    require: " ٹخنے پر وزن: دو سے پانچھ پونڈ ",
    perform: " 1/10 ",
    video: FrontLying,
  },
  {
    id: 2,
    title: " سہارا لے کر ایک ٹانگ کو آدھا نیچے بٹھانا ",
    description: " اپنا پورا وزن آپریشن والی ٹانگ پر ڈال کر اور دوسرے گھٹنے کو موڑ کر اپنے جسم کو آہستہ آہستہ نیچے لائیں یہاں تک کہ آپ کے گھٹنے 60 درجے تک جھک جائیں۔ کچھ سہارا لینے کے لیے کسی مضبوط کرسی کی پشت کا استعمال کریں۔ جب آپ اپنے جسم کو نیچے رکھیں تو اپنے کولہے کو باہر رکھیں اور اگر آپ کو سہارے کی ضرورت ہو تو قریب ایک میز رکھ لیں۔ ",
    require: " کرسی، میز ",
    perform: " 1/10 ",
    video: SquatSingleLeg,
  },
  {
    id: 3,
    title: " ایک ٹانگ پر پل بنانا ",
    description: " پشت کے بل لیٹے ہوئے اپنے آپریشن والے گھٹنے کو جھکا کر اور دوسرے گھٹنے کو سیدھا رکھ کر صرف اپنے آپریشن والے پاؤں کے ذریعے نیچے کی طرف وزن ڈالیں اور اپنے کولہوں کو فرش سے اٹھائیں جب تک کہ آپ کے کولہے سیدھے نہ ہو جائیں اور پھر آہستہ آہستہ نیچے لائیں۔ ",
    require: " کوئی نہیں۔ ",
    perform: " 2/10 ",
    video: SingleLegBridges,
  },
  {
    id: 4,
    title: " دس فٹ تک پاؤں ایک دوسرے کے آگے رکھ کرتوازن سے چلنا ",
    description: " دس فٹ کے فاصلے پر 2ہدف متعین کریں۔ آگے جاتے ہوئے اپنی دائیں ٹانگ کو بائیں ٹانگ کے اور پھر آگے جاتے ہوئے بائیں ٹانگ کو دائیں ٹانگ کے آگے رکھیں۔ پھر اسی عمل کو پیچھے کی طرف دہرائیں۔ جیسے جیسے آپ بہتر ہوتے جائیں اپنی رفتار بڑھاتے جائیں۔ ",
    require: " دو اہداف ",
    perform: " پانچھ منٹ ",
    video: BalanceCrossWalking,
  },
  {
    id: 5,
    title: " توازن کے ساتھ آگے پیچھے چلنا ",
    description: " پانچھ، دس، پندرہ فٹ کے فاصلے پر 3 اہداف متعین کریں۔ 5 فٹ چلنے سے آغاز کریں اور پھر سٹارٹ پوائنٹ تک پیچھے کی طرف چلیں، پھر 10 فٹ آگے چلیں اور پانچھ فٹ پیچھے چلیں اور پھر 15 فٹ کے ہدف کی طرف آگے چلیں اور 10 فٹ والے ہدف کی طرف پیچھے کی طرف چلیں اور پھر 15 فٹ کے ہدف تک چل کر ختم کریں۔ جیسے جیسے اس ورزش میں بہتری محسوس کریں تو رفتار بڑھاتے جائیں۔ ",
    require: " تین اہداف ",
    perform: " پانچھ منٹ ",
    video: BalanceShuttleWalking,
  },
  {
    id: 6,
    title: " سمتوں کو تبدیل کرنے میں توازن ",
    description: " اپنے ساتھی کی طرف منہ کرکے کھڑے ہوں اور وہ آپ کو ہاتھ سے آگے، پیچھے، دائیں، بائیں حرکت کرنے کا اشارہ کرے۔ ایک بار جب آپ کا ساتھی اشارہ کر دے تو اگلا اشارہ دینے تک اسی سمت میں بڑھتے رہیں۔ 30 سیکنڈ کے مقابلے کل 5 منٹ تک جاری رکھیں ",
    require: " ایک اور شخص کی ضرورت ہے ",
    perform: " پانچھ منٹ ",
    video: BalanceChangingDirection,
  },
  {
    id: 7,
    title: " ران کے پچھلے حصے کے پٹھوں کو کھینچنا ",
    description: " دروازے کے قریب اپنی پیٹھ کے بل لیٹتے ہوئے، آپریشن والی ٹانگ کو دروازے سے باہر اور دوسری ٹانگ کو دروازے کے فریم کے ساتھ اوپر رکھیں۔ اپنی ران کے پچھلے حصے میں درمیانے درجے کا کھنچاؤ محسوس کریں۔ ",
    require: " دیوار ",
    perform: " ایک منٹ ",
    video: HamstringStretch,
  },
  {
    id: 8,
    title: " پنڈلی کے پٹھے کو کھینچنا ",
    description: " دونوں بازو دیوار پر رکھ کر دیوار کے سامنے کھڑے ہوں، اپنی آپریشن والی ٹانگ کے سامنے اپنی دوسری ٹانگ رکھیں اور اپنی ٹانگ کے نچلے حصے کی پچھلی جانب موجود پنڈلی کے پٹھے کو کھینچنے کے لیے دیوار کے ساتھ ٹیک لگالیں۔ ",
    require: " دیوار ",
    perform: " ایک منٹ ",
    video: CalfStretch,
  },
  {
    id: 9,
    title: " ران کے اگلے حصے کے پٹھوں کو کھینچنا ",
    description: " دیوار کے ساتھ پیٹھ لگا کر کھڑے ہوتے ہوئے اپنی آپریشن والی ٹانگ کے پاؤں یا  ٹخنے کو پکڑیں اور آہستگی سے پیچھے کی طرف کھینچیں۔ آپ کو اپنی ران کے اگلے حصے میں کھنچاؤ محسوس ہونا چاہئے۔ آپ یہ کھنچاؤ پیٹ کے بَل لیٹ کر اور گھٹنے پیچھے موڑ کر اپنے ہاتھ یا تولیے سے پکڑ کر اس حالت میں بھی کر سکتے ہیں۔ اپنی ران کے اگلے حصے میں درمیانے درجے کا کھنچاؤ محسوس کریں۔ ",
    require: " تولیہ، دروازے کا فریم ",
    perform: " دو منٹ ",
    video: QuadsStretch,
  },
]