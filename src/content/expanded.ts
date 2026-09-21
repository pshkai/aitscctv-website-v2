import { bi, type Copy, type Section } from './model';
export interface Detail {
  path: string;
  title: Copy;
  summary: Copy;
  sections: Section[];
  sources: string[];
  related: string[];
}
const section = (th: string, en: string, bodyTh: string, bodyEn: string): Section => ({
  title: bi(th, en),
  body: bi(bodyTh, bodyEn),
});
const detail = (
  path: string,
  th: string,
  en: string,
  summaryTh: string,
  summaryEn: string,
  source: string,
  sections: Section[],
  related: string[] = [],
): Detail => ({
  path,
  title: bi(th, en),
  summary: bi(summaryTh, summaryEn),
  sources: ['https://aitscctv.com/' + source + '/'],
  sections,
  related,
});
export const details: Detail[] = [
  detail(
    'solutions/cctv/installation',
    'ติดตั้งกล้องวงจรปิด',
    'CCTV installation',
    'วางจุดกล้อง เลือกระบบบันทึก เดินสายและตั้งค่าดูผ่านมือถือให้ตรงกับพื้นที่',
    'Camera positions, recording, cabling and mobile viewing planned around your premises.',
    'cctv-camera-service',
    [
      section(
        'เริ่มจากภาพที่ต้องการเห็น',
        'Start with the image you need',
        'ระบุประตู ทางเข้า ที่จอดรถ จุดรับเงิน และพื้นที่เสี่ยง เลือกมุมภาพตามระยะที่ต้องการดูรายละเอียด ตรวจแสงย้อนและสภาพกลางคืนก่อนกำหนดเลนส์ ความละเอียด และตำแหน่งติดตั้ง',
        'Identify entrances, parking, payment points and risk areas. Match lens and resolution to the detail needed at each distance, including backlighting and night conditions.',
      ),
      section(
        'Analog HD หรือ IP',
        'Analog HD or IP',
        'Analog HD ใช้สายสัญญาณและเครื่องบันทึกที่รองรับ เหมาะกับการประเมินปรับปรุงสายเดิม ส่วน IP ใช้เครือข่ายและอาจจ่ายไฟผ่าน PoE ต้องตรวจสอบสวิตช์ งบกำลังไฟ และความเข้ากันได้ของเครื่องบันทึก ไม่เลือกจากจำนวนพิกเซลเพียงอย่างเดียว',
        'Analog HD uses compatible signal cabling and a recorder and may suit an existing installation. IP uses the network and may use PoE; check switch capacity, power budget and recorder compatibility, alongside image quality.',
      ),
      section(
        'เดินสาย ติดตั้ง และทดสอบ',
        'Cable, install and verify',
        'ตกลงแนวท่อและระยะสายก่อนเริ่มงาน จัดสายและติดป้ายให้ติดตามได้ ทดสอบภาพสด การบันทึก ภาพย้อนหลัง เวลาเครื่อง และการเข้าถึงผ่านมือถือ ส่งมอบบัญชีผู้ใช้และวิธีสำรองคลิปให้ผู้ดูแล',
        'Agree conduit routes and cable lengths, organise and label cables, then check live views, recording, playback, timestamps and remote access. Handover includes user access and clip export instructions.',
      ),
      section(
        'พื้นที่จัดเก็บและไฟสำรอง',
        'Recording capacity and backup power',
        'จำนวนวันย้อนหลังขึ้นกับจำนวนกล้อง บิตเรต ภาพต่อวินาที การบีบอัด และตารางบันทึก ตัวอย่างเดิม: 2 กล้อง กล้องละ 35 GB/วัน ใช้ 70 GB/วัน หากพื้นที่ใช้งาน 900 GB จะได้ประมาณ 12 วัน เป็นตัวอย่างคำนวณ ไม่ใช่ระยะรับประกันของ HDD 1 TB ทุกระบบ',
        'Retention depends on camera count, bitrate, frame rate, codec and recording schedule. The source example uses two cameras at 35 GB/day each: 900 GB usable / 70 GB/day is about 12 days. This is an illustration, not a guaranteed retention period for every 1 TB disk.',
      ),
    ],
    ['solutions/cctv/packages', 'about/installation-standards', 'faq/cctv'],
  ),
  detail(
    'solutions/cctv/maintenance',
    'ดูแลและบำรุงรักษากล้องวงจรปิด',
    'CCTV maintenance',
    'ตรวจภาพย้อนหลัง ฮาร์ดดิสก์ เวลาเครื่อง และสภาพอุปกรณ์ ก่อนถึงวันที่จำเป็นต้องใช้ภาพ',
    'Check playback, storage, clock settings and equipment condition before footage is needed.',
    'cctv-camera-service',
    [
      section(
        'ตรวจเป็นรอบ ไม่รอให้ภาพหาย',
        'Check regularly',
        'ตรวจภาพทุกช่องทั้งกลางวันและกลางคืน ดูว่ามีกิ่งไม้ ฝุ่น หรือสิ่งกีดขวางหรือไม่ ทดลองค้นหาและส่งออกภาพย้อนหลัง ตรวจเวลาเครื่องและพื้นที่บันทึก แผนเดิมแนะนำตรวจอย่างน้อยเดือนละครั้ง โดยปรับรอบให้เหมาะกับหน้างาน',
        'Check every camera by day and night for dirt and obstructions. Test searching and exporting footage and check recorder time and storage. The source recommends monthly checks; adapt frequency to site conditions.',
      ),
      section(
        'ภาพดำหรือบันทึกไม่ได้',
        'Black screen or missing recording',
        'จดช่องที่มีปัญหา เวลาเริ่มเกิด และข้อความบนเครื่อง ตรวจไฟแสดงสถานะและสายเชื่อมต่อที่เข้าถึงได้อย่างปลอดภัย อย่ารีเซ็ตหรือล้างฮาร์ดดิสก์ก่อนตรวจข้อมูล หากต้องปีนหรือเปิดตู้ไฟให้ช่างดำเนินการ',
        'Record the affected channel, start time and messages. Inspect accessible status lights and connections safely. Do not reset or format before checking recordings; let technicians handle elevated or electrical work.',
      ),
      section(
        'ซ่อมตามอาการหรือแผนดูแล',
        'Corrective work or a maintenance plan',
        'แยกงานตรวจเช็ก อะไหล่ การเข้าหน้างาน และเวลาตอบรับในข้อตกลงบริการ ระบบเช่าต้องอ้างอิงระยะสัญญา ส่วนงานติดตั้งเดิมให้เตรียมเลขที่งานและเอกสารรับประกันก่อนแจ้งซ่อม',
        'Agree inspection scope, parts, visits and response arrangements separately. Rental support follows its contract period; existing installations should be reported with job references and warranty documents.',
      ),
    ],
    ['support', 'support/warranty', 'support/manuals'],
  ),
  detail(
    'solutions/access-control/card-access',
    'คีย์การ์ดและเครื่องอ่านบัตร',
    'Key cards & card access',
    'จัดสิทธิ์เข้าออกสำหรับสำนักงาน หอพัก และโรงแรม พร้อมวางแผนยกเลิกบัตรและทางออกฉุกเฉิน',
    'Manage office, accommodation and hotel access, with card revocation and emergency exit planning.',
    'access-control-system/card-scanner',
    [
      section(
        'เลือกจากการใช้งานประตู',
        'Plan around each doorway',
        'ตรวจชนิดประตู กลอน จุดยึด และจำนวนผู้ใช้ เลือกระบบอ่านบัตรที่เข้ากับบัตรเดิมและซอฟต์แวร์ผู้ดูแล เครื่องอ่านบัตรใช้ตรวจสิทธิ์ ส่วนเครื่องเขียนบัตรทำหน้าที่ต่างกัน ไม่ใช่อุปกรณ์เดียวกันเสมอ',
        'Check door construction, locks, mounting and user count. Match reader technology to credentials and management software. A reader verifies a credential; a card encoder performs a different function.',
      ),
      section(
        'สิทธิ์และบันทึกเวลา',
        'Permissions and attendance',
        'กำหนดสิทธิ์ตามประตูและช่วงเวลา วางขั้นตอนออกบัตรใหม่ ยกเลิกบัตรหาย และถอนสิทธิ์พนักงานที่ออกจากงาน หากใช้บันทึกเวลาทำงานต้องตรวจรูปแบบรายงานและการเชื่อมกับระบบบุคคล',
        'Define access by door and time period, including issuing replacements, revoking lost cards and removing former staff. For attendance, check export formats and HR integration.',
      ),
      section(
        'หอพัก โรงแรม และไฟดับ',
        'Accommodation and loss of power',
        'หอพักมักต้องจัดการผู้เช่าจำนวนมาก โรงแรมมีเรื่องวันหมดอายุของสิทธิ์และระบบห้องพัก พฤติกรรมเมื่อไฟดับขึ้นกับกลอนและวงจรจริง ต้องทดสอบวิธีออกฉุกเฉินและไฟสำรองก่อนส่งมอบ',
        'Accommodation needs frequent user changes; hotels may need stay dates and room-system integration. Power-loss behaviour depends on the actual lock and wiring. Verify emergency release and backup power during handover.',
      ),
    ],
    ['solutions/access-control/biometric', 'faq/access-control'],
  ),
  detail(
    'solutions/access-control/biometric',
    'สแกนนิ้ว ใบหน้า และบันทึกเวลา',
    'Biometrics & time attendance',
    'ประเมินวิธียืนยันตัวตน ซอฟต์แวร์ และการจัดการข้อมูลผู้ใช้ก่อนเลือกเครื่อง',
    'Assess identity methods, software and user-data handling before selecting a reader.',
    'access-control-system/fingerprint-scanner',
    [
      section(
        'วิธีสแกนต้องเหมาะกับผู้ใช้',
        'Match the reader to its users',
        'เปรียบเทียบบัตร ลายนิ้วมือ และใบหน้า โดยทดลองกับสภาพหน้างานจริง เช่น แสง มือเปียก หรือการสวมอุปกรณ์ทำงาน มีวิธีสำรองสำหรับผู้ที่สแกนไม่ได้ และไม่ตั้งสมมติฐานว่าทุกรุ่นแม่นยำเท่ากัน',
        'Compare cards, fingerprints and face readers under actual lighting and working conditions. Provide a fallback for unsuccessful scans and test the selected model.',
      ),
      section(
        'โปรแกรมและการเชื่อมต่อ',
        'Software and connectivity',
        'ตรวจว่าโปรแกรมรวมในราคาหรือมีค่าใช้งานเพิ่มเติม รองรับรายงานเวลาและจำนวนผู้ใช้เพียงใด ระบบออนไลน์อาจเก็บข้อมูลในเครื่อง เซิร์ฟเวอร์ หรือบริการคลาวด์ ขึ้นกับรุ่น ต้องระบุที่เก็บข้อมูลและสิทธิ์ผู้ดูแลให้ชัด',
        'Confirm software licensing, reporting and user capacity. Connected systems may store data locally, on a server or in a cloud service; document the actual storage location and administrator permissions.',
      ),
      section(
        'ส่งมอบพร้อมวิธีจัดการผู้ใช้',
        'Handover user administration',
        'ทดสอบเพิ่มและลบผู้ใช้ เปลี่ยนสิทธิ์ สำรองการตั้งค่า และส่งออกรายงาน กำหนดผู้ดูแลข้อมูลและกระบวนการลบข้อมูลเมื่อหมดความจำเป็น รายละเอียดต้องตกลงกับองค์กรก่อนใช้งาน',
        'Test enrolment, deletion, permission changes, settings backup and report export. Agree ownership and deletion procedures with the organisation before use.',
      ),
    ],
    ['solutions/access-control/card-access', 'faq/access-control'],
  ),
  detail(
    'solutions/networking/lan-cabling',
    'เดินสาย LAN และจัดตู้ Rack',
    'LAN cabling & racks',
    'สำรวจจุดใช้งาน เลือกประเภทสาย จัดตู้ และทดสอบลิงก์เพื่อให้ดูแลระบบต่อได้',
    'Plan outlets, cable categories, rack organisation and link testing for a maintainable network.',
    'network-service/lan-cable',
    [
      section(
        'จำนวนจุดและเส้นทาง',
        'Outlets and routes',
        'ระบุโต๊ะทำงาน กล้อง จุดกระจาย Wi-Fi โทรศัพท์ และอุปกรณ์เครือข่าย รวมพื้นที่เผื่อขยาย วัดเส้นทางจริงและเลือกท่อให้เหมาะกับภายในอาคาร ภายนอก หรือแนวใต้ดิน',
        'Count desks, cameras, Wi-Fi points, phones and network equipment, including expansion. Measure actual routes and choose containment for indoor, outdoor or underground conditions.',
      ),
      section(
        'เลือกสายพร้อมหัวต่อและอุปกรณ์',
        'Choose the complete link',
        'Cat5e และ Cat6 เป็นตัวเลือกที่พบในข้อมูลเดิม แต่ความเร็วจริงขึ้นกับระยะ คุณภาพหัวต่อ การติดตั้ง และอุปกรณ์ทั้งสองปลาย ไม่ใช่ชื่อสายเพียงอย่างเดียว ลิงก์ทองแดงทั่วไปวางแผนความยาวรวมไม่เกิน 100 เมตร งานไกลกว่านี้ต้องออกแบบใหม่',
        'The source discusses Cat5e and Cat6. Link performance also depends on length, terminations, installation and both endpoints. Conventional copper Ethernet channels are planned within 100 metres; longer runs need a different design.',
      ),
      section(
        'ทดสอบและติดป้าย',
        'Test and label',
        'ติดป้ายทั้งสองปลายให้ตรงกับผัง จัด patch panel และสาย patch ให้เข้าถึงง่าย ตรวจลำดับคู่สายและผลทดสอบตามขอบเขตงาน ส่งมอบตารางหมายเลขพอร์ตเพื่อช่วยแก้ปัญหาและขยายระบบ',
        'Match both-end labels to the plan. Organise patch panels and cords for access, check wire mapping and agreed test results, and hand over the port schedule.',
      ),
    ],
    ['solutions/networking/fiber-optic', 'about/installation-standards', 'faq/networking'],
  ),
  detail(
    'solutions/networking/fiber-optic',
    'เดินสาย Fiber Optic',
    'Fiber-optic cabling',
    'เชื่อมระหว่างชั้น อาคาร และระยะไกล พร้อมเข้าหัว จัดถาด และตรวจสัญญาณ',
    'Connect floors, buildings and longer routes with termination, tray management and signal checks.',
    'network-service/fiberoptic-cable',
    [
      section(
        'Single-mode และ Multimode',
        'Single-mode and multimode',
        'เลือกระบบจากระยะทาง ความเร็ว จำนวนคอร์ และอุปกรณ์รับส่งทั้งสองด้าน ระยะรองรับไม่ได้กำหนดจากคำว่าไฟเบอร์อย่างเดียว ต้องตรวจรุ่นสายและโมดูลร่วมกัน รวมคอร์สำรองสำหรับการขยาย',
        'Choose fibre type, core count and transceivers around distance and speed. Reach depends on the specific fibre and optics combination; include spare cores where appropriate.',
      ),
      section(
        'แนวสายและการเข้าหัว',
        'Routing and termination',
        'ประเมินเสา ท่อ หรือแนวขุดใต้ดิน และข้อจำกัดพื้นที่ ติดตั้งโดยรักษารัศมีโค้งตามสายรุ่นที่เลือก เข้าหัวหรือเชื่อมต่ออย่างเหมาะสม เก็บในถาดและติดป้ายให้ติดตามคู่สายได้',
        'Assess overhead, conduit or underground routes and site restrictions. Respect the selected cable’s bend requirements, terminate or splice appropriately and label fibres in organised trays.',
      ),
      section(
        'ส่งมอบผลทดสอบ',
        'Handover test evidence',
        'ระบุชนิดหัวต่อ โมดูล พอร์ต และคอร์ที่ใช้งาน ตรวจการสูญเสียสัญญาณตามวิธีทดสอบที่ตกลง พร้อมแผนผังและผลทดสอบ ไม่ใช้ราคากลางต่อเมตรแทนใบประเมินหน้างานที่มีงานท่อและเข้าหัวต่างกัน',
        'Document connectors, optics, ports and active cores. Agree loss testing and provide records with route diagrams. A per-metre estimate alone does not cover differing containment and termination work.',
      ),
    ],
    ['solutions/networking/lan-cabling', 'faq/networking'],
  ),
  detail(
    'solutions/networking/business-wifi',
    'ระบบ Wi-Fi สำหรับองค์กร',
    'Business Wi-Fi',
    'ออกแบบความครอบคลุมและความจุสำหรับผู้ใช้จริง แยกเครือข่ายพนักงานและผู้มาติดต่อ',
    'Design coverage and capacity around actual users, with staff and guest separation.',
    'internet-system/wi-fi',
    [
      section(
        'สัญญาณเต็มไม่ได้แปลว่าใช้งานเร็ว',
        'Coverage and capacity differ',
        'สำรวจผัง กำแพง ชั้นอาคาร และจำนวนอุปกรณ์พร้อมกัน รวมงานประชุมออนไลน์และอุปกรณ์ IoT ความเร็วอินเทอร์เน็ตจากผู้ให้บริการเป็นอีกส่วนหนึ่ง ต้องตรวจทั้งต้นทางและเครือข่ายภายใน',
        'Survey floors, walls and concurrent devices, including calls and IoT. Internet-service capacity is separate from wireless coverage; investigate both.',
      ),
      section(
        'วาง Access Point เป็นระบบ',
        'Plan access points together',
        'ตำแหน่ง ช่องสัญญาณ กำลังส่ง และสาย uplink มีผลร่วมกัน ไม่เพิ่มจำนวนเครื่องโดยไม่ตรวจสัญญาณรบกวน วางแผน roaming หากผู้ใช้เคลื่อนที่ระหว่างพื้นที่',
        'Position, channels, transmit power and uplinks work together. Check interference before adding devices and plan roaming where users move between areas.',
      ),
      section(
        'แยกผู้ใช้และทดสอบหน้างาน',
        'Separate users and validate',
        'กำหนดเครือข่ายพนักงาน ผู้มาติดต่อ และอุปกรณ์ตามความจำเป็น ตั้งสิทธิ์ผู้ดูแลและวิธีเปลี่ยนรหัส ทดสอบจุดใช้งานสำคัญพร้อมภาระงานที่ใกล้เคียงจริง',
        'Define staff, guest and device networks as needed, plus administration and password changes. Validate important locations with representative workloads.',
      ),
    ],
    ['solutions/networking/access-points', 'faq/networking'],
  ),
  detail(
    'solutions/networking/access-points',
    'ติดตั้ง Access Point',
    'Access point installation',
    'เลือกและติดตั้งจุดกระจายสัญญาณให้สัมพันธ์กับสาย LAN ไฟเลี้ยง และระบบจัดการ',
    'Match access points to LAN cabling, power and network management.',
    'internet-system/access-point',
    [
      section(
        'Access Point ต่างจาก Router',
        'Access point and router roles',
        'Access Point ให้การเชื่อมต่อไร้สายเข้าสู่เครือข่าย ส่วน router เชื่อมต่อและกำหนดเส้นทางระหว่างเครือข่าย อุปกรณ์บ้านอาจรวมทั้งสองหน้าที่ งานองค์กรต้องดูหน้าที่ของแต่ละส่วนให้ชัด',
        'An access point connects wireless clients to the network; a router routes between networks. Home devices often combine these functions; business installations need each role planned.',
      ),
      section(
        'ไฟเลี้ยงและจุดติดตั้ง',
        'Power and mounting',
        'ตรวจมาตรฐาน PoE และกำลังไฟที่สวิตช์จ่ายได้ รวมจำนวนเครื่องทั้งหมด เลือกรุ่นภายในหรือภายนอกให้เหมาะกับสภาพแวดล้อมและตำแหน่งเดินสาย',
        'Check PoE compatibility and total switch power budget. Select indoor or outdoor equipment around exposure and cable routes.',
      ),
      section(
        'ดูแลหลายจุดจากระบบเดียว',
        'Manage multiple points',
        'ตรวจว่าต้องใช้ controller หรือค่าบริการจัดการเพิ่มเติมหรือไม่ เก็บข้อมูลบัญชีและการตั้งค่าไว้กับผู้รับผิดชอบ พร้อมทดสอบการเชื่อมต่อหลังติดตั้งทุกจุด',
        'Check controller requirements and management subscriptions. Hand over accounts and settings to the responsible administrator and verify every installed point.',
      ),
    ],
    ['solutions/networking/business-wifi', 'solutions/networking/lan-cabling'],
  ),
  detail(
    'solutions/networking/telephone',
    'ระบบโทรศัพท์สำนักงานและ VoIP',
    'Office telephone & VoIP',
    'วางเบอร์ภายใน การรับสาย และการเชื่อมต่อสำหรับการทำงานขององค์กร',
    'Plan extensions, incoming calls and connectivity around office workflows.',
    'telephone-system',
    [
      section(
        'เลือกจากรูปแบบการรับสาย',
        'Start with call handling',
        'แจ้งจำนวนผู้ใช้ สายพร้อมกัน เบอร์ภายนอก การโอนสาย และการทำงานหลายสาขา ตรวจระบบเดิมก่อนเลือกระหว่างการปรับปรุงตู้สาขาหรือใช้ IP PBX',
        'Specify users, simultaneous calls, external numbers, transfers and branch needs. Assess the existing system before upgrading a PBX or choosing IP telephony.',
      ),
      section(
        'VoIP ใช้เครือข่ายอย่างไร',
        'How VoIP uses the network',
        'VoIP ส่งเสียงผ่านเครือข่าย IP การโทรภายในอาจทำงานบน LAN ได้ ส่วนการเชื่อมต่อผู้ให้บริการหรือบริการคลาวด์ขึ้นกับสัญญาและอินเทอร์เน็ต ต้องตรวจคุณภาพเครือข่ายและไฟสำรอง',
        'VoIP carries voice over IP. Local calls may run on the LAN, while provider or cloud connections depend on their service and internet access. Assess network quality and backup power.',
      ),
      section(
        'ทดสอบงานรับสายจริง',
        'Test real call workflows',
        'ทดสอบโทรเข้า โทรออก โอนสาย กลุ่มรับสาย และกรณีเครือข่ายขัดข้อง ส่งมอบผังเบอร์และสิทธิ์ผู้ดูแล รวมค่าอุปกรณ์และค่าบริการต่อเนื่องในใบเสนอราคาอย่างชัดเจน',
        'Test incoming and outgoing calls, transfers, ring groups and outage behaviour. Provide extension plans and administration, with equipment and recurring service costs clearly separated.',
      ),
    ],
    ['faq/networking'],
  ),
  detail(
    'solutions/security',
    'ระบบเตือนภัยและรักษาความปลอดภัย',
    'Intrusion & alarm systems',
    'วางการตรวจจับ การแจ้งเตือน และผู้รับผิดชอบเมื่อเกิดเหตุ แยกจากระบบกล้องและเข้าออก',
    'Plan detection, notification and incident response alongside CCTV and access control.',
    'security-system',
    [
      section(
        'กันขโมยตามจุดเสี่ยง',
        'Intrusion detection',
        'สำรวจประตู หน้าต่าง และพื้นที่เคลื่อนไหว เลือกเซนเซอร์โดยคำนึงถึงสัตว์เลี้ยง สภาพอากาศ และผู้ใช้งาน กำหนดโซนและวิธีเปิดปิดระบบให้เหมาะกับเวลาทำงาน',
        'Assess doors, windows and movement areas. Select sensors around pets, conditions and occupancy, with zones and arming routines matched to working hours.',
      ),
      section(
        'แจ้งเตือนแล้วใครตอบรับ',
        'Who responds to an alert?',
        'ตกลงผู้รับข้อความและลำดับผู้ติดต่อ ทดสอบเสียงเตือน การแจ้งผ่านโทรศัพท์ และพฤติกรรมเมื่อไฟหรืออินเทอร์เน็ตขัดข้อง การเชื่อมต่อระบบอื่นต้องตรวจความเข้ากันได้จริง',
        'Agree recipients and escalation contacts. Test sounders, phone notifications and power or internet failures. Verify compatibility before integrating other systems.',
      ),
      section(
        'ระบบแจ้งเหตุเพลิงไหม้',
        'Fire detection systems',
        'เลือกตู้ควบคุมและอุปกรณ์ตรวจจับควันหรือความร้อนตามลักษณะพื้นที่ การออกแบบและจุดติดตั้งต้องให้ผู้รับผิดชอบที่มีคุณสมบัติเหมาะสมประเมิน เมื่อมีเสียงเตือนให้ทำตามแผนฉุกเฉินและตรวจเหตุ ไม่ปิดระบบเพียงเพราะมองไม่เห็นควัน',
        'Have a suitably qualified responsible party assess the panel, smoke or heat detection and installation requirements. Follow the emergency plan and investigate an alarm; absence of visible smoke is not a reason to disable detection.',
      ),
    ],
    ['faq/security', 'solutions/access-control', 'solutions/cctv'],
  ),
  detail(
    'solutions/building-services/solar',
    'ระบบโซลาร์เซลล์',
    'Solar systems',
    'ประเมินการใช้ไฟช่วงกลางวัน หลังคา และขอบเขตงานก่อนเลือกขนาดระบบ',
    'Assess daytime consumption, roof conditions and project scope before sizing solar.',
    'solar-cell-system',
    [
      section(
        'ขนาดระบบเริ่มที่การใช้ไฟ',
        'Size around consumption',
        'เตรียมบิลและรูปแบบใช้ไฟรายวัน บ้าน สำนักงาน รีสอร์ท และโรงงานมีช่วงใช้ไฟต่างกัน จำนวนแผงจึงต้องคำนวณจากข้อมูลจริง ไม่สรุปจากประเภทอาคารอย่างเดียว',
        'Prepare bills and daily usage patterns. Homes, offices, resorts and factories consume power at different times; panel count must follow actual requirements.',
      ),
      section(
        'พื้นที่หลังคาและเงาบัง',
        'Roof and shading',
        'ตรวจพื้นที่ ทิศทาง เงาจากต้นไม้และอาคาร รวมสภาพโครงสร้างและเส้นทางสาย โดยให้ผู้เชี่ยวชาญที่เกี่ยวข้องประเมินก่อนกำหนดตำแหน่ง',
        'Assess area, orientation, shading, structural condition and cable routes with the appropriate specialists before placing panels.',
      ),
      section(
        'ความคุ้มค่าและการอนุมัติ',
        'Savings and approvals',
        'ประเมินการผลิตและค่าใช้จ่ายตามสมมติฐานที่ตรวจสอบได้ รวมการดูแลและอุปกรณ์ ไม่รับประกันระยะคืนทุนจากตัวเลขทั่วไป ขั้นตอนเชื่อมต่อและอนุญาตให้ตรวจสอบกับหน่วยงานที่เกี่ยวข้องสำหรับงานนั้น',
        'Use documented assumptions for generation, cost and maintenance rather than promising a generic payback period. Confirm connection and approval requirements with the relevant authorities for the project.',
      ),
    ],
    ['faq/building-services'],
  ),
  detail(
    'solutions/building-services/window-film',
    'ติดฟิล์มอาคาร',
    'Architectural window film',
    'เลือกฟิล์มจากความร้อน แสง ความเป็นส่วนตัว และชนิดกระจก',
    'Select film around heat, daylight, privacy and glass compatibility.',
    'window-film',
    [
      section(
        'ความเข้มไม่ใช่ตัววัดเดียว',
        'More than darkness',
        'พิจารณาการผ่านแสงและคุณสมบัติของฟิล์มร่วมกับทิศกระจก ไม่เลือกจากเปอร์เซ็นต์ความเข้มอย่างเดียว ทดลองตัวอย่างเพื่อดูสภาพแสงภายในที่ต้องการ',
        'Consider visible light and film specifications alongside orientation. Review samples under actual conditions rather than selecting by darkness alone.',
      ),
      section(
        'ตรวจชนิดกระจกก่อนติด',
        'Check the glazing first',
        'ตรวจชนิดกระจกและเงื่อนไขผู้ผลิตฟิล์มก่อนเลือกติดด้านในหรือด้านนอก รวมสภาพผิว ขอบกระจก และการเข้าถึงพื้นที่สูง',
        'Confirm glass type and film manufacturer requirements for interior or exterior use, including surface condition, edges and high-level access.',
      ),
      section(
        'วัดพื้นที่และขอบเขตราคา',
        'Measure area and scope',
        'ราคาแตกต่างตามชนิดฟิล์ม พื้นที่จริง งานลอกฟิล์มเดิม และความยากในการเข้าถึง ให้ระบุรุ่น พื้นที่ และเงื่อนไขรับประกันในใบเสนอราคา',
        'Price depends on film, measured area, old-film removal and access. Record product, area and warranty conditions in the quotation.',
      ),
    ],
    ['faq/building-services'],
  ),
  detail(
    'solutions/building-services/renovation',
    'ปรับปรุงบ้านและพื้นที่ใช้งาน',
    'Home & space renovation',
    'กำหนดขอบเขตงานสำรวจ ออกแบบ และปรับปรุง พร้อมประสานงานระบบในพื้นที่เดิม',
    'Define assessment, design and renovation scope while coordinating existing building systems.',
    'home-renovation',
    [
      section(
        'สำรวจสภาพเดิมและเป้าหมาย',
        'Existing condition and objectives',
        'แจ้งปัญหาและพื้นที่ที่ต้องการปรับปรุง รวมงบประมาณและช่วงเวลาที่ใช้พื้นที่ ตรวจสภาพก่อนรื้อและแยกงานโครงสร้างที่ต้องประเมินโดยผู้เชี่ยวชาญ',
        'Describe the areas, problems, budget and occupancy schedule. Assess conditions before demolition and identify structural work requiring specialist review.',
      ),
      section(
        'ประสานงานระบบก่อนปิดผิว',
        'Coordinate before finishing',
        'วางแผนสายไฟ สาย LAN กล้อง และระบบควบคุมก่อนปิดผนังหรือฝ้า เพื่อลดการแก้ไขซ้ำ แบ่งขั้นตอนงานและตกลงการจัดการพื้นที่ระหว่างทำงาน',
        'Coordinate power, data, CCTV and controls before closing walls or ceilings. Phase the work and agree arrangements for occupied areas.',
      ),
      section(
        'ขอบเขตและการตรวจรับ',
        'Scope and acceptance',
        'แยกรายการวัสดุ งานติดตั้ง และรายการที่ยังต้องสำรวจเพิ่มเติม บันทึกการเปลี่ยนงานและตรวจรับตามรายการที่ตกลง ไม่ใช้ราคาต่อตารางเมตรเป็นข้อสรุปโดยไม่มีสภาพหน้างาน',
        'Separate materials, installation and items needing further inspection. Record changes and accept work against the agreed list; a generic area rate cannot replace site assessment.',
      ),
    ],
    ['solutions/automation', 'faq/building-services'],
  ),
  detail(
    'about/installation-process',
    'ขั้นตอนติดตั้งและส่งมอบ',
    'Installation process & handover',
    'ตั้งแต่รับโจทย์ สำรวจ ออกแบบ ติดตั้ง ทดสอบ จนถึงสอนใช้งานและดูแลหลังส่งมอบ',
    'From requirements and survey to design, installation, testing, training and aftercare.',
    'about-us',
    [
      section(
        '01 รับโจทย์และสำรวจ',
        '01 Requirements and survey',
        'เริ่มจากปัญหา พื้นที่ งบประมาณ และข้อจำกัดเวลา ตรวจระบบเดิม แนวสาย แหล่งจ่ายไฟ และจุดติดตั้ง เพื่อให้ข้อเสนออ้างอิงหน้างานจริง',
        'Start with the problem, premises, budget and timing. Inspect existing systems, routes, power and mounting positions to ground the proposal in the actual site.',
      ),
      section(
        '02 ออกแบบและตกลงขอบเขต',
        '02 Design and scope',
        'ระบุจำนวนอุปกรณ์ รุ่นหรือคุณสมบัติ ระยะสาย งานท่อ การทดสอบ และรายการไม่รวม กำหนดวิธีอนุมัติงานเพิ่มก่อนเริ่มติดตั้ง',
        'Specify equipment, features, cable routes, containment, tests and exclusions. Agree how additional work will be approved.',
      ),
      section(
        '03 ติดตั้งและควบคุมคุณภาพ',
        '03 Installation and checks',
        'เตรียมพื้นที่ ยึดอุปกรณ์และเดินสายให้เหมาะกับสภาพแวดล้อม จัดเก็บและติดป้าย ตรวจความเรียบร้อยก่อนเริ่มทดสอบระบบร่วมกัน',
        'Prepare the site, mount equipment, route cables appropriately, organise and label the installation and inspect workmanship before system testing.',
      ),
      section(
        '04 ทดสอบ สอน และส่งมอบ',
        '04 Test, train and hand over',
        'ตรวจการใช้งานตามขอบเขต สอนผู้รับผิดชอบใช้งานจริง ส่งมอบบัญชีที่เกี่ยวข้อง คู่มือ ข้อมูลอุปกรณ์ และช่องทางแจ้งปัญหา เงื่อนไขรับประกันอ้างอิงเอกสารงาน',
        'Verify the agreed functions, train the responsible users and provide relevant accounts, manuals, equipment information and service contacts. Warranty follows the job documents.',
      ),
    ],
    ['about/installation-standards', 'support/warranty', 'support/manuals'],
  ),
  detail(
    'support/warranty',
    'การรับประกันและเงื่อนไขบริการ',
    'Warranty & service terms',
    'ตรวจเงื่อนไขตามชุดอุปกรณ์และเอกสารของงาน แยกระยะรับประกันสินค้าออกจากบริการติดตั้ง',
    'Check equipment and job-specific terms, distinguishing product warranty from installation service.',
    'warranty',
    [
      section(
        'ข้อมูลที่เผยแพร่แตกต่างตามหน้า',
        'Published terms differ',
        'หน้าบริการ CCTV เดิมระบุสินค้า 2 ปีและบริการ 1 ปี ขณะที่หน้าชุด Analog HD 4/8/16 ตัวระบุสินค้า 3 ปีและบริการ 1 ปี จึงไม่ควรนำระยะใดระยะหนึ่งมาใช้กับสินค้าทั้งหมด ให้ยืนยันรุ่น เงื่อนไข และระยะในใบเสนอราคาและเอกสารส่งมอบ',
        'The CCTV overview states two years for products and one year for service. The 4/8/16-camera Analog HD pages state three years for products and one year for service. Neither should be applied universally; confirm the selected equipment and job documents.',
      ),
      section(
        'ก่อนแจ้งปัญหา',
        'Before requesting support',
        'เตรียมเลขที่งาน วันที่ติดตั้ง รุ่นและหมายเลขอุปกรณ์ อาการ และภาพข้อความผิดพลาด หลีกเลี่ยงส่งรหัสผ่านผ่านข้อความทั่วไป และอย่าล้างข้อมูลก่อนตรวจอาการ',
        'Prepare the job reference, installation date, model, serial, symptoms and error images. Avoid sending passwords in ordinary messages or erasing recordings before diagnosis.',
      ),
      section(
        'รายการที่ต้องตกลงให้ชัด',
        'Clarify the coverage',
        'ตรวจค่าอะไหล่ ค่าแรง ค่าเดินทาง การเคลม และงานที่อยู่นอกเงื่อนไข รวมระยะตอบรับตามข้อตกลงจริง เว็บไซต์นี้ไม่ได้กำหนด SLA หรือรับประกันทุกกรณีแทนเอกสารของงาน',
        'Clarify parts, labour, travel, claims and exclusions, plus response arrangements in the actual agreement. This website does not replace job-specific terms with a universal SLA.',
      ),
    ],
    ['support', 'solutions/cctv/maintenance'],
  ),
];
export const specialPages: Record<string, { title: Copy; summary: Copy }> = {
  'solutions/cctv/packages': {
    title: bi('แพ็กเกจกล้องวงจรปิด 4 / 8 / 16 ตัว', 'CCTV packages: 4, 8 & 16 cameras'),
    summary: bi(
      'เปรียบเทียบชุด Analog HD และราคา IP ที่เผยแพร่ พร้อมอุปกรณ์ ระยะสาย ภาษี และเงื่อนไขที่ต้องยืนยัน',
      'Compare published Analog HD and IP prices, with equipment, cable allowances, tax and terms to confirm.',
    ),
  },
  'solutions/cctv/rental': {
    title: bi('เช่ากล้องวงจรปิดสำหรับงานชั่วคราว', 'CCTV rental for temporary sites'),
    summary: bi(
      'กล้องสำหรับงานอีเวนต์ นิทรรศการ คอนเสิร์ต และไซต์ก่อสร้าง พร้อมข้อมูลราคาที่เผยแพร่ปี 2566',
      'Cameras for events, exhibitions, concerts and construction sites, including the published 2023 price reference.',
    ),
  },
  pricing: {
    title: bi('ราคา แพ็กเกจ และการประเมินงาน', 'Pricing, packages & quotations'),
    summary: bi(
      'ดูราคาอุปกรณ์พร้อมติดตั้ง ราคาเช่าอ้างอิง และข้อมูลที่มีผลต่อใบเสนอราคาสำหรับแต่ละระบบ',
      'Find installation packages, historical rental rates and the factors that shape a system quotation.',
    ),
  },
  customers: {
    title: bi('ลูกค้าและองค์กรที่ปรากฏบนเว็บไซต์ AITS', 'Customers shown on the AITS website'),
    summary: bi(
      'โลโก้องค์กรจากเว็บไซต์เดิมและทางไปผลงานติดตั้ง โดยไม่ใช้โลโก้แทนคำรับรองจากลูกค้า',
      'Organisation logos from the original website and links to installation evidence; logos are not customer quotations.',
    ),
  },
  testimonials: {
    title: bi('รีวิวและหลักฐานจากลูกค้า', 'Reviews & customer evidence'),
    summary: bi(
      'แยกเรื่องเล่าโครงการของ AITS โลโก้ลูกค้า และคำรับรอง เพื่อให้ตรวจสอบที่มาของข้อมูลได้',
      'Distinguish AITS project accounts, customer logos and testimonials so the evidence remains traceable.',
    ),
  },
  'support/manuals': {
    title: bi('คู่มือและเอกสารดาวน์โหลด', 'Manuals & downloads'),
    summary: bi(
      'คู่มือเครื่องบันทึก UNV ภาษาไทยและอังกฤษ พร้อมเอกสารมาตรฐานงานติดตั้ง AITS',
      'Thai and English UNV recorder manuals and the AITS installation-standard document.',
    ),
  },
  'resources/library': {
    title: bi('คลังบทความและผลงานเดิม', 'Original article & project library'),
    summary: bi(
      'ค้นบทความและเรื่องเล่างานติดตั้งจากเว็บไซต์เดิมตามชื่อและหัวข้อ พร้อมลิงก์กลับไปอ่านต้นฉบับ',
      'Search original articles and installation accounts by title and topic, with direct links to the original publications.',
    ),
  },
  'resources/videos': {
    title: bi('วิดีโอและสื่อการใช้งาน', 'Videos & learning media'),
    summary: bi(
      'เข้าถึงวิดีโอจากเว็บไซต์ AITS พร้อมคู่มือและหัวข้อช่วยเตรียมงาน',
      'Access the AITS video collection alongside manuals and practical planning resources.',
    ),
  },
  faq: {
    title: bi('คำถามที่พบบ่อย แยกตามระบบ', 'Frequently asked questions by system'),
    summary: bi(
      'เลือกหมวดกล้อง เครือข่าย เข้าออก ระบบอัตโนมัติ หรือบริการอาคาร เพื่ออ่านคำถามจากเว็บไซต์เดิม',
      'Browse questions from the original site about cameras, networks, access, automation and building services.',
    ),
  },
};
export const faqCategories = [
  ['cctv', 'กล้องวงจรปิดและการเช่า', 'CCTV & rental'],
  ['access-control', 'เข้าออกและบันทึกเวลา', 'Access & attendance'],
  ['networking', 'LAN, Fiber, Wi-Fi และโทรศัพท์', 'LAN, fibre, Wi-Fi & telephone'],
  ['security', 'ระบบเตือนภัย', 'Alarm systems'],
  ['automation', 'บ้านอัจฉริยะ', 'Home automation'],
  ['meeting-rooms', 'ห้องประชุม', 'Meeting rooms'],
  ['building-services', 'โซลาร์ ฟิล์ม และปรับปรุงบ้าน', 'Solar, film & renovation'],
] as const;
for (const [slug, th, en] of faqCategories)
  specialPages['faq/' + slug] = {
    title: bi('คำถาม: ' + th, 'Questions: ' + en),
    summary: bi(
      'คำตอบและข้อมูลเตรียมงานเรื่อง' + th + ' รวมคำถามที่เคยเผยแพร่ในหน้าบริการเดิม',
      'Answers and planning information for ' +
        en.toLowerCase() +
        ', preserving questions from the original service pages.',
    ),
  };
