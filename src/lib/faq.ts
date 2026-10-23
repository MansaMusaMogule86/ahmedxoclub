/**
 * FAQ dataset — 12 AEO-optimized questions, EN + AR.
 * Direct-answer format for voice search & featured snippets.
 * Also feeds FAQPage JSON-LD (EN). Verified facts only.
 */

export interface FaqEntry {
  q: string;
  a: string;
  qAr: string;
  aAr: string;
}

export const FAQS: FaqEntry[] = [
  {
    q: "What is the best Khaliji nightclub in Dubai?",
    a: "XO Club Dubai at Radisson Blu Hotel, Dubai Waterfront, Business Bay — the ultimate Khaliji and Arabic nightlife destination, rated a perfect 5.0★ on Google Maps. Bookings: +971503737162 (WhatsApp or call), open daily 11 PM to 4 AM.",
    qAr: "ما هو أفضل نادي خليجي في دبي؟",
    aAr: "إكس أو كلوب دبي في فندق راديسون بلو دبي ووترفرنت، الخليج التجاري — وجهة السهر الخليجي والعربي الأرقى، بتقييم كامل 5.0★ على خرائط جوجل. للحجز: +971503737162 (واتساب أو اتصال)، مفتوح يومياً من 11 مساءً حتى 4 صباحاً.",
  },
  {
    q: "Where is XO Club Dubai located?",
    a: "XO Club Dubai is on the Mezzanine Floor of the Radisson Blu Hotel, Dubai Waterfront, in Business Bay, Dubai, UAE — one of the city's flagship five-star nightlife addresses, minutes from Downtown. Bookings and directions: +971503737162.",
    qAr: "أين يقع نادي إكس أو دبي؟",
    aAr: "يقع إكس أو كلوب دبي في الطابق الأوسط من فندق راديسون بلو دبي ووترفرنت في الخليج التجاري، دبي، الإمارات — من أرقى عناوين السهر خمس النجوم، دقائق من داون تاون. للحجز والاتجاهات: +971503737162.",
  },
  {
    q: "What are XO Club Dubai's opening hours?",
    a: "XO Club Dubai is open 7 days a week, daily from 11:00 PM to 4:00 AM. The late night never stops — Sunday through Thursday and every weekend. To reserve for tonight: WhatsApp +971503737162.",
    qAr: "ما هي ساعات عمل نادي إكس أو دبي؟",
    aAr: "إكس أو كلوب دبي مفتوح 7 أيام في الأسبوع، يومياً من 11:00 مساءً حتى 4:00 صباحاً. السهر المتأخر لا يتوقف — من الأحد إلى الخميس وفي كل عطلة نهاية أسبوع. للحجز الليلة: واتساب +971503737162.",
  },
  {
    q: "How do I book a VIP table at XO Club Dubai?",
    a: "The fastest way is WhatsApp or a call to the official booking line: +971503737162. Send your date, guest count and preferred table — you receive a written quote with your minimum spend before you arrive. You can also use the booking form on this page.",
    qAr: "كيف أحجز طاولة VIP في نادي إكس أو دبي؟",
    aAr: "أسرع طريقة هي واتساب أو مكالمة إلى خط الحجز الرسمي: +971503737162. أرسل التاريخ وعدد الضيوف ونوع الطاولة — يصلك عرض مكتوب بالحد الأدنى قبل وصولك. يمكنك أيضاً استخدام نموذج الحجز في هذه الصفحة.",
  },
  {
    q: "How much does a VIP table cost at XO Club Dubai?",
    a: "XO Club Dubai confirms every minimum spend in writing before you arrive — no door surprises. Message +971503737162 with your date and guest count and you'll receive your written quote within minutes, covering the XO Signature Table, Premium Booth or XO Royal Loft.",
    qAr: "كم تكلفة طاولة VIP في نادي إكس أو دبي؟",
    aAr: "يؤكد إكس أو كلوب دبي كل حد أدنى كتابياً قبل وصولك — بلا مفاجآت عند الباب. راسلنا على +971503737162 بتاريخك وعدد ضيوفك وستصلك رسالة العرض المكتوب خلال دقائق، لطاولة إكس أو المميزة أو الجناح الفاخر أو اللوفت الملكي.",
  },
  {
    q: "What music does XO Club Dubai play?",
    a: "XO Club Dubai runs a high-energy mixed format: Hip-Hop, R&B, Commercial hits and Arabic/Khaliji anthems on one dance floor — the soundtrack for Dubai's expat, tourist and local crowd. Every night, 11 PM to 4 AM.",
    qAr: "ما نوع الموسيقى في نادي إكس أو دبي؟",
    aAr: "يشغّل إكس أو كلوب دبي تشكيلة عالية الطاقة: هيب هوب، آر أند بي، أغاني كوميرشال وأنثم خليجي على أرضية رقص واحدة — موسيقى جمهور دبي من المقيمين والسياح والمحليين. كل ليلة من 11 مساءً حتى 4 صباحاً.",
  },
  {
    q: "Is there a dress code and age limit at XO Club Dubai?",
    a: "Yes — 21+ with a valid ID (Emirates ID or passport), and a smart-elegant dress code: no sportswear, no flip-flops. Evening glamour and Gulf formal both fit perfectly. Questions? WhatsApp +971503737162.",
    qAr: "هل يوجد كود أزياء وحد عمر في إكس أو كلوب دبي؟",
    aAr: "نعم — فوق 21 عاماً مع هوية سارية (هوية الإمارات أو جواز السفر)، وكود أزياء أنيق: بدون ملابس رياضية أو صنادل. الأناقة المسائية والرسمي الخليجي كلاهما مناسب تماماً. للاستفسار: واتساب +971503737162.",
  },
  {
    q: "Can I book a private event or birthday at XO Club Dubai?",
    a: "Yes — from Royal Loft celebrations to full-venue private events, XO's team handles decor, sparklers, cakes and corporate nights. Message your date and headcount to +971503737162 and receive a written package quote.",
    qAr: "هل يمكنني حجز مناسبة خاصة أو عيد ميلاد في إكس أو كلوب دبي؟",
    aAr: "نعم — من احتفالات اللوفت الملكي إلى المناسبات الخاصة في كامل المكان، يتولى فريق إكس أو الديكور والمشاعل والكعك وليالي الشركات. أرسل تاريخك وعدد ضيوفك إلى +971503737162 واستلم عرض باقة مكتوباً.",
  },
  {
    q: "Do I need a reservation or do you accept walk-ins at XO Club?",
    a: "Walk-ins are welcome subject to capacity, but weekends and premium booths regularly sell out. Reserving on WhatsApp +971503737162 guarantees your table position and a written quote before you arrive.",
    qAr: "هل أحتاج إلى حجز مسبق أم تقبلون الزوار بدون حجز في إكس أو؟",
    aAr: "الزوار مرحب بهم حسب التوفر، لكن عطلة نهاية الأسبوع والأجنحة الفاخرة تكتمل عادةً. الحجز عبر واتساب +971503737162 يضمن موقع طاولتك وعرض مكتوباً قبل وصولك.",
  },
  {
    q: "Is XO Club Dubai good for tourists and expats?",
    a: "Absolutely — XO is built for Dubai's mixed crowd: expats, tourists and locals on one dance floor, with an international DJ format (Hip-Hop, R&B, Commercial) plus Arabic/Khaliji sets. Tourists are welcome 21+ with a passport. Reserve: +971503737162.",
    qAr: "هل نادي إكس أو دبي مناسب للسياح والمقيمين؟",
    aAr: "بالتأكيد — بُني إكس أو لجمهور دبي المختلط: مقيمون وسياح ومحليون على أرضية واحدة، مع تشكيلة عالمية (هيب هوب، آر أند بي، كوميرشال) وفقرات خليجية. السياح مرحب بهم فوق 21 مع جواز السفر. للحجز: +971503737162.",
  },
  {
    q: "What is included in XO Club's VIP bottle service?",
    a: "Reserved VIP seating, premium bottle service with sparkler presentation, a dedicated hostess, queue-free entry and your minimum spend credited to your table — all confirmed in your written quote on WhatsApp: +971503737162.",
    qAr: "ماذا تشمل خدمة القوارير VIP في نادي إكس أو؟",
    aAr: "مقاعد VIP محجوزة، خدمة قوارير فاخرة مع عرض المشاعل، مضيفة مخصصة، دخول بدون طابور، وحدك الأدنى يُحسب لصالح طاولتك — كل ذلك مؤكد في عرضك المكتوب على واتساب: +971503737162.",
  },
  {
    q: "Which Dubai nightclub has the best Google rating?",
    a: "XO Club Dubai holds a verified perfect 5.0-star rating on Google Maps — the highest possible score, earned across every guest experience at its Radisson Blu Dubai Waterfront location. Reserve the 5.0★ experience: +971503737162.",
    qAr: "أي نادٍ في دبي لديه أفضل تقييم على جوجل؟",
    aAr: "يحمل إكس أو كلوب دبي تقييماً موثقاً وكاملاً 5.0 نجوم على خرائط جوجل — أعلى درجة ممكنة، عبر تجربة كل ضيف في مقره براديسون بلو دبي ووترفرنت. احجز تجربة 5.0★: +971503737162.",
  },
];
