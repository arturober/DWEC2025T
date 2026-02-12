import { SchemaPath, validate } from "@angular/forms/signals";

export function maxSize(
  field: SchemaPath<string>,
  maxSize: number,
  options?: { message?: string },
) {
  validate(field, ({ fieldTree }) => {
    const fileInput = fieldTree().formFieldBindings()[0]?.element as HTMLInputElement | undefined;
    const file = fileInput?.files?.[0];
    if(file && file.size > maxSize) {
      return {
        kind: 'maxSize',
        message: options?.message ?? `File size can't be greater than ${maxSize/1024} kbytes`,
      };
    }
    return null;
  });
}
