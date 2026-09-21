'use client';
import { useRef, useState } from 'react';
import Link from 'next/link';
import type { Locale } from '@/content/model';
import { services } from '@/content/data';
import { href } from '@/lib/site';
import { validateSurvey, type SurveyErrors } from '@/lib/form';
import { track } from './analytics';
export function SurveyForm({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const [errors, setErrors] = useState<SurveyErrors>({}),
    [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const started = useRef(false),
    result = useRef<HTMLDivElement>(null);
  const fields = [
    ['name', 'ชื่อผู้ติดต่อ', 'Your name', 100],
    ['contact', 'เบอร์โทรหรือช่องทางติดต่อกลับ', 'Phone or preferred contact', 150],
    ['location', 'ที่ตั้งโครงการ', 'Project location', 250],
    ['requirement', 'ปัญหาหรือสิ่งที่ต้องการ', 'Brief requirement', 2000],
  ] as const;
  const errorText =
    locale === 'th'
      ? 'กรุณากรอกข้อมูลให้ครบและไม่เกินจำนวนอักขระที่กำหนด'
      : 'Enter this information within the stated character limit.';
  async function submit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const found = validateSurvey(values);
    setErrors(found);
    if (Object.keys(found).length) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(found)[0]}"]`)?.focus();
      return;
    }
    setStatus('sending');
    try {
      const response = await fetch('/api/site-survey/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...values, locale }),
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors(data.errors || { form: 'invalid' });
        setStatus('error');
      } else {
        setStatus('success');
        track('site_survey_submit', { mode: 'mock', locale });
        form.reset();
      }
    } catch {
      setStatus('error');
    }
    setTimeout(() => result.current?.focus(), 0);
  }
  return (
    <form
      className="survey-form"
      noValidate
      onSubmit={submit}
      onFocus={() => {
        if (!started.current) {
          track('site_survey_start', { locale });
          started.current = true;
        }
      }}
    >
      <p className="form-note">
        {locale === 'th'
          ? 'แบบฟอร์มสาธิต: ข้อมูลจะถูกตรวจสอบในเครื่องและไม่ส่งถึง AITS กรุณาใช้ข้อมูลทดสอบ'
          : 'Demonstration form: information is validated locally and is not delivered to AITS. Please use test information.'}
      </p>
      <p className="required-note">
        {locale === 'th' ? 'ช่องที่มี * จำเป็นต้องกรอก' : 'Fields marked * are required'}
      </p>
      <div className="form-grid">
        {fields.map(([name, th, en, max]) => (
          <div key={name} className={name === 'requirement' || name === 'location' ? 'full' : ''}>
            <label htmlFor={`survey-${name}`}>
              {locale === 'th' ? th : en} <span aria-hidden="true">*</span>
            </label>
            {name === 'requirement' ? (
              <textarea
                id={`survey-${name}`}
                name={name}
                required
                rows={4}
                maxLength={max}
                aria-invalid={!!errors[name]}
                aria-describedby={errors[name] ? `error-${name}` : undefined}
              />
            ) : (
              <input
                id={`survey-${name}`}
                name={name}
                required
                maxLength={max}
                autoComplete={name === 'name' ? 'name' : name === 'contact' ? 'tel' : 'off'}
                aria-invalid={!!errors[name]}
                aria-describedby={errors[name] ? `error-${name}` : undefined}
              />
            )}
            <small>{locale === 'th' ? `ไม่เกิน ${max} อักขระ` : `Up to ${max} characters`}</small>
            {errors[name] && (
              <p id={`error-${name}`} className="field-error">
                {errorText}
              </p>
            )}
          </div>
        ))}
      </div>
      {!compact && (
        <details className="optional-fields">
          <summary>
            {locale === 'th' ? 'เพิ่มข้อมูลเพิ่มเติม (ไม่บังคับ)' : 'Add optional details'}
          </summary>
          <div className="form-grid">
            <div>
              <label htmlFor="company">{locale === 'th' ? 'บริษัท' : 'Company'}</label>
              <input id="company" name="company" maxLength={250} autoComplete="organization" />
            </div>
            <div>
              <label htmlFor="email">{locale === 'th' ? 'อีเมล' : 'Email'}</label>
              <input
                type="email"
                id="email"
                name="email"
                maxLength={250}
                autoComplete="email"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'error-email' : undefined}
              />
              {errors.email && (
                <p id="error-email" className="field-error">
                  {locale === 'th' ? 'กรุณาตรวจสอบรูปแบบอีเมล' : 'Enter a valid email address.'}
                </p>
              )}
            </div>
            <div className="full">
              <label htmlFor="service">{locale === 'th' ? 'ระบบที่สนใจ' : 'Service'}</label>
              <select id="service" name="service">
                <option value="advice">
                  {locale === 'th'
                    ? 'ยังไม่แน่ใจว่าต้องใช้ระบบแบบใด ต้องการให้ AITS แนะนำ'
                    : "I'm not sure which system I need — please recommend an appropriate solution."}
                </option>
                {services.map((s) => (
                  <option key={s.slug} value={s.slug}>
                    {s.title[locale]}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="method">
                {locale === 'th' ? 'วิธีติดต่อที่สะดวก' : 'Preferred contact method'}
              </label>
              <select id="method" name="method">
                <option value="phone">{locale === 'th' ? 'โทรศัพท์' : 'Phone'}</option>
                <option value="line">LINE</option>
                <option value="email">{locale === 'th' ? 'อีเมล' : 'Email'}</option>
              </select>
            </div>
            <div>
              <label htmlFor="timing">
                {locale === 'th' ? 'ช่วงเวลาที่วางแผน' : 'Project timing'}
              </label>
              <input id="timing" name="timing" maxLength={250} />
            </div>
          </div>
          <p>
            {locale === 'th'
              ? 'รูปพื้นที่หรือแปลนสามารถใช้ประกอบการหารือในขั้นตอนถัดไป แบบฟอร์มนี้ไม่รับไฟล์'
              : 'Site photos or plans can support the next discussion. This form does not collect files.'}
          </p>
        </details>
      )}
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input name="website" id="website" tabIndex={-1} autoComplete="off" />
      </div>
      <p className="privacy-note">
        {locale === 'th'
          ? 'ใช้ข้อมูลเพื่อจำลองการประเมินคำขอ ไม่มีการบันทึกหรือส่งอีเมล'
          : 'Information is used to simulate request validation. It is not stored or emailed.'}{' '}
        <Link href={href(locale, 'privacy')}>
          {locale === 'th' ? 'รายละเอียดความเป็นส่วนตัว' : 'Privacy details'}
        </Link>
      </p>
      <button className="button" disabled={status === 'sending'} type="submit">
        {status === 'sending'
          ? locale === 'th'
            ? 'กำลังตรวจสอบ…'
            : 'Checking…'
          : locale === 'th'
            ? 'ทดลองส่งคำขอ'
            : 'Send test request'}{' '}
        <span aria-hidden="true">↗</span>
      </button>
      <div
        ref={result}
        tabIndex={-1}
        role="status"
        className={`form-result ${status === 'success' ? 'success' : ''}`}
      >
        {status === 'success'
          ? locale === 'th'
            ? 'ตรวจสอบข้อมูลสำเร็จ นี่เป็นการทดสอบเท่านั้น ไม่มีคำขอถูกส่งถึง AITS หากต้องการติดต่อจริง เลือกโทร LINE หรืออีเมลจากหน้าติดต่อ'
            : 'Validation complete. This was a test only; no enquiry was sent to AITS. For a real conversation, choose phone, LINE or email on the contact page.'
          : status === 'error'
            ? locale === 'th'
              ? 'ตรวจสอบไม่สำเร็จ กรุณาตรวจข้อมูลหรือลองใหม่'
              : 'The request could not be checked. Review the details or try again.'
            : null}
      </div>
    </form>
  );
}
