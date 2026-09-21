export const requiredFields = ['name', 'contact', 'location', 'requirement'] as const;
export type FieldName = (typeof requiredFields)[number];
export type SurveyErrors = Partial<Record<FieldName | 'email' | 'form', string>>;
export function validateSurvey(input: Record<string, unknown>): SurveyErrors {
  const errors: SurveyErrors = {};
  for (const key of requiredFields) {
    const v = input[key];
    if (
      typeof v !== 'string' ||
      !v.trim() ||
      v.trim().length > { name: 100, contact: 150, location: 250, requirement: 2000 }[key]
    )
      errors[key] = 'required_or_length';
  }
  if (
    typeof input.email === 'string' &&
    input.email &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.email)
  )
    errors.email = 'email';
  for (const key of ['company', 'timing', 'method', 'service', 'email'])
    if (
      input[key] !== undefined &&
      (typeof input[key] !== 'string' || (input[key] as string).length > 250)
    )
      errors.form = 'invalid';
  return errors;
}
