import {
  bi,
  type Service,
  type Project,
  type Industry,
  type Article,
  type Company,
  type Support,
  type FAQ,
} from './model';
export { bi } from './model';
export const articles: Article[] = [
  {
    slug: 'cctv-planning',
    title: bi('วางแผนกล้องวงจรปิดก่อนเลือกอุปกรณ์', 'Plan CCTV before choosing equipment'),
    summary: bi(
      'เช็กลิสต์เรื่องจุดติดตั้ง แสง การบันทึก และข้อมูลที่ช่วยให้ประเมินงานได้ตรงจุด',
      'A practical checklist for positions, lighting, recording and a useful first assessment.',
    ),
    service: 'cctv',
    sections: [
      {
        title: bi('1. ระบุสิ่งที่ต้องเห็น', '1. Define what you need to see'),
        body: bi(
          'แยกจุดที่ต้องดูภาพรวมออกจากจุดที่ต้องเห็นรายละเอียด เช่น ทางเข้าและบริเวณขนถ่าย ระบุช่วงเวลาที่สำคัญ และตรวจแสงย้อนหรือพื้นที่มืดทั้งกลางวันและกลางคืน มุมกล้องที่เหมาะสมสำคัญพอ ๆ กับความละเอียด',
          'Separate overview areas from points requiring detail, such as entrances or loading areas. Identify important times and check backlighting or dark areas by day and night. The viewing angle matters as much as resolution.',
        ),
      },
      {
        title: bi('2. คิดถึงภาพย้อนหลัง', '2. Plan for playback'),
        body: bi(
          'บอกว่าต้องใช้ภาพย้อนหลังเพื่ออะไรและนานเพียงใด ความจุเครื่องบันทึก คุณภาพภาพ และรูปแบบบันทึกมีผลต่อระยะเก็บภาพ กำหนดผู้มีสิทธิ์ดูและส่งออกข้อมูล พร้อมทดสอบการค้นหาภาพในขั้นตอนส่งมอบ',
          'Explain why playback is needed and for how long. Recorder capacity, image settings and recording mode affect retention. Define who may view and export footage, and include retrieval checks in handover.',
        ),
      },
      {
        title: bi('3. เตรียมพื้นที่และระบบเดิม', '3. Prepare site information'),
        body: bi(
          'รวบรวมแปลนหรือภาพพื้นที่ รุ่นอุปกรณ์เดิมที่ทราบ จุดไฟและเครือข่าย และข้อจำกัดการติดตั้ง ไม่ต้องซื้อชุดกล้องหรือเลือกจำนวนก่อนให้ผู้ติดตั้งตรวจหน้างาน ใช้รายการปัญหาเป็นจุดเริ่มต้นของใบเสนอราคา',
          'Gather a plan or photos, known existing models, power and network points and installation restrictions. You do not need to buy a camera kit or set a camera count before assessment. Use the problem list as the starting point for the quotation.',
        ),
      },
    ],
    sources: [
      'https://aitscctv.com/install-cctv/',
      'https://aitscctv.com/installation-of-cctv/',
      'https://aitscctv.com/cctv-installation/',
    ],
  },
  {
    slug: 'camera-selection',
    title: bi(
      'เลือกกล้อง การบันทึก และฟังก์ชันวิเคราะห์ภาพ',
      'Choosing cameras, recording & analytics',
    ),
    summary: bi(
      'เปรียบเทียบจากสิ่งที่ต้องใช้งานจริง ไม่ใช่จำนวนพิกเซลหรือคำว่า AI เพียงอย่างเดียว',
      'Compare practical requirements rather than resolution or an AI label alone.',
    ),
    service: 'cctv',
    sections: [
      {
        title: bi('ภาพต้องเหมาะกับพื้นที่', 'Match the image to the space'),
        body: bi(
          'มุมมอง ระยะวัตถุ แสง และตำแหน่งติดตั้งส่งผลต่อภาพที่ใช้ได้จริง กล้องโดมหรือทรงกระบอกเป็นเพียงรูปแบบอุปกรณ์ ต้องพิจารณางานภายในหรือภายนอกและการบำรุงรักษาร่วมด้วย',
          'Field of view, subject distance, light and mounting position affect usable footage. Dome and bullet cameras are housing types; suitability also depends on indoor or outdoor conditions and maintenance access.',
        ),
      },
      {
        title: bi('ระบบบันทึกและเครือข่ายต้องสอดคล้อง', 'Coordinate recording and connectivity'),
        body: bi(
          'ตรวจความเข้ากันได้ของกล้องกับเครื่องบันทึกและระบบสาย หากปรับปรุงระบบเดิม ให้ประเมินชิ้นส่วนแต่ละส่วนก่อนเปลี่ยนทั้งหมด การดูภาพระยะไกลควรกำหนดสิทธิ์ผู้ใช้และขั้นตอนดูแลบัญชี',
          'Check compatibility among cameras, recorders and cabling. When upgrading, assess individual components before replacing everything. Remote viewing should include user permissions and an account-management process.',
        ),
      },
      {
        title: bi('ฟังก์ชันวิเคราะห์ภาพต้องทดสอบกับหน้างาน', 'Validate analytics at the site'),
        body: bi(
          'การตรวจจับหรือแจ้งเตือนเป็นฟังก์ชันที่ขึ้นกับรุ่นอุปกรณ์และเงื่อนไขการตั้งค่า หารือเหตุการณ์ที่ต้องตรวจจับและวิธีตรวจสอบผล ไม่ถือคำว่า AI เป็นการรับประกันว่าจะไม่มีการแจ้งเตือนผิดหรือป้องกันเหตุได้ทั้งหมด',
          'Detection and alerts depend on the equipment and configuration. Discuss the event to detect and how results will be checked. An AI label does not guarantee zero false alerts or prevention of every incident.',
        ),
      },
    ],
    sources: [
      'https://aitscctv.com/cctv-camera-service/',
      'https://aitscctv.com/ai-cctv/',
      'https://aitscctv.com/ai-cctv-2/',
    ],
  },
  {
    slug: 'network-planning',
    title: bi(
      'เตรียมระบบ LAN ไฟเบอร์ และ Wi-Fi สำหรับองค์กร',
      'Planning business LAN, fibre & Wi-Fi',
    ),
    summary: bi(
      'เริ่มจากผู้ใช้ แอปพลิเคชัน และโครงสร้างอาคาร แล้วค่อยเลือกจุดกระจายสัญญาณ',
      'Start with users, applications and the building before selecting access points.',
    ),
    service: 'networking',
    sections: [
      {
        title: bi('รู้รูปแบบการใช้งาน', 'Understand usage'),
        body: bi(
          'ระบุพื้นที่ที่ต้องใช้งาน จำนวนผู้ใช้พร้อมกัน และแอปพลิเคชันสำคัญ แยกปัญหาอินเทอร์เน็ตต้นทางออกจากสัญญาณ Wi-Fi ภายใน การเพิ่มความเร็วแพ็กเกจไม่ได้แก้จุดอับสัญญาณภายในอาคารทุกกรณี',
          'Identify required areas, concurrent users and important applications. Distinguish an upstream internet problem from indoor Wi-Fi coverage. A faster subscription does not resolve every coverage gap inside a building.',
        ),
      },
      {
        title: bi('วางระบบสายและจุดรวมอุปกรณ์', 'Plan cabling and equipment locations'),
        body: bi(
          'LAN และไฟเบอร์ต้องเลือกตามระยะ เส้นทาง และอุปกรณ์ที่เชื่อมต่อ ตรวจพื้นที่ตู้ระบบ แหล่งจ่ายไฟ และกำลังไฟ PoE สำหรับ Access Point ป้ายสายและรายการจุดติดตั้งช่วยให้ดูแลหรือขยายระบบได้ง่ายขึ้น',
          'Select LAN or fibre around distances, routes and connected equipment. Check rack space, power and PoE needs for access points. Cable labels and an installation-point list make maintenance and expansion easier.',
        ),
      },
      {
        title: bi('กำหนดการทดสอบและส่งมอบ', 'Define testing and handover'),
        body: bi(
          'หารือการทดสอบสาย พื้นที่สัญญาณ และการแยกกลุ่มผู้ใช้งาน ระบุผู้ดูแลที่จะรับข้อมูลตั้งค่าและการจัดการบัญชี โครงการมหาวิทยาลัยของ AITS แสดงตัวอย่างการติดป้าย ทดสอบสาย และแนะนำทีม IT',
          'Discuss cable tests, coverage areas and user segmentation. Name the administrator who will receive configuration and account-management information. AITS’s university project documents labelling, cable checks and IT guidance.',
        ),
      },
    ],
    sources: [
      'https://aitscctv.com/network-service/',
      'https://aitscctv.com/network-service/fiberoptic-cable/',
      'https://aitscctv.com/access-point-for-university/',
    ],
  },
  {
    slug: 'access-planning',
    title: bi('เตรียมข้อมูลก่อนติดตั้งระบบควบคุมประตู', 'Preparing for door access control'),
    summary: bi(
      'เลือกวิธียืนยันตัวตนให้สัมพันธ์กับประตู ผู้ใช้ และวิธีดูแลสิทธิ์',
      'Match credentials to doors, users and permission management.',
    ),
    service: 'access-control',
    sections: [
      {
        title: bi('ระบุพื้นที่และผู้ใช้', 'Identify spaces and users'),
        body: bi(
          'เริ่มจากประตูที่ต้องควบคุม กลุ่มผู้ได้รับสิทธิ์ และช่วงเวลาที่ใช้งาน แยกวัตถุประสงค์ระหว่างความปลอดภัยของพื้นที่กับการลงเวลาทำงาน เพื่อไม่ให้เลือกเครื่องอ่านจากชื่ออุปกรณ์เพียงอย่างเดียว',
          'Start with controlled doors, authorised groups and access times. Distinguish area security from attendance recording so reader selection follows the purpose rather than the device name.',
        ),
      },
      {
        title: bi('ตรวจประตูและวิธีออก', 'Review the door and exit arrangements'),
        body: bi(
          'เตรียมรูปชนิดประตู กรอบ และตำแหน่งที่ติดอุปกรณ์ได้ หารือชุดล็อก แหล่งจ่ายไฟ และการใช้งานเมื่อระบบขัดข้อง การออกจากพื้นที่ต้องเป็นส่วนหนึ่งของการออกแบบ ไม่ใช่พิจารณาเฉพาะการเข้า',
          'Prepare photos of the door, frame and possible mounting positions. Discuss locks, power and operation during failures. Leaving the area must be part of the design, not only entering it.',
        ),
      },
      {
        title: bi('วางแผนดูแลสิทธิ์', 'Plan permission management'),
        body: bi(
          'กำหนดผู้เพิ่มและยกเลิกสิทธิ์ วิธีจัดการบัตรหายหรือพนักงานย้ายงาน และผู้เข้าถึงประวัติการใช้งาน สำหรับข้อมูลชีวมิติ ให้ผู้รับผิดชอบองค์กรพิจารณาวิธีจัดเก็บและข้อกำหนดที่เกี่ยวข้องก่อนใช้งาน',
          'Define who adds and removes users, how lost cards or staff changes are handled, and who accesses logs. For biometric information, the organisation’s responsible team should address storage and applicable requirements before use.',
        ),
      },
    ],
    sources: [
      'https://aitscctv.com/access-control-system/',
      'https://aitscctv.com/access-control-system-1/',
    ],
  },
  {
    slug: 'automation-planning',
    title: bi('เริ่มระบบอัตโนมัติจากกิจวัตรที่ใช้จริง', 'Start automation with useful routines'),
    summary: bi(
      'วางแผนความเข้ากันได้ การควบคุม และข้อมูลพลังงานโดยไม่พึ่งคำสัญญาเกินจริง',
      'Plan compatibility, controls and energy information without overstated promises.',
    ),
    service: 'automation',
    sections: [
      {
        title: bi('เลือกสถานการณ์ก่อนอุปกรณ์', 'Choose routines before devices'),
        body: bi(
          'เขียนสิ่งที่อยากทำให้ง่ายขึ้น เช่น ควบคุมไฟหลายจุดหรือจัดการอุณหภูมิในพื้นที่ใช้งาน จากนั้นตรวจว่าต้องใช้อุปกรณ์ใดและสัมพันธ์กับระบบไฟเดิมอย่างไร เริ่มจากขอบเขตที่ดูแลได้ก่อนขยาย',
          'Describe what should become easier, such as controlling several lights or managing temperature in an occupied area. Then assess the devices and existing electrical system. Start with a manageable scope before expanding.',
        ),
      },
      {
        title: bi('ตรวจการทำงานร่วมกัน', 'Check compatibility and control'),
        body: bi(
          'อุปกรณ์ต่างยี่ห้อไม่ได้ทำงานร่วมกันเสมอไป ระบุระบบควบคุม บัญชีผู้ดูแล และฟังก์ชันที่ต้องพึ่งอินเทอร์เน็ต ให้ทุกคนในบ้านหรือพื้นที่เข้าใจวิธีใช้ปกติและวิธีควบคุมสำรอง',
          'Devices from different manufacturers do not automatically work together. Define the control system, administrator account and internet-dependent functions. Make everyday and fallback operation understandable to the people using the space.',
        ),
      },
      {
        title: bi('ใช้ข้อมูลพลังงานอย่างมีบริบท', 'Interpret energy information in context'),
        body: bi(
          'การตรวจวัดและตั้งเวลาควบคุมช่วยให้เห็นรูปแบบการใช้งาน การประหยัดจริงขึ้นอยู่กับอุปกรณ์ พฤติกรรม และสภาพพื้นที่ จึงไม่ควรใช้ตัวเลขประหยัดหรือคืนทุนจากบทความทั่วไปเป็นผลลัพธ์ที่รับประกันของโครงการ',
          'Monitoring and schedules can reveal usage patterns. Actual savings depend on equipment, behaviour and site conditions. General energy articles do not establish guaranteed savings or payback for a specific project.',
        ),
      },
    ],
    sources: [
      'https://aitscctv.com/smart-home/',
      'https://aitscctv.com/smart-home-9/',
      'https://aitscctv.com/smart-energy-optimization/',
      'https://aitscctv.com/smart-energy-optimization-2/',
    ],
  },
  {
    slug: 'maintenance',
    title: bi('เตรียมข้อมูลเมื่อกล้องหรือระบบมีปัญหา', 'Prepare for a system support request'),
    summary: bi(
      'รวบรวมอาการและเอกสารเพื่อให้การหารือเรื่องซ่อม รับประกัน หรือปรับปรุงตรงจุด',
      'Collect symptoms and records for a useful repair, warranty or upgrade discussion.',
    ),
    service: 'cctv',
    sections: [
      {
        title: bi('บันทึกอาการให้ชัด', 'Record the symptom'),
        body: bi(
          'ระบุว่าไม่มีภาพทุกจุดหรือบางจุด ดูสดได้แต่ย้อนหลังไม่ได้ หรือดูผ่านมือถือไม่ได้ บันทึกเวลาที่เริ่มเกิดและสิ่งที่เปลี่ยนก่อนหน้า เช่น เปลี่ยนอินเทอร์เน็ตหรือไฟดับ ข้อมูลนี้ช่วยแยกปัญหาอุปกรณ์กับเครือข่าย',
          'Note whether all or some views are missing, live view works but playback does not, or mobile viewing fails. Record when it started and preceding changes such as a new internet service or power loss. This helps distinguish equipment and network issues.',
        ),
      },
      {
        title: bi('เตรียมข้อมูลระบบและการรับประกัน', 'Prepare system and warranty information'),
        body: bi(
          'เตรียมเลขที่งาน เอกสารซื้อ รุ่นอุปกรณ์ และสถานที่ติดตั้ง ตรวจเงื่อนไขรับประกันในเอกสารของงาน อย่ารีเซ็ตเครื่องหรือรื้ออุปกรณ์ก่อนหารือ หากอาจทำให้ข้อมูลหรือการตั้งค่าสูญหาย',
          'Have the job reference, purchase record, equipment models and installation location available. Check the project’s warranty documents. Discuss the issue before resetting or dismantling equipment where data or settings may be lost.',
        ),
      },
      {
        title: bi('หารือการบำรุงรักษาและปรับปรุง', 'Discuss maintenance and upgrades'),
        body: bi(
          'หากพบปัญหาซ้ำ ให้รวบรวมประวัติและเป้าหมายการใช้งานปัจจุบัน AITS มีข้อมูลบริการบำรุงรักษารายปีและงานปรับปรุงระบบเดิม ขอบเขตตรวจสอบและอุปกรณ์ที่ต้องเปลี่ยนควรระบุเป็นรายงาน',
          'For recurring issues, gather the history and current operating requirements. AITS publishes annual-maintenance and existing-system upgrade services. Inspection scope and replacement items should be defined for the specific project.',
        ),
      },
    ],
    sources: [
      'https://aitscctv.com/warranty/',
      'https://aitscctv.com/upgrade-cctv/',
      'https://aitscctv.com/cctv-camera-service/',
    ],
  },
];
const source = (path: string) => `https://aitscctv.com/${path}/`;
export const company: Company = {
  name: bi('บริษัท เอ.ไอ.ที.เอส จำกัด', 'A.I.T.S. Company Limited'),
  founded: 2005,
  address: bi(
    '570 ถนนเจริญนคร แขวงบุคคโล เขตธนบุรี กรุงเทพฯ 10600',
    '570 Charoen Nakhon Road, Bukkhalo, Thon Buri, Bangkok 10600',
  ),
  phone: '02 878 2951',
  mobile: '094 460 6196',
  email: 'info@aitscctv.com',
  line: 'https://page.line.me/852uanad?openQrModal=true',
  story: bi(
    'AITS เริ่มต้นในปี พ.ศ. 2548 จากประสบการณ์ที่พบว่างานติดตั้งระบบมีคุณภาพไม่สม่ำเสมอ จึงให้ความสำคัญกับการควบคุมงานช่างและมาตรฐานการทำงาน ตั้งแต่การเลือกอุปกรณ์จนถึงการส่งมอบระบบที่ผู้ใช้งานเข้าใจได้',
    'AITS began in 2005 after first-hand experience of inconsistent installation quality. That experience shaped an emphasis on supervision and workmanship, from selecting equipment to handing over a system its users understand.',
  ),
};
export const support: Support = {
  introduction: bi(
    'ระบบที่ติดตั้งแล้วต้องได้รับการดูแลอย่างเหมาะสม ติดต่อ AITS เพื่อแจ้งอาการ ตรวจสอบการรับประกัน หรือหารือเรื่องบำรุงรักษารายปี',
    'Installed systems need ongoing care. Contact AITS to report an issue, check warranty coverage or discuss annual maintenance.',
  ),
  warranty: bi(
    'ข้อมูลบริการ CCTV ของ AITS ระบุการรับประกันงานบริการ 1 ปี และอุปกรณ์ CCTV ที่กำหนด 2 ปี ขอบเขต ระยะเวลา และข้อยกเว้นขึ้นอยู่กับอุปกรณ์และข้อตกลงของแต่ละงาน โปรดตรวจสอบใบเสนอราคาและเอกสารรับประกันของระบบก่อนขอรับบริการ',
    'AITS’s published CCTV information describes a one-year service warranty and two years for specified CCTV equipment. Coverage, duration and exclusions depend on the equipment and project agreement. Check your quotation and warranty documents for the terms that apply to your system.',
  ),
  preparation: [
    bi(
      'แจ้งสถานที่ติดตั้งและช่องทางติดต่อกลับ',
      'Provide the installation location and a return contact.',
    ),
    bi(
      'ระบุอาการ วันที่เริ่มพบปัญหา และอุปกรณ์ที่เกี่ยวข้อง',
      'Describe the symptom, when it began and which devices are affected.',
    ),
    bi(
      'เตรียมเลขที่ใบงานหรือเอกสารซื้อและรูปอาการที่ไม่เปิดเผยข้อมูลส่วนตัว',
      'Have a job or purchase reference and a photo of the issue without exposing personal information.',
    ),
    bi(
      'ไม่ส่งรหัสผ่านหรือเปิดสิทธิ์เข้าระบบผ่านช่องทางสาธารณะ',
      'Do not share passwords or system access through public channels.',
    ),
  ],
};
export const process = [
  {
    title: bi('สำรวจและรับฟัง', 'Survey & understand'),
    body: bi(
      'เริ่มจากพื้นที่จริง ปัญหาที่ต้องแก้ และรูปแบบการใช้งาน',
      'Start with the site, the problem and the way people use the space.',
    ),
  },
  {
    title: bi('ออกแบบและกำหนดขอบเขต', 'Design & scope'),
    body: bi(
      'เลือกตำแหน่ง อุปกรณ์ และเส้นทางสายให้เหมาะกับข้อจำกัดของอาคาร',
      'Plan positions, equipment and cable routes around the building’s constraints.',
    ),
  },
  {
    title: bi('ติดตั้งและตั้งค่า', 'Install & configure'),
    body: bi(
      'จัดระเบียบสาย ติดตั้งอุปกรณ์ และตั้งค่าระบบตามแบบที่ตกลง',
      'Route cables, fit equipment and configure the agreed system.',
    ),
  },
  {
    title: bi('ทดสอบและตรวจงาน', 'Test & inspect'),
    body: bi(
      'ตรวจการเชื่อมต่อ ภาพ การบันทึก หรือการควบคุมประตูตามประเภทงาน',
      'Check connections, images, recording or door operation as appropriate to the installation.',
    ),
  },
  {
    title: bi('ส่งมอบและแนะนำการใช้', 'Handover & explain'),
    body: bi(
      'อธิบายวิธีใช้งาน พร้อมข้อมูลอุปกรณ์และการดูแลที่เกี่ยวข้อง',
      'Explain everyday operation, relevant equipment information and care.',
    ),
  },
  {
    title: bi('ดูแลหลังติดตั้ง', 'Support after installation'),
    body: bi(
      'ใช้เอกสารของงานเป็นข้อมูลอ้างอิงสำหรับการรับประกันและบำรุงรักษา',
      'Use the project documents as the reference for warranty and maintenance.',
    ),
  },
];
export const projects: Project[] = [
  {
    slug: 'university-network',
    title: bi('เครือข่ายไร้สายและ LAN ภายในมหาวิทยาลัย', 'University Wi-Fi & LAN deployment'),
    summary: bi(
      'วางจุด Access Point เดินสาย CAT6 จัดการเครือข่าย และส่งมอบความรู้ให้ทีม IT ในอาคารการศึกษา',
      'Access-point planning, CAT6 cabling, network management and IT guidance in an educational building.',
    ),
    service: 'networking',
    image: 'university',
    alt: bi(
      'งานติดตั้งเครือข่ายภายในอาคารมหาวิทยาลัยจากโครงการ AITS',
      'AITS network installation inside a university building',
    ),
    gallery: ['university-cabling'],
    environment: bi('อาคารมหาวิทยาลัย', 'University building'),
    technologies: ['Wi-Fi 6', 'CAT6', 'PoE', 'SSID / VLAN', 'Cloud controller'],
    sections: [
      {
        title: bi('โจทย์ของพื้นที่', 'The requirement'),
        body: bi(
          'อาคารต้องรองรับการใช้งานของนักศึกษาและบุคลากร AITS สำรวจจุดใช้งานจริงและวางแผนทั้งการกระจายสัญญาณและโครงสร้างสาย เพื่อให้การเลือกอุปกรณ์สัมพันธ์กับบริบทของมหาวิทยาลัย',
          'The building needed connectivity for students and staff. AITS assessed actual usage points and planned wireless coverage alongside the wired infrastructure, selecting equipment around the campus environment.',
        ),
      },
      {
        title: bi('แนวทางและการติดตั้ง', 'Approach & installation'),
        body: bi(
          'ติดตั้ง Access Point บนเพดาน ใช้อุปกรณ์ Wi-Fi 6 และสวิตช์ PoE เดินสาย CAT6 ภายในฝ้าและรางอย่างเป็นระเบียบ พร้อมติดป้ายปลายสาย ตั้งค่า SSID และ VLAN เพื่อแยกกลุ่มผู้ใช้งาน',
          'Ceiling-mounted Wi-Fi 6 access points were connected through PoE switches. CAT6 cabling ran through ceilings and trays with labelled ends. SSID and VLAN configuration separated user groups.',
        ),
      },
      {
        title: bi('ทดสอบและส่งมอบ', 'Testing & handover'),
        body: bi(
          'บทความโครงการระบุการทดสอบสายด้วย LAN Tester การตั้งค่าการติดตามและจัดการผ่าน Cloud Controller และการแนะนำทีม IT ในการดูแลระบบ ไม่มีการนำเสนอตัวเลขความเร็วหรือผลทดสอบที่ไม่ได้เผยแพร่',
          'The project account describes LAN-tester checks, cloud-controller monitoring and remote management, and guidance for the faculty’s IT team. No unpublished throughput or acceptance-test figures are claimed.',
        ),
      },
    ],
    sources: [source('access-point-for-university')],
  },
  {
    slug: 'cctv-upgrade',
    title: bi('ปรับปรุงกล้องวงจรปิดและระบบเดิม', 'Existing CCTV system upgrade'),
    summary: bi(
      'ตรวจโครงสร้างสาย ปรับปรุงกล้องโดม และทบทวนมุมภาพสำหรับระบบที่ใช้งานอยู่',
      'Checking existing cabling, working on dome cameras and reviewing viewing angles in an installed system.',
    ),
    service: 'cctv',
    image: 'cctv',
    alt: bi(
      'ช่าง AITS ปรับปรุงกล้องโดมที่ติดตั้งบนฝ้า',
      'AITS technician working on a ceiling-mounted dome camera',
    ),
    gallery: ['cctv-work'],
    environment: bi('ระบบกล้องเดิมภายในอาคาร', 'Existing indoor CCTV system'),
    technologies: ['Dome camera', 'Video recording', 'Remote viewing'],
    sections: [
      {
        title: bi('ปัญหาที่นำมาสู่การปรับปรุง', 'Why the system was reviewed'),
        body: bi(
          'รายงานงานปรับปรุงของ AITS อธิบายปัญหาภาพไม่ชัดและกล้องทำงานไม่ต่อเนื่อง งานลักษณะนี้ต้องพิจารณาระบบเดิมและพื้นที่ติดตั้งก่อนตัดสินใจเปลี่ยนอุปกรณ์',
          'AITS’s upgrade account describes unclear images and intermittent camera operation. This type of work requires examining existing infrastructure and installation conditions before deciding which components to replace.',
        ),
      },
      {
        title: bi('ตรวจสายและปรับตำแหน่งภาพ', 'Cabling & viewing angles'),
        body: bi(
          'แนวทางที่เผยแพร่ครอบคลุมการตรวจสายสัญญาณเดิม งานปรับปรุงกล้องโดม และการปรับมุมตามแสงและการสัญจร พร้อมเชื่อมต่อการดูภาพผ่านเครือข่าย ภาพหน้างานแสดงการทำงานกับกล้องบนฝ้า',
          'The published approach covers existing signal cabling, dome-camera work and angle adjustments based on lighting and movement, alongside network viewing. The site photographs show work on a ceiling-mounted camera.',
        ),
      },
      {
        title: bi('ขอบเขตของหลักฐาน', 'What the project evidence establishes'),
        body: bi(
          'ภาพและคำอธิบายแสดงลักษณะงานปรับปรุง ไม่มีรายงานผลทดสอบเชิงตัวเลขหรือเอกสารส่งมอบเผยแพร่ จึงใช้กรณีนี้อธิบายวิธีพิจารณาระบบเดิม โดยไม่รับประกันว่าทุกพื้นที่จะได้ผลหรือระยะเวลาติดตั้งเหมือนกัน',
          'The photographs and account establish the type of upgrade work. A numerical test report or handover record is not published. This case illustrates how an existing system is assessed, without promising the same result or installation duration at every site.',
        ),
      },
    ],
    sources: [source('upgrade-cctv')],
  },
  {
    slug: 'industrial-access',
    title: bi('ควบคุมประตูในพื้นที่โรงงาน', 'Door access in an industrial facility'),
    summary: bi(
      'งานติดตั้งเครื่องสแกนลายนิ้วมือร่วมกับชุดแม่เหล็กล็อกประตูหนึ่งจุด',
      'A documented installation of a fingerprint reader and magnetic lock at one door.',
    ),
    service: 'access-control',
    image: 'access',
    alt: bi(
      'เครื่องสแกนลายนิ้วมือและงานควบคุมประตูในโครงการ AITS',
      'Fingerprint reader and door-access installation documented by AITS',
    ),
    gallery: [],
    environment: bi('พื้นที่โรงงาน', 'Industrial facility'),
    technologies: ['Fingerprint reader', 'Magnetic door lock'],
    sections: [
      {
        title: bi('ขอบเขตที่ติดตั้ง', 'Documented scope'),
        body: bi(
          'AITS เผยแพร่ภาพงานติดตั้งเครื่องสแกนลายนิ้วมือพร้อมชุดแม่เหล็กหนึ่งจุดในโรงงาน เป็นตัวอย่างของการเชื่อมอุปกรณ์ยืนยันตัวตนกับชุดควบคุมประตูในพื้นที่ใช้งานจริง',
          'AITS published an installation of a fingerprint reader with one magnetic-lock set in a factory. It provides a concrete example of connecting a credential reader to door-control hardware in a working environment.',
        ),
      },
      {
        title: bi('องค์ประกอบของระบบ', 'System components'),
        body: bi(
          'เครื่องอ่านใช้ยืนยันผู้ขอเข้า ส่วนชุดแม่เหล็กทำหน้าที่ควบคุมประตู การเลือกใช้งานในพื้นที่อื่นควรตรวจชนิดประตู จุดติดตั้ง แหล่งจ่ายไฟ และวิธีออกจากพื้นที่ก่อนกำหนดอุปกรณ์',
          'The reader identifies the person requesting entry, while the magnetic lock controls the door. For another site, door construction, mounting positions, power and exit arrangements should be assessed before specifying equipment.',
        ),
      },
      {
        title: bi('การนำกรณีนี้ไปใช้วางแผน', 'Using this example in planning'),
        body: bi(
          'บันทึกโครงการเผยแพร่เฉพาะงานติดตั้ง ไม่ได้ระบุขั้นตอนทดสอบ การฝึกอบรม หรือผลลัพธ์เชิงตัวเลข สำหรับงานใหม่ควรระบุสิทธิ์ผู้ใช้ การตรวจการเปิดปิด และข้อมูลส่งมอบไว้ในขอบเขตที่ตกลง',
          'The public record documents the installation, without detailing testing, training or numerical outcomes. For a new project, user permissions, operational checks and handover information should be included in the agreed scope.',
        ),
      },
    ],
    sources: [source('access-control')],
  },
];
export const industries: Industry[] = [
  {
    slug: 'factories',
    title: bi('โรงงานและคลังสินค้า', 'Factories & warehouses'),
    summary: bi(
      'มองพื้นที่ผลิต จุดขนถ่าย และโครงข่ายสนับสนุนเป็นระบบเดียวกัน',
      'Consider production areas, loading points and supporting networks together.',
    ),
    services: ['cctv', 'networking', 'access-control'],
    project: 'industrial-access',
    sections: [
      {
        title: bi('แบ่งพื้นที่ตามการทำงานจริง', 'Plan around working areas'),
        body: bi(
          'ประตูเข้าออก พื้นที่เก็บสินค้า และเส้นทางรถมีความต้องการภาพและการควบคุมต่างกัน ระบุจุดสำคัญและข้อจำกัด เช่น ระยะสาย แสง ฝุ่น และช่วงเวลาที่เข้าติดตั้งได้ ก่อนกำหนดอุปกรณ์',
          'Entrances, storage areas and vehicle routes have different viewing and access needs. Identify priority points and constraints such as cable distance, lighting, dust and installation access before choosing equipment.',
        ),
      },
      {
        title: bi('เตรียมโครงสร้างให้ดูแลต่อได้', 'Prepare infrastructure for maintenance'),
        body: bi(
          'พิจารณาจุดรวมระบบ เส้นทาง LAN หรือไฟเบอร์ และการติดป้ายสายให้ผู้ดูแลตามงานได้ แยกสิทธิ์เข้าพื้นที่และสิทธิ์ดูภาพตามหน้าที่ พร้อมหารือขั้นตอนติดตั้งที่สัมพันธ์กับการดำเนินงานของโรงงาน',
          'Consider equipment locations, LAN or fibre routes and cable labels so administrators can trace the installation. Separate physical access and video permissions by role, and discuss installation around factory operations.',
        ),
      },
      {
        title: bi('ข้อมูลที่ช่วยประเมินงาน', 'Useful assessment information'),
        body: bi(
          'เตรียมแปลนหรือภาพพื้นที่ รายการปัญหา จุดที่ต้องดูย้อนหลัง และข้อจำกัดการเข้าทำงาน ไม่จำเป็นต้องกำหนดจำนวนกล้องหรือขนาดสวิตช์ก่อนเริ่มหารือ',
          'Prepare a plan or site photos, current issues, areas requiring playback and work-access constraints. You do not need to specify camera counts or switch sizes before the first discussion.',
        ),
      },
    ],
    sources: [source('smart-factory'), source('about-us'), source('access-control')],
  },
  {
    slug: 'offices',
    title: bi('สำนักงานและอาคารพาณิชย์', 'Offices & commercial buildings'),
    summary: bi(
      'เชื่อมพื้นที่ทำงาน ประตู และห้องประชุมด้วยระบบที่ผู้ดูแลเข้าใจ',
      'Connect workspaces, doors and meeting rooms with systems administrators understand.',
    ),
    services: ['networking', 'access-control', 'cctv', 'meeting-rooms'],
    project: 'university-network',
    sections: [
      {
        title: bi('เริ่มจากผู้ใช้และพื้นที่', 'Start with people and spaces'),
        body: bi(
          'ห้องทำงาน พื้นที่ต้อนรับ และห้องประชุมมีรูปแบบการใช้เครือข่ายต่างกัน ระบุผู้ใช้งานประจำ ผู้มาติดต่อ และแอปพลิเคชันสำคัญ เพื่อวางจุด Wi-Fi และระบบสายให้เหมาะสม',
          'Work areas, reception and meeting rooms use connectivity differently. Identify staff, visitors and important applications when planning Wi-Fi positions and cabling.',
        ),
      },
      {
        title: bi('จัดสิทธิ์และการดูภาพ', 'Organise access and viewing permissions'),
        body: bi(
          'กำหนดว่าประตูใดต้องควบคุมและใครมีสิทธิ์ดูภาพย้อนหลัง พิจารณาตำแหน่งกล้องให้เหมาะกับวัตถุประสงค์ของพื้นที่ พร้อมหารือเรื่องความเป็นส่วนตัวกับผู้รับผิดชอบอาคาร',
          'Define which doors require control and who may view recorded footage. Choose camera positions appropriate to the space’s purpose and discuss privacy arrangements with the building’s responsible team.',
        ),
      },
      {
        title: bi('วางแผนติดตั้งและส่งมอบ', 'Plan installation and handover'),
        body: bi(
          'ตรวจเงื่อนไขอาคาร เส้นทางสาย และช่วงเวลาที่เข้าทำงานได้ เตรียมรายชื่อผู้ดูแลเพื่อรับข้อมูลการตั้งค่า การใช้งาน และการติดต่อเมื่อระบบมีปัญหา',
          'Check building rules, cable routes and permitted work periods. Identify administrators who will receive configuration information, operating guidance and support contact details.',
        ),
      },
    ],
    sources: [source('office-cctv'), source('access-point-for-university')],
  },
  {
    slug: 'homes',
    title: bi('บ้านและที่พักอาศัย', 'Homes & residential properties'),
    summary: bi(
      'ดูแลจุดเข้าออก การเชื่อมต่อ และกิจวัตรในบ้าน โดยเริ่มจากสิ่งที่จำเป็น',
      'Plan entrances, connectivity and home routines, starting with what is useful.',
    ),
    services: ['cctv', 'automation', 'networking', 'access-control'],
    project: 'cctv-upgrade',
    sections: [
      {
        title: bi('เลือกจุดสำคัญก่อนจำนวนอุปกรณ์', 'Choose priorities before device counts'),
        body: bi(
          'ประตูรั้ว ทางเข้า และพื้นที่จอดรถอาจมีแสงและระยะมองเห็นต่างกัน แจ้งจุดที่ต้องการดูภาพและปัญหาปัจจุบัน เพื่อให้การเลือกกล้องสัมพันธ์กับพื้นที่จริง',
          'Gates, entrances and parking spaces have different lighting and viewing distances. Explain the areas you want to see and current problems so camera selection follows the property.',
        ),
      },
      {
        title: bi('เครือข่ายและระบบอัตโนมัติที่ใช้ง่าย', 'Practical connectivity and automation'),
        body: bi(
          'Wi-Fi ภายในบ้านเป็นพื้นฐานของอุปกรณ์หลายชนิด ตรวจจุดอับสัญญาณและระบบสายก่อนเพิ่มอุปกรณ์อัตโนมัติ เลือกกิจวัตรที่ช่วยได้จริง เช่น การควบคุมไฟเป็นกลุ่ม และตรวจวิธีใช้งานเมื่ออินเทอร์เน็ตไม่พร้อม',
          'Home Wi-Fi supports many connected devices. Review weak coverage and cabling before adding automation. Choose useful routines such as grouped lighting, and establish how controls work without internet access.',
        ),
      },
      {
        title: bi('ปรับปรุงบ้านที่ใช้งานอยู่', 'Work with an occupied home'),
        body: bi(
          'เตรียมข้อมูลอุปกรณ์เดิม เส้นทางสายที่ทราบ และข้อจำกัดเรื่องความเรียบร้อย การสำรวจช่วยแยกสิ่งที่ยังใช้ต่อได้ออกจากสิ่งที่ต้องปรับปรุง',
          'Provide existing-equipment information, known cable routes and finish requirements. A survey helps distinguish reusable components from items that need improvement.',
        ),
      },
    ],
    sources: [source('home-automation'), source('cctv-camera-service'), source('upgrade-cctv')],
  },
];
export const commonFAQ: FAQ[] = [
  {
    question: bi(
      'ยังไม่รู้ว่าต้องใช้อุปกรณ์อะไร เริ่มได้ไหม',
      'Can I start without knowing which equipment I need?',
    ),
    answer: bi(
      'ได้ แจ้งปัญหา ลักษณะพื้นที่ และสิ่งที่ต้องการให้ระบบช่วย ทีมงานจะใช้ข้อมูลนี้หารือแนวทางก่อนกำหนดอุปกรณ์',
      'Yes. Describe the problem, the space and what the system needs to do. These are the starting points for discussing an approach before specifying equipment.',
    ),
  },
  {
    question: bi('ประเมินราคาจากอะไร', 'What determines the quotation?'),
    answer: bi(
      'สภาพหน้างาน จำนวนจุดติดตั้ง เส้นทางสาย อุปกรณ์ และขอบเขตการติดตั้งมีผลต่อราคา แจ้งสถานที่และความต้องการเพื่อหารือการประเมินงาน',
      'Site conditions, installation points, cable routes, equipment and scope affect cost. Share the location and requirement to discuss an assessment.',
    ),
  },
  {
    question: bi('รับงานในพื้นที่ใดบ้าง', 'Can AITS work at my location?'),
    answer: bi(
      'AITS มีที่อยู่ติดต่อในกรุงเทพฯ แจ้งที่ตั้งโครงการเพื่อหารือการเข้าสำรวจ การติดตั้ง และการดูแลที่เหมาะกับพื้นที่',
      'AITS has a contact address in Bangkok. Share your project location to discuss suitable survey, installation and support arrangements.',
    ),
  },
];
export const services: Service[] = [
  {
    slug: 'cctv',
    number: '01',
    title: bi('ระบบกล้องวงจรปิด', 'CCTV & video surveillance'),
    summary: bi(
      'มองเห็นจุดสำคัญ บันทึกภาพที่ใช้งานได้ และดูแลระบบต่อได้ ตั้งแต่ติดตั้งใหม่จนถึงปรับปรุงกล้องเดิม',
      'See the areas that matter, record useful footage and keep the system maintainable—from new installations to existing-system upgrades.',
    ),
    sections: [
      {
        title: bi('เริ่มจากสิ่งที่ต้องมองเห็น', 'Start with what needs to be seen'),
        body: bi(
          'ภาพไม่ชัด จุดอับ หรือบันทึกย้อนหลังไม่ได้ ไม่ได้แก้ด้วยการเพิ่มจำนวนกล้องเสมอไป AITS พิจารณาพื้นที่ แสง ระยะมองเห็น และระบบเดิม เพื่อวางตำแหน่งกล้องและเครื่องบันทึกให้เหมาะกับการใช้งานของบ้าน สำนักงาน และพื้นที่ทำงาน',
          'Blurry images, blind spots and missing playback are not always solved by adding cameras. AITS considers the space, lighting, viewing distances and existing infrastructure when planning cameras and recording for homes, offices and working environments.',
        ),
      },
      {
        title: bi('ติดตั้ง ปรับปรุง หรือเช่าใช้ชั่วคราว', 'Install, upgrade or rent temporarily'),
        body: bi(
          'งานติดตั้งใหม่เริ่มจากจุดที่ต้องเฝ้าระวัง งานปรับปรุงตรวจกล้อง เครื่องบันทึก และสายเดิมก่อนเลือกสิ่งที่ต้องเปลี่ยน สำหรับงานชั่วคราวสามารถหารือบริการเช่ากล้องโดยแจ้งสถานที่ ระยะเวลา และจุดใช้งาน เงื่อนไขทั้งหมดระบุในขอบเขตงาน',
          'New installations begin with the areas to monitor. Upgrades assess existing cameras, recorders and cabling before deciding what to replace. Temporary CCTV rental can be discussed using the location, duration and viewing requirements, with terms set out in the project scope.',
        ),
      },
    ],
    scope: [
      bi('สำรวจตำแหน่งและเลือกประเภทกล้อง', 'Position survey and camera selection'),
      bi('เดินสาย ติดตั้งกล้อง และเครื่องบันทึก', 'Cabling, cameras and recorder installation'),
      bi(
        'ตั้งค่าภาพ การบันทึก และการเข้าถึงที่เกี่ยวข้อง',
        'Image, recording and relevant access configuration',
      ),
      bi('ทดสอบภาพและแนะนำการดูย้อนหลัง', 'Image checks and playback guidance'),
    ],
    considerations: [
      bi(
        'จำนวนกล้องควรตามพื้นที่จริง ไม่เลือกจากแพ็กเกจ 4 / 8 / 16 ตัวเพียงอย่างเดียว',
        'Camera count follows the site; a 4, 8 or 16-camera package alone does not define the design.',
      ),
      bi(
        'ระยะเวลาเก็บภาพขึ้นอยู่กับพื้นที่จัดเก็บ คุณภาพภาพ และรูปแบบบันทึก',
        'Retention depends on storage, image settings and recording mode.',
      ),
      bi(
        'การดูผ่านมือถือขึ้นอยู่กับระบบเครือข่ายและสิทธิ์ผู้ใช้',
        'Mobile viewing depends on connectivity and user permissions.',
      ),
    ],
    projects: ['cctv-upgrade'],
    resource: 'cctv-planning',
    faq: [
      ...commonFAQ.slice(0, 2),
      {
        question: bi('ใช้สายหรือกล้องเดิมร่วมได้ไหม', 'Can existing cables or cameras be reused?'),
        answer: bi(
          'ต้องตรวจสภาพและความเข้ากันได้ก่อน อุปกรณ์ที่ยังเหมาะสมอาจใช้งานต่อได้ โดยแยกสิ่งที่เก็บไว้และสิ่งที่เปลี่ยนในขอบเขตงาน',
          'Condition and compatibility need checking first. Suitable components may be retained, with retained and replacement items distinguished in the scope.',
        ),
      },
    ],
    sources: [source('cctv-camera-service'), source('cctv-rental-service'), source('upgrade-cctv')],
  },
  {
    slug: 'access-control',
    number: '02',
    title: bi('ควบคุมการเข้าออกและบันทึกเวลา', 'Access control & attendance'),
    summary: bi(
      'กำหนดว่าใครเข้าพื้นที่ใดได้ เชื่อมเครื่องอ่านกับประตูและวิธีใช้งานจริงขององค์กร',
      'Define who can enter each area, connecting readers and door hardware with the way your organisation works.',
    ),
    sections: [
      {
        title: bi('แยกพื้นที่และสิทธิ์ให้ชัดเจน', 'Make access boundaries clear'),
        body: bi(
          'ประตูสำนักงาน ห้องเก็บของ และพื้นที่จำกัดสิทธิ์มีเงื่อนไขต่างกัน เริ่มจากกลุ่มผู้ใช้งาน ช่วงเวลาที่อนุญาต และรูปแบบประตู ก่อนเลือกบัตร ลายนิ้วมือ หรืออุปกรณ์ยืนยันตัวตนที่เหมาะสม',
          'Office doors, storerooms and restricted areas have different needs. Start with user groups, permitted times and door construction before choosing cards, fingerprints or another suitable credential.',
        ),
      },
      {
        title: bi('พิจารณาทั้งประตูและระบบ', 'Consider the door and the system together'),
        body: bi(
          'AITS มีบริการคีย์การ์ด เครื่องอ่านบัตร เครื่องสแกนลายนิ้วมือ และระบบบันทึกเวลา การวางระบบต้องคำนึงถึงชุดล็อก แหล่งจ่ายไฟ จุดออก และการจัดการสิทธิ์ บันทึกเวลาเข้าออกกับการลงเวลาทำงานเป็นคนละวัตถุประสงค์ จึงควรระบุให้ชัดตั้งแต่เริ่ม',
          'AITS provides keycard, card-reader, fingerprint and attendance services. Planning considers locks, power, exit controls and permission management. Door access logs and employee attendance serve different purposes and should be specified separately.',
        ),
      },
    ],
    scope: [
      bi('สำรวจประตูและกลุ่มผู้ใช้', 'Door and user-group assessment'),
      bi('เลือกเครื่องอ่าน ชุดล็อก และอุปกรณ์ควบคุม', 'Reader, lock and controller selection'),
      bi('เดินสาย ติดตั้ง และตั้งค่าสิทธิ์', 'Cabling, installation and permissions'),
      bi('ตรวจการทำงานและแนะนำผู้ดูแล', 'Operational checks and administrator guidance'),
    ],
    considerations: [
      bi(
        'ตรวจชนิดประตูและพื้นที่ติดตั้งก่อนเลือกชุดล็อก',
        'Check door construction and mounting space before choosing a lock.',
      ),
      bi(
        'หารือการใช้งานเมื่อไฟดับและวิธีออกจากพื้นที่',
        'Discuss power-loss behaviour and how people exit the space.',
      ),
      bi(
        'กำหนดผู้ดูแลและวิธียกเลิกสิทธิ์เมื่อผู้ใช้เปลี่ยน',
        'Define administration and how access is revoked when users change.',
      ),
    ],
    projects: ['industrial-access'],
    resource: 'access-planning',
    faq: commonFAQ,
    sources: [source('access-control-system'), source('security-system'), source('access-control')],
  },
  {
    slug: 'networking',
    number: '03',
    title: bi('เครือข่ายและการเชื่อมต่อ', 'Networks & connectivity'),
    summary: bi(
      'วางโครงข่าย LAN ไฟเบอร์ และ Wi-Fi ให้สัมพันธ์กัน ตั้งแต่เส้นทางสายจนถึงการจัดการผู้ใช้',
      'Plan LAN, fibre and Wi-Fi as one connected system, from cable routes to user management.',
    ),
    sections: [
      {
        title: bi(
          'แก้ปัญหาที่โครงข่าย ไม่ใช่แค่เพิ่มจุด Wi-Fi',
          'Look beyond adding another access point',
        ),
        body: bi(
          'สัญญาณอ่อนและการเชื่อมต่อไม่ต่อเนื่องอาจเกี่ยวกับตำแหน่งอุปกรณ์ จำนวนผู้ใช้งาน สาย หรือระบบต้นทาง AITS สำรวจรูปแบบการใช้งานและโครงสร้างอาคารก่อนออกแบบจุดกระจายสัญญาณและระบบสายที่รองรับ',
          'Weak coverage and interrupted connections may involve device positions, concurrent users, cabling or the upstream connection. AITS examines usage patterns and building infrastructure before planning access points and their wired foundation.',
        ),
      },
      {
        title: bi('โครงข่ายเดียวที่ดูแลต่อได้', 'A network that can be maintained'),
        body: bi(
          'รวมงานสาย LAN ไฟเบอร์ สวิตช์ Access Point และระบบโทรศัพท์ที่เกี่ยวข้องไว้ในแผนเดียว งานเครือข่ายมหาวิทยาลัยที่เผยแพร่แสดงการใช้ CAT6, PoE, SSID/VLAN การติดป้ายสาย การทดสอบสาย และการแนะนำทีม IT ซึ่งเป็นตัวอย่างของการส่งมอบที่มากกว่าการติดอุปกรณ์',
          'Bring LAN, fibre, switches, access points and relevant telephone systems into one plan. The published university installation documents CAT6, PoE, SSID/VLAN setup, cable labels, cable testing and IT guidance—an example of delivery beyond simply mounting devices.',
        ),
      },
    ],
    scope: [
      bi('สำรวจจุดใช้งานและเส้นทางสาย', 'Usage points and cable-route survey'),
      bi('ติดตั้ง LAN และไฟเบอร์ตามลักษณะงาน', 'LAN and fibre installation for the site'),
      bi(
        'ติดตั้งสวิตช์ Access Point และตั้งค่าเครือข่าย',
        'Switches, access points and network configuration',
      ),
      bi(
        'ติดป้าย ทดสอบ และส่งมอบข้อมูลให้ผู้ดูแล',
        'Labelling, testing and administrator handover',
      ),
    ],
    considerations: [
      bi(
        'แพ็กเกจอินเทอร์เน็ตกับเครือข่ายภายในอาคารเป็นคนละส่วน',
        'The internet subscription and the network inside the building are separate parts.',
      ),
      bi(
        'แจ้งจำนวนผู้ใช้พร้อมกัน แอปพลิเคชัน และพื้นที่สำคัญ',
        'Identify concurrent users, applications and priority areas.',
      ),
      bi(
        'วางแผนกำลังไฟ PoE ตู้ระบบ และการขยายในอนาคต',
        'Plan PoE power, equipment racks and future expansion.',
      ),
    ],
    projects: ['university-network'],
    resource: 'network-planning',
    faq: commonFAQ,
    sources: [
      source('network-service'),
      source('internet-system'),
      source('telephone-system'),
      source('access-point-for-university'),
    ],
  },
  {
    slug: 'automation',
    number: '04',
    title: bi('ระบบอัตโนมัติสำหรับบ้านและอาคาร', 'Home & building automation'),
    summary: bi(
      'เริ่มจากกิจวัตรที่ต้องการให้ง่ายขึ้น แล้วเลือกการควบคุมไฟ อุณหภูมิ และอุปกรณ์ที่ทำงานร่วมกันได้',
      'Start with everyday routines, then select compatible lighting, temperature and device controls.',
    ),
    sections: [
      {
        title: bi('ออกแบบจากสถานการณ์ใช้งาน', 'Design around practical routines'),
        body: bi(
          'การกลับบ้าน การปิดพื้นที่ก่อนออก หรือการควบคุมอุปกรณ์เป็นกลุ่ม เป็นจุดเริ่มต้นที่ชัดเจนกว่าการเลือกอุปกรณ์ทีละชิ้น AITS ให้บริการออกแบบและติดตั้ง Home Automation โดยพิจารณาระบบไฟ เครือข่าย และอุปกรณ์เดิม',
          'Arriving home, closing down a space or controlling groups of devices are clearer starting points than buying isolated gadgets. AITS designs and installs home automation with consideration for electrical infrastructure, connectivity and existing equipment.',
        ),
      },
      {
        title: bi('คงวิธีควบคุมที่เข้าใจง่าย', 'Keep control understandable'),
        body: bi(
          'หารือว่าฟังก์ชันใดต้องใช้แอป อินเทอร์เน็ต หรือสวิตช์เดิม ตรวจความเข้ากันได้ก่อนเพิ่มอุปกรณ์ และกำหนดผู้ดูแลบัญชี การติดตามการใช้พลังงานช่วยให้เห็นข้อมูล แต่ไม่ควรตีความเป็นตัวเลขประหยัดที่รับประกัน',
          'Discuss which functions use an app, internet connection or existing switch. Check compatibility before adding devices and define account ownership. Energy monitoring can provide information, but does not establish a guaranteed saving.',
        ),
      },
    ],
    scope: [
      bi('กำหนดสถานการณ์และอุปกรณ์ที่ต้องควบคุม', 'Define routines and controlled devices'),
      bi(
        'ตรวจระบบไฟและเครือข่ายที่เกี่ยวข้อง',
        'Review relevant electrical and network infrastructure',
      ),
      bi('ติดตั้งและตั้งค่าการทำงานร่วมกัน', 'Install and configure connected operation'),
      bi('แนะนำการใช้งานและการดูแลบัญชี', 'Explain operation and account management'),
    ],
    considerations: [
      bi('ตรวจความเข้ากันได้ของอุปกรณ์และระบบควบคุม', 'Check device and controller compatibility.'),
      bi(
        'ระบุวิธีใช้เมื่ออินเทอร์เน็ตไม่พร้อม',
        'Define operation when internet access is unavailable.',
      ),
      bi('เริ่มจากพื้นที่จำเป็นและวางแผนการขยาย', 'Start with useful areas and plan expansion.'),
    ],
    projects: [],
    resource: 'automation-planning',
    faq: commonFAQ,
    sources: [
      source('home-automation'),
      source('smart-home'),
      source('smart-energy-optimization-2'),
    ],
  },
  {
    slug: 'meeting-rooms',
    number: '05',
    title: bi('ระบบห้องประชุม', 'Meeting-room systems'),
    summary: bi(
      'จัดระบบภาพ เสียง และการประชุมทางไกลให้เหมาะกับห้องและผู้ใช้',
      'Coordinate display, audio and remote meetings around the room and its users.',
    ),
    sections: [
      {
        title: bi(
          'ให้คนในห้องและผู้เข้าร่วมทางไกลใช้งานร่วมกัน',
          'Connect people in the room and remotely',
        ),
        body: bi(
          'ขนาดห้อง ตำแหน่งที่นั่ง วิธีนำเสนอ และแพลตฟอร์มประชุมมีผลต่อการเลือกอุปกรณ์ AITS มีบริการระบบห้องประชุมและประสบการณ์งานประชุมทางไกลที่ระบุในประวัติบริษัท จึงเริ่มจากรูปแบบการประชุมก่อนกำหนดระบบ',
          'Room size, seating, presentation methods and meeting platforms affect equipment choices. AITS offers meeting-room systems and documents remote-meeting work in its company history. Planning begins with the meeting format before selecting the system.',
        ),
      },
      {
        title: bi('ลดความซับซ้อนก่อนเริ่มประชุม', 'Make everyday setup easier'),
        body: bi(
          'วางจุดเชื่อมต่ออุปกรณ์ เส้นทางสาย จอ และเสียงให้สัมพันธ์กับการใช้งาน ตรวจว่าคอมพิวเตอร์และแพลตฟอร์มที่องค์กรใช้เชื่อมต่อได้อย่างไร และกำหนดขั้นตอนเปิดใช้งานที่ผู้ดูแลอธิบายต่อได้',
          'Coordinate connection points, cable routes, displays and audio with everyday use. Establish how the organisation’s computers and meeting platforms connect, and define a startup sequence that administrators can explain to users.',
        ),
      },
    ],
    scope: [
      bi('สำรวจห้องและรูปแบบประชุม', 'Room and meeting-format assessment'),
      bi('กำหนดระบบภาพ เสียง และการเชื่อมต่อ', 'Display, audio and connection planning'),
      bi('ติดตั้งอุปกรณ์และจัดระเบียบสาย', 'Equipment installation and cable organisation'),
      bi('ตรวจการใช้งานร่วมกับอุปกรณ์ของผู้ใช้', 'Check operation with users’ equipment'),
    ],
    considerations: [
      bi(
        'เตรียมข้อมูลขนาดห้องและจำนวนผู้เข้าร่วม',
        'Provide room dimensions and typical participant numbers.',
      ),
      bi(
        'แจ้งแพลตฟอร์มประชุมและอุปกรณ์ที่ใช้อยู่',
        'Identify existing meeting platforms and equipment.',
      ),
      bi(
        'พิจารณาเสียงรบกวน แสง และตำแหน่งจอ',
        'Consider background noise, light and screen position.',
      ),
    ],
    projects: [],
    resource: 'network-planning',
    faq: commonFAQ,
    sources: [source('smart-meeting-room'), source('about-us')],
  },
  {
    slug: 'building-services',
    number: '06',
    title: bi('บริการอาคารเพิ่มเติม', 'Additional building services'),
    summary: bi(
      'หารืองานโซลาร์เซลล์ ฟิล์มกระจก และรีโนเวท โดยกำหนดขอบเขตตามสภาพพื้นที่',
      'Discuss solar, window film and renovation with a scope based on the property.',
    ),
    sections: [
      {
        title: bi('พิจารณาความเหมาะสมเป็นรายงาน', 'Assess each property on its own terms'),
        body: bi(
          'เว็บไซต์ AITS มีบริการโซลาร์เซลล์ ฟิล์มกระจก และรีโนเวทบ้าน งานเหล่านี้มีเงื่อนไขหน้างานเฉพาะ จึงควรเริ่มจากเป้าหมาย ปัญหาปัจจุบัน และข้อมูลพื้นที่ ก่อนตกลงรายละเอียดและราคา',
          'AITS’s published service range includes solar, window film and home renovation. Each depends on property-specific conditions, so begin with the objective, existing problem and site information before agreeing details and pricing.',
        ),
      },
      {
        title: bi('กำหนดสิ่งที่ต้องทำให้ชัด', 'Set out the work clearly'),
        body: bi(
          'สำหรับโซลาร์เซลล์ เตรียมข้อมูลการใช้ไฟและพื้นที่ติดตั้ง สำหรับฟิล์มกระจก ระบุพื้นที่และปัญหาแสงหรือความร้อน สำหรับรีโนเวท อธิบายการใช้งานใหม่และข้อจำกัดของอาคาร ไม่ใช้ตัวเลขคืนทุนหรือประสิทธิภาพที่ยังไม่ได้ประเมิน',
          'For solar, prepare electricity-use and installation-area information. For window film, identify glazing and light or heat concerns. For renovation, describe the new use and building constraints. Payback or performance figures require a project-specific assessment.',
        ),
      },
    ],
    scope: [
      bi('รับฟังเป้าหมายและข้อมูลพื้นที่', 'Review objectives and property information'),
      bi('สำรวจสภาพและข้อจำกัด', 'Assess conditions and constraints'),
      bi('กำหนดวัสดุและขอบเขตในใบเสนอราคา', 'Specify materials and scope in the quotation'),
      bi('หารือแผนติดตั้งและการดูแล', 'Discuss installation and care'),
    ],
    considerations: [
      bi('ขอบเขตและเงื่อนไขแยกตามประเภทงาน', 'Scope and terms differ by work type.'),
      bi('ราคาขึ้นกับพื้นที่และวัสดุที่เลือก', 'Cost depends on the site and selected materials.'),
      bi('แจ้งที่ตั้งเพื่อหารือการเข้าสำรวจ', 'Share the location to discuss a survey.'),
    ],
    projects: [],
    resource: 'automation-planning',
    faq: commonFAQ,
    sources: [source('solar-cell-system'), source('window-film'), source('home-renovation')],
  },
];
