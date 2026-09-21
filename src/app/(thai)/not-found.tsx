import Link from 'next/link';
export default function NotFound() {
  return (
    <div className="container error-page">
      <p className="eyebrow">404</p>
      <h1>ไม่พบหน้านี้</h1>
      <p>ตรวจสอบที่อยู่ หรือเลือกโซลูชันที่ต้องการจากเมนู</p>
      <Link className="button" href="/">
        กลับหน้าแรก
      </Link>
    </div>
  );
}
