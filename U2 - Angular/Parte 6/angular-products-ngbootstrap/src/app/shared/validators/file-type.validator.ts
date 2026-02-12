import { SchemaPath, validate } from "@angular/forms/signals";

export function fileType(
  field: SchemaPath<string>,
  type: string,
  options?: { message?: string },
) {
  validate(field, ({ fieldTree }) => {
    const fileInput = fieldTree().formFieldBindings()[0]?.element as HTMLInputElement | undefined;
    const file = fileInput?.files?.[0];
    if(file && !file.type.startsWith(type)) {
      return {
        kind: 'fileType',
        message: options?.message ?? `File type must be ${type}`,
      };
    }
    return null;
  });
}
