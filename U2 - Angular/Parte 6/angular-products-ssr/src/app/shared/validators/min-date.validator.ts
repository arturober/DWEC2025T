import { SchemaPath, validate } from "@angular/forms/signals";

export function minDate(
  field: SchemaPath<string>,
  minDate: string,
  options?: { message?: string },
) {
  validate(field, ({ value }) => {
    if (value() && value() < minDate) {
      return {
        kind: 'minDate',
        message: options?.message ?? `Date can't be before ${minDate}`,
      };
    }
    return null;
  });
}
