// src/declarations.d.ts
declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}