for (const [slug, th, en] of [
  ['cctv', 'กล้องวงจรปิด', 'CCTV'],
  ['networking', 'เครือข่าย', 'Networking'],
  ['access-control', 'ระบบเข้าออก', 'Access control'],
] as const)
  specialPages['projects/' + slug] = {
    title: bi('ผลงาน' + th, en + ' projects'),
    summary: bi(
      'ดูงาน' + th + 'ที่ AITS เผยแพร่ พร้อมภาพและขอบเขตที่ตรวจสอบได้',
      'Browse AITS’s published ' +
        en.toLowerCase() +
        ' installations, with photographs and documented scope.',
    ),
  };
export const hubChildren: Record<string, string[]> = {
  cctv: [
    'solutions/cctv/installation',
    'solutions/cctv/packages',
    'solutions/cctv/rental',
    'solutions/cctv/maintenance',
    'faq/cctv',
  ],
  'access-control': [
    'solutions/access-control/card-access',
    'solutions/access-control/biometric',
    'faq/access-control',
  ],
  networking: [
    'solutions/networking/lan-cabling',
    'solutions/networking/fiber-optic',
    'solutions/networking/business-wifi',
    'solutions/networking/access-points',
    'solutions/networking/telephone',
    'faq/networking',
  ],
  automation: ['resources/automation-planning', 'faq/automation'],
  'meeting-rooms': ['faq/meeting-rooms', 'solutions/networking/business-wifi'],
  'building-services': [
    'solutions/building-services/solar',
    'solutions/building-services/window-film',
    'solutions/building-services/renovation',
    'faq/building-services',
  ],
};
